ServerEvents.recipes(lava => {
    lava.remove({output: 'mekanism:ultimate_energy_cube'})
    lava.remove({output: 'powah:crystal_nitro'})
    lava.remove({output: 'draconicevolution:wyvern_crafting_injector'})
    lava.remove({output: 'draconicevolution:awakened_crafting_injector'})
    lava.remove({output: 'draconicevolution:energy_pylon'})
    lava.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "mekanism:elite_energy_cube"
  },
  "ingredients": [
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:highly_advanced_machine_hull"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:wyvern_core"
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
        "item": "draconicevolution:draconic_energy_core"
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
    "id": "mekanism:ultimate_energy_cube"
  },
  "techLevel": "wyvern",
  "totalEnergy": 5000000000
}),

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "powah:crystal_spirited" },
    ingredients: [
      { consume: true, ingredient: { item: "powah:crystal_blazing" } },
      { consume: true, ingredient: { item: "powah:crystal_niotic" } },
      { consume: true, ingredient: { item: "mekanism:alloy_reinforced" } },
      { consume: true, ingredient: { item: "lava:corruptite" } },
      { consume: true, ingredient: { item: "mekanism:alloy_reinforced" } },
      { consume: true, ingredient: { item: "lava:corruptite" } },
      { consume: true, ingredient: { item: "mekanism:alloy_reinforced" } },
      { consume: true, ingredient: { item: "lava:corruptite" } }
    ],
    result: { id: "powah:crystal_nitro", count: 1 },
    techLevel: "draconium",  
    totalEnergy: 124000000  
  }).id("lava:de/fusion/nitro_crystal")

  lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "mekanism:ultimate_induction_provider" },
    ingredients: [
      { consume: true, ingredient: { item: "mekanism:pellet_antimatter" } },
      { consume: true, ingredient: { item: "mekanism:pellet_antimatter" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
      { consume: true, ingredient: { item: "lava:azura_coin" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
      { consume: true, ingredient: { item: "lava:azura_coin" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
      { consume: true, ingredient: { item: "lava:azura_coin" } }
    ],
    result: { id: "draconicevolution:energy_pylon", count: 2 },
    techLevel: "wyvern",  
    totalEnergy: 69696969  
  }).id("lava:de/fusion/energy_pylon")

 lava.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:basic_crafting_injector"
  },
  "ingredients": [
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:draconium_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:wyvern_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:draconium_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:draconium_block"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:quantum_circuit"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:quantum_circuit"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:quantum_circuit"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:quantum_circuit"
      }
    }
  ],
  "result": {
    "count": 1,
    "id": "draconicevolution:wyvern_crafting_injector"
  },
  "techLevel": "draconium",
  "totalEnergy": 50000000
}),

lava.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:wyvern_crafting_injector"
  },
  "ingredients": [
    {
      "consume": true,
      "ingredient": {
        "item": "modern_industrialization:quantum_machine_hull"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:awakened_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:wyvern_core"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "mekanism:pellet_antimatter"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:awakened_draconium_block"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:awakened_draconium_block"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:awakened_draconium_block"
      }
    },
    {
      "consume": true,
      "ingredient": {
        "item": "draconicevolution:awakened_draconium_block"
      }
    }
  ],
  "result": {
    "count": 1,
    "id": "draconicevolution:awakened_crafting_injector"
  },
  "techLevel": "wyvern",
  "totalEnergy": 256000000
})
})
