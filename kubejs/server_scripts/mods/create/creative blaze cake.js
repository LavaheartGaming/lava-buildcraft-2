ServerEvents.recipes(lava => {
    lava.custom(
        {
        "type": "productivemetalworks:block_casting",
        "cast": {
            "item": "create:blaze_cake_base"
        },
        "consume_cast": true,
        "fluid": {
            "amount": 360,
            "fluid": "lava:creative_fluid"
        },
        "result": {
            "count": 1,
            "id": "create:creative_blaze_cake"
        }
        }
).id('lava:casting/blaze_cake')
})