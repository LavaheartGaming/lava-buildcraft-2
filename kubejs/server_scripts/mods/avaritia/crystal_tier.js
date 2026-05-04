ServerEvents.recipes(lava => {
    const commonItems = {
        A: 'avaritia:crystal_matrix',
        C: 'avaritia:crystal_matrix_ingot',
        E: 'avaritia:eternal_singularity'
    };

    const tools = [
        {
            output: 'avaritia:crystal_sword',
            B: 'avaritia:neutron',
            D: 'lava:godly',
            F: 'avaritia:blaze_sword',
            pattern: [
                "     CD",
                "    CAC",
                " C CAC ", 
                " CCAC  ",
                "CBFC   ", 
                " EBCC  ", 
                "A C    "
            ]
        },
        {
            output: 'avaritia:crystal_pickaxe',
            B: 'avaritia:neutron',
            D: 'avaritia:neutron_ingot',
            F: 'avaritia:blaze_pickaxe',
            pattern: [
                "CAAAA B", 
                " CCCC  ", 
                "   DCCA", 
                "  DFDCA",
                " DED CA", 
                "CBD  CA", 
                "AC    C"
            ]
        },
        {
            output: 'avaritia:crystal_shovel',
            B: 'avaritia:neutron',
            D: 'avaritia:neutron_ingot',
            F: 'avaritia:blaze_shovel',
            pattern: [
                "    CCC", 
                "   CCCC", 
                "   DCCC", 
                "  DBDC ",
                " DED   ", 
                "AFD    ", 
                "AA     "
            ]
        },
        {
            output: 'avaritia:crystal_hoe',
            B: 'avaritia:neutron',
            D: 'avaritia:neutron_ingot',
            F: 'avaritia:blaze_hoe',
            pattern: [
                "CAAAA D", 
                " CCCA  ", 
                "   D AA", 
                "  DBDCA",
                " DED  C", 
                "AFD    ", 
                "AA     "
            ]
        },
        {
            output: 'avaritia:crystal_bow',
            B: 'avaritia:neutron_ingot',
            D: 'lava:godly',
            F: 'avaritia:blaze_bow',
            pattern: [
                "  CDAAC", 
                "   CCCD", 
                "C E   B", 
                "DC   B ",
                "AC  F  ", 
                "AC B   ", 
                "CDB    "
            ]
        },
        {
            output: 'avaritia:crystal_axe',
            B: 'avaritia:neutron',
            D: 'avaritia:neutron_ingot',
            F: 'avaritia:blaze_axe',
            pattern: [
                "  CCC  ",
                " CAA B ", 
                " CAAE  ", 
                " C FAC ",
                "  D CC ", 
                " D     ", 
                "A      "
            ]
        }
    ];

    tools.forEach(tool => {
        lava.remove({output: tool.output});

        const items = {};
        items.A = commonItems.A;
        items.C = commonItems.C;
        items.E = commonItems.E;
        items.B = tool.B;
        items.D = tool.D;
        items.F = tool.F;

        const key = {};
        Object.entries(items).forEach(([k, v]) => {
            key[k] = { item: v };
        });

        lava.custom({
            type: 'avaritia:shaped_table',
            accept_mirrored: false,
            category: 'misc',
            key: key,
            pattern: tool.pattern,
            result: { count: 1, id: tool.output },
            tier: 3
        });
    });
})