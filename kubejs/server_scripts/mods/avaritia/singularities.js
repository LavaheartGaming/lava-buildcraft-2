AvaritiaEvents.singularity(lava => {

    const DEFAULT_COUNT = 2000000
    const DEFAULT_TIME = 2000

    const singularities = [
        { id: "iron",      item: "minecraft:iron_ingot",      colors: ["0xC0C0C0", "0x808080"] },
        { id: "gold",      item: "minecraft:gold_ingot",      colors: ["0xFFD700", "0xB8860B"] },
        { id: "diamond",   item: "minecraft:diamond",         colors: ["0x5DECF5", "0x1AA7B5"] },
        { id: "emerald",   item: "minecraft:emerald",         colors: ["0x50C878", "0x007F5F"] },
        { id: "redstone",  item: "minecraft:redstone",        colors: ["0xFF0000", "0x8B0000"] },
        { id: "lapis_lazuli",     item: "minecraft:lapis_lazuli",    colors: ["0x1E3AFF", "0x0A1A6F"] },
        { id: "coal",      item: "minecraft:coal",            colors: ["0x2B2B2B", "0x000000"] },
        { id: "quartz",    item: "minecraft:quartz",          colors: ["0xF5F5F5", "0xCFCFCF"] },
        { id: "obsidian",  item: "minecraft:obsidian",        colors: ["0x2E003E", "0x0F0015"] },
        { id: "glowstone", item: "minecraft:glowstone_dust",  colors: ["0xFFF2A1", "0xC9A200"] },
        { id: "blue_ice",  item: "minecraft:blue_ice",        colors: ["0x8FD3FF", "0x1E6FA3"] },
        { id: "copper",    item: "minecraft:copper_ingot",    colors: ["0xE77C56", "0x8A3E1E"] },
        { id: "tin",       item: "alltheores:tin_ingot",      colors: ["0xDCE4E8", "0x8A9AA5"] },
        { id: "lead",      item: "alltheores:lead_ingot",     colors: ["0x4F5D73", "0x2B3442"] },
        { id: "silver",    item: "alltheores:silver_ingot",   colors: ["0xE6EBF2", "0x9BA3AF"] },
        { id: "nickel",    item: "alltheores:nickel_ingot",   colors: ["0xD8C98A", "0x8C7A3A"] },
        { id: "aluminum",  item: "alltheores:aluminum_ingot", colors: ["0xE3E6EB", "0x9DA4AD"] },
        { id: "uranium",   item: "alltheores:uranium_ingot",  colors: ["0x7CFF4F", "0x1E6B1E"] },
        { id: "bronze",    item: "alltheores:bronze_ingot",   colors: ["0xCD7F32", "0x7A3F12"] },
        { id: "steel",     item: "alltheores:steel_ingot",    colors: ["0x6E6E6E", "0x2B2B2B"] },
        { id: "platinum",  item: "alltheores:platinum_ingot", colors: ["0xE5E4E2", "0xA0A0A0"] },
        { id: "osmium",    item: "mekanism:ingot_osmium",     colors: ["0x7FD6D6", "0x2E8B8B"] },
        { id: "refined_obsidian",  item: "mekanism:ingot_refined_obsidian",  colors: ["0x6E3A8C", "0x2A003F"] },
        { id: "amethyst_shard",  item: "minecraft:amethyst_shard",  colors: ["0xB07CFF", "0x5A2A82"]},
        { id: "invar",  item: "alltheores:invar_ingot",  colors: ["0x9FA6A3", "0x4F5452"] },
        { id: "electrum",  item: "alltheores:electrum_ingot",  colors: ["0xFFE680", "0xB89B2E"] },

        // ===== SPECIAL CASES =====

        {
            id: "netherite",
            item: "minecraft:netherite_ingot",
            colors: ["0x4B4B4B", "0x1C1C1C"],
            count: 500000,
            time: 300
        },
        {
            id: "cinnabar",
            item: "alltheores:cinnabar",
            colors: ["0xE34234", "0x8A0901"],
            count: 1000000
        },
        {
            id: "insanium",
            item: "mysticalagradditions:insanium_essence",
            colors: ["0x8A189E", "0x9E187D"],
            count: 1000
        }
    ]

    singularities.forEach(sing => {
        lava.register(`avaritia:${sing.id}`, s => {
            s.setDisplayName(`${sing.id}`)
             .setColors(sing.colors[0], sing.colors[1])
             .setCount(sing.count ?? DEFAULT_COUNT)
             .setTimeCost(sing.time ?? DEFAULT_TIME)
             .setIngredient(sing.item)
             .setEnabled(true)
        })
    })
})