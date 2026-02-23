ServerEvents.recipes(lava => {
    lava.remove({output: 'avaritia:cosmic_sword'})

    lava.custom({
        "type": "avaritia:shaped_table",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
                "item": "lava:corrupted_nether_star_block"
            },
            "B": {
                "item": "mysticalagradditions:creative_essence"
            },
            "C": {
                "item": "avaritia:eternal_singularity"
            },
            "D": {
                "item": "lava:exhalted_nether_star"
            },
            "E": {
                "item": "lava:corruptite"
            },
            "F": {
                "item": "lava:ombrum_ingot"
            },
            "G": {
                "item": "lava:azura_sword_activated"
            },
            "H": {
                "item": "minecraft:bedrock"
            },
        },
        "pattern": [
            "    EFF",
            "   EFHF",
            "E EFHFE",
            " EFGFE ",
            " CDFE  ",
            " BCE   ",
            "A   E  "
        ],
        "result": {
            "count": 1,
            "id": "lava:cosmic_sword"
        },
        "tier": 3
    })
})