//priority: -1

(() =>
{

const removedIngredient = () => Ingredient.of(global.REMOVED)
	const removedStack = itemStack => itemStack && !itemStack.empty && removedIngredient().test(itemStack)
	const removedBlockID = blockID => global.REMOVED.includes(blockID)
  
const handleItemEvent = (itemEvent, mode) =>
	{
		if (mode === "cancel")
			itemEvent.cancel()
		else if (mode === "delete")
			itemEvent.item.setCount(0)
	}
	
	const sanitizeStack = itemStack =>
	{
		if (!itemStack || itemStack.empty)
			return
		
		if (removedStack(itemStack))
		{
			itemStack.setCount(0)
			return
		}
		
		const nbt = itemStack.nbt
		if (!nbt)
			return
			
		if (Ingredient.of(/^[^:]+:.*(?:sword|pickaxe|shovel|axe|hoe|helmet|chestplate|leggings|boots|gloves|bow|lance|slayer|rod|paxel|hammer|excavator|knife|lance)/).test(itemStack))
		{
			;["Enchantments", "StoredEnchantments"].forEach(key => nbt.remove(key))
			itemStack.nbt = nbt
		}
		
		if (Ingredient.of(/^[^:]+:(?:.*potion|tipped_arrow)$/i).test(itemStack))
		{
			nbt.putString("Potion", "minecraft:water")
			;["CustomPotionEffects", "CustomPotionColor"].forEach(key => nbt.remove(key))
			itemStack.nbt = nbt
		}
		
		if (Ingredient.of(/^[^:]+:.*_furnace$/).test(itemStack))
				nbt.remove("BlockEntityTag")
	}
	
	const parseItem = (itemEvent, mode) =>
	{
		const itemStack = itemEvent.item
		if (!itemStack || itemStack.empty)
			return
		
		if (removedStack(itemStack))
		{
			handleItemEvent(itemEvent, mode)
			return
		}
		
		sanitizeStack(itemStack)
	}

  const purgeSlot = container =>
	{
		const menu = container.openedMenu ?? container.containerMenu
		if (!menu?.slots)
			return
		
		menu.slots.forEach(slot =>
		{
			const item = slot.item
			if (!item || item.empty)
				return
			
			if (removedStack(item))
			{
				item.setCount(0)
				return
			}
			
			sanitizeStack(item)
		})
	}

  function Obliterate()
  {
    PlayerEvents.inventoryChanged(cont => { purgeSlot(cont.player) })
		PlayerEvents.inventoryOpened(cont => { purgeSlot(cont.player) })
		ServerEvents.tick(event =>
		{
			event.server.entities.filterSelector("@e[type=item]").forEach(it =>
			{
				const st = it.item
				if (removedStack(st))
					it.kill()
			})
		})
		
		// Item interactions event purger
		ItemEvents.dropped(itm => { parseItem(itm, "cancel") })
		ItemEvents.canPickUp(itm => { parseItem(itm, "cancel") })
		ItemEvents.pickedUp(itm => { parseItem(itm, "delete") })

    ServerEvents.recipes(recipe =>
		{
			global.REMOVED.forEach(rule => recipe.remove({ output: rule }))
			
			// Removes tool repairing in crafting grids
			recipe.remove({ type: "minecraft:crafting_special_repairitem" })
		})
		BlockEvents.rightClicked(click =>
		{
			const id = click.block.id
			if (removedBlockID(id) && !global.TCHESTS.includes(id))
				click.cancel()
		})
		
		// Object placement event prevention*
		BlockEvents.placed(click =>
		{
			if (!removedBlockID(click.block.id))
				return
			
			click.cancel()
			
			[click.player.mainHandItem, click.player.offHandItem].forEach(slot =>
			{
				if (removedStack(slot))
					slot.setCount(0)
			})
		})
		
		// Loot table purger**
		LootJS.modifiers(loot =>
		{
			 loot.addTableModifier(/.*/).removeLoot(global.REMOVED)
       })
	}
	Obliterate()
})()