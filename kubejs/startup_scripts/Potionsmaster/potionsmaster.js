global.potions_server = [
  {
    id: 'coal',
    color: -14671840,
    item: 'minecraft:coal',
    name: 'Coal'
  },
  {
    id: 'gold',
    color: -2838729,
    item: '#c:raw_materials/gold',
    name: 'Gold'
  },
  {
    id: 'iron',
    color: -1785686,
    item: '#c:raw_materials/iron',
    name: 'Iron'
  },
  {
    id: 'copper',
    color: -4755398,
    item: '#c:raw_materials/copper',
    name: 'Copper'
  },
  {
    id: 'diamond',
    color: -12723229,
    item: '#c:gems/diamond',
    name: 'Diamond'
  },
  {
    id: 'emerald',
    color: -16711936,
    item: '#c:gems/emerald',
    name: 'Emerald'
  },
  {
    id: 'lapis',
    color: -16776961,
    item: '#c:gems/lapis',
    name: 'Lapis'
  },
  {
    id: 'netherite_scrap',
    color: -23296,
    item: 'minecraft:netherite_scrap',
    name: 'Netherite'
  },
  {
    id: 'quartz',
    color: -1,
    item: '#c:gems/quartz',
    name: 'Quartz'
  },
  {
    id: 'redstone',
    color: -65536,
    item: 'minecraft:redstone',
    name: 'Redstone'
  },
  {
    id: 'aluminum',
    color: -1842205,
    item: '#c:raw_materials/aluminum',
    name: 'Aluminum'
  },
  {
    id: 'tin',
    color: -8882056,
    item: '#c:raw_materials/tin',
    name: 'Tin'
  },
  {
    id: 'lead',
    color: -8614714,
    item: '#c:raw_materials/lead',
    name: 'Lead'
  },
  {
    id: 'silver',
    color: -5971737,
    item: '#c:raw_materials/silver',
    name: 'Silver'
  },
  {
    id: 'nickel',
    color: -5658236,
    item: '#c:raw_materials/nickel',
    name: 'Nickel'
  },
  {
    id: 'uranium',
    color: -8460424,
    item: '#c:raw_materials/uranium',
    name: 'Uranium'
  },
  {
    id: 'osmium',
    color: -16777012,
    item: '#c:raw_materials/osmium',
    name: 'Osmium'
  },
  {
    id: 'platinum',
    color: -4868609,
    item: '#c:raw_materials/platinum',
    name: 'Platinum'
  },
  {
    id: 'zinc',
    color: -4868747,
    item: '#c:raw_materials/zinc',
    name: 'Zinc'
  }
]

StartupEvents.registry('item', lava => {
   global.potions_server.forEach(potion => {
        lava.create(`potionsmaster:calcinated_${potion.id}_oresight_powder`)
            .displayName(`Calcinated ${potion.name} Oresight Powder`)
            .texture(`kubejs:item/calcinated_base`)
            .maxStackSize(64)
            .color(potion.color)
        lava.create(`potionsmaster:${potion.id}_oresight_powder`)
            .displayName(`${potion.name} Oresight Powder`)
            .texture(`kubejs:item/base_powder`)
            .maxStackSize(64)
            .color(potion.color)
        })})

StartupEvents.modifyCreativeTab('potionsmaster:creative_tab', lava => {
  global.potions_server.forEach(potion => {
        lava.add(`potionsmaster:calcinated_${potion.id}_oresight_powder`)
        lava.add(`potionsmaster:${potion.id}_oresight_powder`)
    })

})