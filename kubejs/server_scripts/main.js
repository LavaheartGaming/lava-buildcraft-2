ServerEvents.recipes(event => {
    // Remove the default crafting table recipe
    event.remove({ output: 'minecraft:crafting_table' });

    // Add a custom recipe for the Crafting Table
    event.shaped('minecraft:crafting_table', [
        'FL ',
        'IS ',
        '   '
    ], {
        F: 'minecraft:flint',     
        L: '#minecraft:logs',     // Any logs 
        S: 'minecraft:string',   
        I: 'silentgear:sinew'     
    });
});