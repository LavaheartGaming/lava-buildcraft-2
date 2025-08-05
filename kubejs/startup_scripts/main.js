StartupEvents.registry("block", (event) => {
    event.create("compressed_compression_block") // Create a new block
    .displayName("Compressed Compression Block") // Set a custom name
    .soundType("Amethyst") // Set a material (affects the sounds and some properties)
    .hardness(100.0) // Set hardness (affects mining time)
    .resistance(100.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock("mineable/axe") //can be mined faster with an axe
    .tagBlock("mineable/pickaxe") // or a pickaxe
    .tagBlock('minecraft:needs_netherite_tool') // the tool tier must be at least iron
})