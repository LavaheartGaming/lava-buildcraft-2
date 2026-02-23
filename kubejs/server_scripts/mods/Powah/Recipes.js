ServerEvents.recipes(lava => {
    lava.remove({output: 'mekanism:alloy_reinforced'})
    lava.remove({output: 'artifacts:eternal_steak'})
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
}),
    lava.custom(
        {
  "type": "powah:energizing",
  "energy": 2000000,
  "ingredients": [
    {
      "item": "artifacts:everlasting_beef"
    },
    {
      "item": "avaritia:blaze_cube"
    },
    {
      "item": "silentgear:blaze_gold_dust"
    },
    {
      "item": "pamhc2crops:spiceleafitem"
    }
  ],
  "result": {
    "count": 1,
    "id": "artifacts:eternal_steak"
  }
})
})