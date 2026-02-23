ServerEvents.recipes(lava => {
    // Remove the default crafting table recipe
    lava.remove({ output: 'minecraft:crafting_table' });

    // Add a custom recipe for the Crafting Table
    lava.shaped('minecraft:crafting_table', [
        'FL ',
        'IS ',
        '   '
    ], {
        F: 'minecraft:flint',     
        L: '#minecraft:logs',     // Any logs 
        S: 'minecraft:string',   
        I: 'silentgear:sinew'     
    });
    lava.shapeless('lava:angelwood_log', [
        'lava:obsiwood_log',
        'lava:corruptite'
    ]);
    lava.shapeless('lava:ombrum_block', [
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot',
        'lava:ombrum_ingot'
    ]);
    const items = {
        A: 'enderio:energetic_alloy_ingot', B: 'enderio:vibrant_alloy_ingot', C: 'enderio:redstone_alloy_ingot',
        D: 'enderio:conductive_alloy_ingot', E: 'enderio:copper_alloy_ingot', F: 'enderio:pulsating_alloy_ingot',
        G: 'enderio:dark_steel_ingot', H: 'enderio:soularium_ingot', I: 'enderio:end_steel_ingot',
        J: 'eternal_starlight:aethersent_ingot', K: 'eternal_starlight:thermal_springstone_ingot', L: 'eternal_starlight:deepsilver_ingot',
        M: 'eternal_starlight:amaramber_ingot', N: 'eternal_starlight:golem_steel_ingot', O: 'eternal_starlight:oxidized_golem_steel_ingot',
        P: 'industrialforegoing:pink_slime_ingot', Q: 'avaritia:crystal_matrix_ingot', R: 'silentgear:bronze_ingot',
        S: 'silentgear:crimson_iron_ingot', T: 'silentgear:crimson_steel_ingot', U: 'silentgear:blaze_gold_ingot',
        V: 'silentgear:azure_silver_ingot', W: 'silentgear:azure_electrum_ingot', X: 'silentgear:tyrian_steel_ingot',
        Y: 'naturesaura:infused_iron', Z: 'naturesaura:sky_ingot', '1': 'naturesaura:tainted_gold',
        '2': 'naturesaura:depth_ingot', '3': 'pneumaticcraft:ingot_iron_compressed', '4': 'megacells:sky_steel_ingot',
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
    }

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
    });
});