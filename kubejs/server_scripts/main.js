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
});