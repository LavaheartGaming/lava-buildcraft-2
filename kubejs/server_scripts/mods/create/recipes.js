ServerEvents.recipes(lava => {

lava.remove({output: 'modern_industrialization:steel_machine_casing'})
lava.remove({output: 'mekanism:metallurgic_infuser'})
lava.remove({output: 'draconicevolution:basic_crafting_injector'})
lava.remove({output: 'draconicevolution:crafting_core'})

lava.custom({
 "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "category": "misc",
  "key": {
    "A": {
      "item": "create:brass_casing"
    },
    "P": {
      "item": "createaddition:electric_motor"
    },
    "S": {
      "item": "modern_industrialization:basic_machine_hull"
    }
  },
  "pattern": [
    " AAA ",
    "AAPAA",
    "APSPA",
    "AAPAA",
    " AAA "
  ],
  "result": {
    "count": 1,
    "id": "mekanism:metallurgic_infuser"
  },
}),

lava.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      A: { item: 'compressedblocks:c2_iron_block' },
      U: { item: 'mekanism:ultimate_control_circuit' },          
      T: { item: 'draconicevolution:wyvern_core' },                   
      F: { item: 'fluxnetworks:flux_block' },                    
      P: { item: 'mekanism:alloy_reinforced' },                        
      M: { item: 'create:precision_mechanism' }                   
    },
    pattern: [
      ' A F A ',
      ' P U P ',
      ' A T A ',
      ' P M P ',
      ' A F A '
    ],
    result: { id: 'draconicevolution:basic_crafting_injector', count: 1 }
  }).id('lava:de/mechanical_crafting/wyvern_crafting_injector')

  lava.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {
      N: { item: 'powah:niotic_crystal_block' },                  
      U: { item: 'mekanism:ultimate_control_circuit' },           
      H: { item: 'modern_industrialization:turbo_machine_hull' }, 
      F: { item: 'fluxnetworks:flux_block' },                      
      C: { item: 'ae2:energy_cell' }                              
    },
    pattern: [
      ' N F N ',
      ' F U F ',
      ' N C N ',
      ' F H F ',
      ' N F N '
    ],
    result: { id: 'draconicevolution:crafting_core', count: 1 }
  }).id('lava:de/mechanical_crafting/draconic_crafting_injector')

  lava.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: false,
    category: 'misc',
    key: {

    I: { item: 'kubejs:ultimate_ingot' }, 
    A: { item: 'generatorgalore:culinary_generator_64x' },
    B: { item: 'compressedblocks:c6_redstone_block' },
    C: { item: 'generatorgalore:netherstar_generator_64x' },
    D: { item: 'ironfurnaces:million_furnace' },
    E: { item: 'lava:exhalted_nether_star' },
    F: { item: 'draconicevolution:draconic_capacitor' },
    G: {
                "type": "neoforge:components",
                "components": {
                    "ironjetpacks:jetpack_id": "ironjetpacks:creative",
                },
                "items": "ironjetpacks:jetpack"
                },
    H: { item: 'create:creative_blaze_cake' },
    J: { item: 'ironfurnaces:rainbow_coal' },
    K: { item: 'pneumaticcraft:creative_compressor' },
    L: { item: 'pneumaticcraft:compressed_iron_block' },
    M: { item: 'wands:creative_wand' },
    N: { item: 'apothic_enchanting:ender_library' },
    O: { item: 'lava:godly_block' },
    P: { item: 'compressedblocks:c5_netherite_block' },
    Q: { item: 'ars_nouveau:creative_spell_book' },
    R: { item: 'enderio:vibrant_photovoltaic_module' }
  },
    pattern: [
  '      IIO',
  '     IQRI',
  '    ILMNI',
  '   IHJKI ',
  '  IEFGI  ',
  ' IBDEI   ',
  'IBCBI    ',
  'IABI     ',
  'PII      ',
    ],
    result: { id: 'lava:inert_infinity_shard', count: 1 }
  }).id('lava:de/mechanical_crafting/inert_infinity_shard')

  lava.custom(
    {
    "type": "create:haunting",
    "ingredients": [
      {
        "item": "mekanism:steel_casing"
      }
    ],
    "results": [
      {
        "id": "modern_industrialization:steel_machine_casing"
      }
    ]
  })
})

