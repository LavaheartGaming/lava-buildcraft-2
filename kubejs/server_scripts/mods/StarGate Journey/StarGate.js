ServerEvents.recipes(lava => {
    lava.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        accepted_mirrored: false,
        category: 'misc',
        key: {
            B: {
                item: 'mysticalextendedtier:lightium_gemstone_block'
            },
            U: {
                item: 'sgjourney:bronze_iris'
            },
            I: {
                item: 'lava:infinity_shard'
            },
                E: {
                item: 'avaritia:eternal_singularity'
            },
        },
        pattern: [
           '  BBBBB  ',
           ' UI   IU ',
           'BII   IIB',
           'B       B',
           'BUI E IUB',
           'B       B',
           'BII   IIB',
           ' UI   IU ',
           '  BBBBB  '
        ],
        result: {
            count: 1,
            id: 'sgjourney:classic_stargate'
        },
        tier: 4
    });

    lava.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        accepted_mirrored: false,
        category: 'misc',
        key: {
            A: {
                item: 'mysticalextendedtier:tornium_gemstone_block'
            },
            B: {
                item: 'mysticalextendedtier:lightium_block'
            },
            C: {
                item: 'sgjourney:naquadah_alloy_iris'
            },
            D: {
                item: 'lava:infinity_shard'
            },
            E: {
                item: 'avaritia:eternal_singularity'
            },
            F: {
                item: 'sgjourney:classic_stargate'
            }
        },
        pattern: [
           '  AAAAA  ',
           ' CBAAABC ',
           'ABB   BBA',
           'A       A',
           'CD EFE DC',
           'A       A',
           'ABB   BBA',
           ' CBAAABC ',
           '  AAAAA  '
        ],
        result: {
            count: 1,
            id: 'sgjourney:universe_stargate'
        }
    });

    // For the rest of the crafts we'll see about which items use and etc... first confirm and make official the first 2 crafts of stargates out of 5 SGs

});