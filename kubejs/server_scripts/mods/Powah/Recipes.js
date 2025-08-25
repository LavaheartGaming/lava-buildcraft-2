ServerEvents.recipes(lava => {
    lava.remove({output: 'mekanism:alloy_reinforced'})
    lava.custom(
        {
  "type": "powah:energizing",
  "energy": 1200000,
  "ingredients": [
    {
      "item": "minecraft:diamond"
    },
    {
      "item": "enderio:ender_crystal"
    },
    {
      "item": "mekanism:alloy_infused"
    },
    {
      "item": "minecraft:diamond"
    }
  ],
  "result": {
    "count": 1,
    "id": "mekanism:alloy_reinforced"
  }
})
})