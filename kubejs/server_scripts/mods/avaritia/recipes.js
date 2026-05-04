ServerEvents.recipes(lava => {
    const types = [
    'hoe','pickaxe','shovel','axe','bow','sword'
  ];
  lava.remove({ output: 'avaritia:endless_cake' });
  lava.remove({ output: 'avaritia:cosmic_meatballs' });

    types.forEach(t => {
        lava.remove({ output: `avaritia:infinity_${t}` });
        lava.replaceInput(
            { id: `avaritia:blaze_${t}`},
            "avaritia:blaze_cube",
            "lava:azura_tip"
        );
         lava.replaceInput(
            { id: `avaritia:blaze_${t}`},
            "minecraft:blaze_powder",
            "lava:azura_plate"
        );
    })

    lava.replaceInput({ id: 'avaritia:endest_pearl' }, "minecraft:nether_star", "mekanism:ultimate_energy_cube"); // idea by @Girafe Selfie
    lava.replaceInput({ id: 'avaritia:neutron_compressor' }, "avaritia:neutron", "advanced_ae:quantum_crafter"); 

lava.custom({
        type: "avaritia:shaped_table",
        tier: 2,
        pattern: [
            "  L  ",
            "L I L",
            " ICI ",
            "L I L",
            "  L  "
        ],
        key: {
            "L": {
                "type": "neoforge:components",
                "components": {
                    "avaritia:singularity_id": "avaritia:lapis_lazuli"
                },
                "items": "avaritia:singularity"
            },
            "I": {
                "type": "neoforge:components",
                "components": {
                    "avaritia:singularity_id": "avaritia:insanium"
                },
                "items": "avaritia:singularity"
            },
            "C": {
                "item": "mysticalagriculture:master_infusion_crystal"
            }
        },
        result: {
            id: "mysticalagradditions:creative_essence",
            count: 1
        }
    })
lava.remove({output: 'avaritia:extreme_crafting_table'})

lava.custom({
    type: "avaritia:shaped_table",
    tier: 4,
    pattern: [
      "ABABABABA",
      "BCDCDCDCB",
      "ADFGHGFDA",
      "BCDEIEDCB",
      "HFGIJIGFH",
      "BCDEIEDCB",
      "ADFGHGFDA",
      "BCDCDCDCB",
      "ABABABABA"
    ],
    key: {
      A: { item: "compressedblocks:c7_dirt" },
      B: { item: "compressedblocks:c5_slime_block" },
      C: { item: "compressedblocks:c6_obsidian" },
      D: { item: "compressedblocks:c5_magma_block" },
      E: { item: "compressedblocks:c7_end_stone" },
      F: { item: "compressedblocks:septuple_crated_clay_ball" },
      G: { item: "compressedblocks:c8_netherrack" },
      H: { item: "compressedblocks:octuple_crated_sugar_cane" },
      I: { item: "compressedblocks:octuple_crated_rotten_flesh" },
      J: { item: "compressedblocks:sextuple_crated_nether_star" }
    },
    result: {
      id: "kubejs:compressed_compression_block",
        count: 1
    }
  })

lava.custom({
        "type": "avaritia:shaped_table",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
                "item": "lava:exhalted_nether_star"
            },
            "B": {
                "item": "mysticalagradditions:creative_essence"
            },
            "C": {
                "item": "wands:netherite_wand"
            },
        },
        "pattern": [
            "  B",
            " A ",
            "C  "
        ],
        "result": {
            "count": 1,
            "id": "wands:creative_wand"
        },
        "tier": 1
    })

lava.custom({
        "type": "avaritia:shaped_table",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": { "item": "minecraft:lodestone" },
            "B": { "item": "avaritia:diamond_lattice" },
            "C": { "item": "avaritia:crystal_matrix_ingot" },
            "D": { "item": "minecraft:dragon_egg" },
            "E": { "item": "minecraft:recovery_compass" },
            "F": { "item": "minecraft:beacon" },
            "G": { "item": "minecraft:heart_of_the_sea" },
            "H": { "item": "minecraft:netherite_block" },
            "I": { "item": "minecraft:reinforced_deepslate" },
            "J": { "item": "avaritia:double_compressed_crafting_table" },
            "K": { "item": "avaritia:crystal_matrix"},
            "L": { "item": "advanced_ae:quantum_alloy_plate"}
        },
        "pattern": [
            "ABBEBBA",
            "BLCDCLB",
            "BCIFICB",
            "BCIJICB",
            "BCHGHCB",
            "BLCCCLB",
            "AKKKKKA"
        ],
        "result": {
            "count": 1,
            "id": "avaritia:extreme_crafting_table"
        },
        "tier": 3
    })
})

