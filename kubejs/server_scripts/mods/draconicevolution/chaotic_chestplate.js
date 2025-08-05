ServerEvents.recipes(lava => {
    lava.remove({output: 'draconicevolution:chaotic_chestpiece'})
    lava.custom(
 {
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:draconic_chestpiece"
  },
  "ingredients": [
    {
      "consume": true,
      "ingredient": {
        "item": "lava:infinity_chestplate"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:chaotic_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium_awakened"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium_awakened"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium_awakened"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium_awakened"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:chaotic_energy_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "tag": "c:ingots/draconium_awakened"
      }
    }
  ],
  "result": {
    "count": 1,
    "id": "draconicevolution:chaotic_chestpiece"
  },
  "techLevel": "chaotic",
  "totalEnergy": 800000000000000
})  
})
