ServerEvents.recipes(lava => {
    lava.remove({output: 'mekanism:ultimate_energy_cube'})
    lava.remove({output: 'powah:crystal_nitro'})
    lava.remove({output: 'draconicevolution:wyvern_crafting_injector'})
    lava.remove({output: 'draconicevolution:awakened_crafting_injector'})
    lava.remove({output: 'draconicevolution:energy_pylon'})
    lava.remove({output: 'draconicevolution:draconic_axe'})
    lava.remove({output: 'draconicevolution:draconic_pickaxe'})
    lava.remove({output: 'draconicevolution:draconic_shovel'})
    lava.remove({output: 'draconicevolution:draconic_sword'})
    lava.remove({output: 'draconicevolution:draconic_bow'})
    lava.remove({output: 'draconicevolution:wyvern_sword'})
    lava.remove({output: 'draconicevolution:wyvern_axe'})
    lava.remove({output: 'draconicevolution:wyvern_pickaxe'})
    lava.remove({output: 'draconicevolution:wyvern_shovel'})
    lava.remove({output: 'draconicevolution:wyvern_bow'})

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "lava:cosmic_sword" },
    ingredients: [
      { consume: true, ingredient: { item: "avaritia:crystal_sword" } },
      { consume: true, ingredient: { item: "mysticalagriculture:awakened_supremium_sword" } },
      { consume: true, ingredient: { item: "mekanism:atomic_disassembler" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_cell" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_provider" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:wyvern_sword", count: 1 },
    techLevel: "wyvern",  
    totalEnergy: 100000000000  
  }).id("lava:de/fusion/wyvern_sword")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "justdirethings:eclipsealloy_pickaxe" },
    ingredients: [
      { consume: true, ingredient: { item: "avaritia:crystal_pickaxe" } },
      { consume: true, ingredient: { item: "mysticalagriculture:awakened_supremium_pickaxe" } },
      { consume: true, ingredient: { item: "mekanism:atomic_disassembler" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_cell" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_provider" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:wyvern_pickaxe", count: 1 },
    techLevel: "wyvern",  
    totalEnergy: 100000000000  
  }).id("lava:de/fusion/wyvern_pickaxe")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "justdirethings:bow_eclipsealloy" },
    ingredients: [
      { consume: true, ingredient: { item: "avaritia:crystal_bow" } },
      { consume: true, ingredient: { item: "mysticalagriculture:awakened_supremium_bow" } },
      { consume: true, ingredient: { item: "cataclysm:cursed_bow" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_cell" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_provider" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:wyvern_bow", count: 1 },
    techLevel: "wyvern",  
    totalEnergy: 100000000000  
  }).id("lava:de/fusion/wyvern_bow")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "justdirethings:eclipsealloy_axe" },
    ingredients: [
      { consume: true, ingredient: { item: "avaritia:crystal_axe" } },
      { consume: true, ingredient: { item: "mysticalagriculture:awakened_supremium_axe" } },
      { consume: true, ingredient: { item: "mekanism:atomic_disassembler" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_cell" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_provider" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:wyvern_axe", count: 1 },
    techLevel: "wyvern",  
    totalEnergy: 100000000000  
  }).id("lava:de/fusion/wyvern_axe")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "justdirethings:eclipsealloy_shovel" },
    ingredients: [
      { consume: true, ingredient: { item: "avaritia:crystal_shovel" } },
      { consume: true, ingredient: { item: "mysticalagriculture:awakened_supremium_shovel" } },
      { consume: true, ingredient: { item: "mekanism:atomic_disassembler" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_cell" } },
      { consume: true, ingredient: { item: "mekanism:ultimate_induction_provider" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:wyvern_shovel", count: 1 },
    techLevel: "wyvern",  
    totalEnergy: 100000000000  
  }).id("lava:de/fusion/wyvern_shovel")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "draconicevolution:wyvern_axe" },
    ingredients: [
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:draconic_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:draconic_axe", count: 1 },
    techLevel: "draconic",  
    totalEnergy: 32000000000000  
  }).id("lava:de/fusion/draconic_axe")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "draconicevolution:wyvern_bow" },
    ingredients: [
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:draconic_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:draconic_bow", count: 1 },
    techLevel: "draconic",  
    totalEnergy: 32000000000000 
  }).id("lava:de/fusion/draconic_bow")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "draconicevolution:wyvern_sword" },
    ingredients: [
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:draconic_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:draconic_sword", count: 1 },
    techLevel: "draconic",  
    totalEnergy: 32000000000000  
  }).id("lava:de/fusion/draconic_sword")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "draconicevolution:wyvern_shovel" },
    ingredients: [
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:draconic_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:draconic_shovel", count: 1 },
    techLevel: "draconic",  
    totalEnergy: 32000000000000  
  }).id("lava:de/fusion/draconic_shovel")

lava.custom({
    type: "draconicevolution:fusion_crafting",
    catalyst: { item: "draconicevolution:wyvern_pickaxe" },
    ingredients: [
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "lava:infinity_shard" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:awakened_draconium_ingot" } },
      { consume: true, ingredient: { item: "draconicevolution:draconic_energy_core" } },
      { consume: true, ingredient: { item: "draconicevolution:wyvern_core" } },
    ],
    result: { id: "draconicevolution:draconic_pickaxe", count: 1 },
    techLevel: "draconic",  
    totalEnergy: 32000000000000  
  }).id("lava:de/fusion/draconic_pickaxe")

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
})
})


