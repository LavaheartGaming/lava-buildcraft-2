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
    });
    const items = {
        A: 'enderio:energetic_alloy_ingot', B: 'enderio:vibrant_alloy_ingot', C: 'enderio:redstone_alloy_ingot',
        D: 'enderio:conductive_alloy_ingot', E: 'enderio:copper_alloy_ingot', F: 'enderio:pulsating_alloy_ingot',
        G: 'enderio:dark_steel_ingot', H: 'enderio:soularium_ingot', I: 'enderio:end_steel_ingot',
        J: 'igleelib:derium_ingot', K: 'igleelib:modium_ingot', L: 'igleelib:blazum_ingot',
        M: 'igleelib:lavium_ingot', N: 'extendedae:entro_ingot', O: 'mysticalextendedtier:ouranium_ingot',
        P: 'industrialforegoing:pink_slime_ingot', Q: 'avaritia:crystal_matrix_ingot', R: 'silentgear:bronze_ingot',
        S: 'silentgear:crimson_iron_ingot', T: 'silentgear:crimson_steel_ingot', U: 'silentgear:blaze_gold_ingot',
        V: 'silentgear:azure_silver_ingot', W: 'silentgear:azure_electrum_ingot', X: 'silentgear:tyrian_steel_ingot',
        Y: 'evolvedmekanism:alloy_hypercharged', Z: 'modern_industrialization:battery_alloy_ingot', '1': 'justdirethings:eclipsealloy_ingot',
        '2': 'modern_industrialization:blastproof_alloy_ingot', '3': 'pneumaticcraft:ingot_iron_compressed', '4': 'megacells:sky_steel_ingot',
        '5': 'megacells:sky_bronze_ingot', '6': 'megacells:sky_osmium_ingot', '7': 'aquaculture:neptunium_ingot',
        '8': 'alltheores:osmium_ingot', '9': 'alltheores:tin_ingot', '0': 'avaritia:neutron_ingot',
        '!': 'minecraft:iron_ingot', '@': 'minecraft:gold_ingot', '#': 'alltheores:electrum_ingot',
        '$': 'cataclysm:ignitium_ingot', '%': 'cataclysm:cursium_ingot', '`': 'advanced_ae:quantum_alloy_plate',
        '~': 'modern_industrialization:titanium_ingot', '-': 'modern_industrialization:tungsten_ingot', '=': 'cataclysm:witherite_ingot',
        '[': 'modern_industrialization:superconductor_ingot', ']': 'lava:ombrum_ingot', '_': 'justdirethings:ferricore_ingot',
        ';': 'justdirethings:blazegold_ingot', "'": 'moremekanismprocessing:desh_ingot', ',': 'justdirethings:eclipsealloy_ingot',
        '.': 'alltheores:aluminum_ingot', '/': 'alltheores:lead_ingot', '<': 'alltheores:uranium_ingot',
        '>': 'alltheores:constantan_ingot', '?': 'draconicevolution:draconium_ingot', '¬': 'alltheores:brass_ingot',
        ':': 'moremekanismprocessing:lithium_ingot', '{': 'alltheores:nickel_ingot', '}': 'alltheores:platinum_ingot',
        '|': 'alltheores:enderium_ingot', '+': 'alltheores:bronze_ingot', '*': 'alltheores:silver_ingot',
        '&': 'alltheores:steel_ingot', '^': 'alltheores:invar_ingot', '(': 'alltheores:zinc_ingot',
        ')': 'xycraft_world:aluminum_ingot', i: 'mysticalagriculture:prosperity_ingot', a: 'mysticalagriculture:inferium_ingot',
        b: 'mysticalagriculture:prudentium_ingot', c: 'mysticalagriculture:tertium_ingot', d: 'mysticalagriculture:imperium_ingot',
        e: 'mysticalagriculture:supremium_ingot', f: 'mysticalagriculture:awakened_supremium_ingot', g: 'mysticalagradditions:insanium_ingot',
        h: 'mekanism:ingot_bronze', j: 'mekanism:ingot_refined_obsidian', k: 'mekanism:ingot_refined_glowstone',
        l: 'twilightforest:ironwood_ingot', m: 'twilightforest:knightmetal_ingot', n: 'minecraft:netherite_ingot'
    };

    const key = {};
    for (const k in items) {
        key[k] = { item: items[k] };
    };

    lava.custom({
        type: 'avaritia:shaped_table',
        accept_mirrored: false,
        category: 'misc',
        key: key,
        pattern: [
            "ABCDEFGHI",
            "JKLMNOPQR",
            "STUVWXYZ1",
            "234567890",
            "!@#$`^&i(",
            ")¬:;'<>,.",
            "/{}|+*?%~",
            "-=_[]abcd",
            "efghjklmn"
        ],
        result: {
            count: 1,
            id: 'kubejs:ultimate_ingot'
        },
        tier: 4
    })
})

