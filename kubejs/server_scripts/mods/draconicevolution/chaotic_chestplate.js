ServerEvents.recipes(lava => {
    lava.remove({output: 'draconicevolution:wyvern_chestpiece'})
    lava.custom(
 {
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "lava:infinity_chestplate"
  },
  "ingredients": [
    {
      "consume": true,
      "ingredient": {
        "item": "mekanism:mekasuit_bodyarmor"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:gravichestplate"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "advanced_ae:quantum_chestplate"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:wyvern_energy_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium"
      }
    }
  ],
  "result": {
    "count": 1,
    "id": "draconicevolution:wyvern_chestpiece"
  },
  "techLevel": "chaotic",
  "totalEnergy": 800000000000000
})  
})
