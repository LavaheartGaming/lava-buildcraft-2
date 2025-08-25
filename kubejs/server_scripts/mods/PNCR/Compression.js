ServerEvents.recipes(lava => {
    let pressureChamber = (psi, output, outcount, inputs) => {
        lava.custom(
            {
                type: 'pneumaticcraft:pressure_chamber',
                inputs: 
                    inputs
                ,
                pressure: psi,
                results: [
                    {
                        count: outcount,
                        id: output
                    }
                ]
            }
        ).id(`lava:pressure/${output.replace(':', '/')}`)
    }

    pressureChamber(4.9, 'pneumaticcraft:creative_compressor', 1,
        [
            {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
            {count: 1, item: 'pneumaticcraft:electrostatic_compressor'},
            {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
            {count: 1, item: 'pneumaticcraft:flux_compressor'},
            {count: 1, item: 'extendedcrafting:the_ultimate_ingot'},
            {count: 1, item: 'pneumaticcraft:advanced_air_compressor'},
            {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
            {count: 1, item: 'pneumaticcraft:advanced_liquid_compressor'},
            {count: 64, item:'pneumaticcraft:advanced_pressure_tube'}
        ]
    )

    pressureChamber(4.9, 'pneumaticcraft:creative_compressed_iron_block', 1,
        [
            {count: 64, item:'pneumaticcraft:compressed_iron_block'},
            {count: 64, item:'pneumaticcraft:compressed_iron_block'},
            {count: 64, item:'pneumaticcraft:compressed_iron_block'},
            {count: 64, item:'lava:azura_coin'},
            {count: 5, item: 'minecraft:bedrock'},
            {count: 10, item:'lava:godly'},
            {count: 64, item:'pneumaticcraft:compressed_iron_block'},
            {count: 64, item:'pneumaticcraft:compressed_iron_block'},
            {count: 64, item:'pneumaticcraft:compressed_iron_block'}
        ]
    )
    lava.custom(
            {
                type: 'pneumaticcraft:pressure_chamber',
                inputs: [
                    {count: 25, item:'ae2:certus_quartz_dust'},
                    {count: 16, tag:'c:dusts/aluminum'},
                    {count: 16, item:'minecraft:clay_ball'},
                    {count: 2, item:'pneumaticcraft:lubricant_bucket'},
                    {count: 16, tag:'c:dusts/coal'}
                ],
                pressure: 2,
                results: [
                    {count: 64, id: 'powah:dielectric_paste'},
                    {count: 64, id: 'powah:dielectric_paste'},
                    {count: 2, id: 'minecraft:bucket'}
                ]
            }
        ).id('lava:pressure/powah/dielectric_paste')
})