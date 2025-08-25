ServerEvents.recipes(lava => {
        lava.remove({output: 'mekanism:basic_energy_cube'})
        lava.remove({output: 'mekanism:advanced_energy_cube'})
        lava.remove({ output: 'modern_industrialization:turbo_machine_casing' });
        lava.remove({ id: "modern_industrialization:assembler_generated/electric_age/hull/highly_advanced_machine_hull" });

        const { assembler, macerator, compressor, cutting_machine, electrolyzer, chemical_reactor } = lava.recipes.modern_industrialization;

      chemical_reactor(1000, 12000)
        .itemIn('2x mysticalagradditions:creative_essence')
        .itemIn('lava:ombrum_block')
        .itemIn('modern_industrialization:singularity')
        .fluidIn('100x modern_industrialization:sulfuric_acid')
        .itemOut('4x lava:lucky_block_5')
        .fluidOut('75x lava:creative_fluid')
        .id('lava:mi/chemical_reactor/creative_fluid');
      
      chemical_reactor(10, 200) 
        .itemIn('2x minecraft:apple')                      
        .itemIn('minecraft:nether_wart')                             
        .itemIn('mysticalagriculture:nether_essence')                  
        .fluidIn('150x mekanism:nutritional_paste')    
        .itemOut('silentgear:nether_banana')                           
        .fluidOut('50x create:honey')                                  
        .id('lava:mi/chemical_reactor/nether_banana');

      chemical_reactor(100, 600) 
        .itemIn('2x mekanism:energy_tablet')                      
        .itemIn('mekanism:steel_casing')                             
        .itemIn('2x minecraft:iron_ingot')                  
        .fluidIn('15000x productivemetalworks:molten_uranium')    
        .itemOut('mekanism:basic_energy_cube')
        .id('lava:mi/chemical_reactor/basic_energy_cube');

      chemical_reactor(100, 600) 
        .itemIn('2x mekanism:basic_energy_cube')                      
        .itemIn('modern_industrialization:advanced_machine_hull')                             
        .itemIn('2x mekanism:alloy_infused')                  
        .fluidIn('15000x justdirethings:refined_t2_fluid_source')    
        .itemOut('mekanism:advanced_energy_cube')
        .id('lava:mi/chemical_reactor/advanced_energy_cube');

      lava.shaped(
            Item.of ('modern_industrialization:turbo_machine_casing'), [
            'ABA',
            'BCB',
            'ABA'
            ], {
            A: 'mekanism:alloy_reinforced',
            B: 'modern_industrialization:stainless_steel_plate',
            C: 'modern_industrialization:advanced_machine_hull'
            }).id('lava:crafting/turbo_machine_casing');

      
      lava.replaceInput(
        { id: "modern_industrialization:electric_age/hull/highly_advanced_machine_hull_asbl" },
        "modern_industrialization:annealed_copper_cable",
        "powah:crystal_nitro"
      );

      lava.replaceInput(
        { id: "modern_industrialization:electric_age/hull/quantum_machine_hull_asbl" },
        "modern_industrialization:superconductor_cable",
        "advanced_ae:quantum_alloy_plate"
      );

      lava.replaceInput(
        { id: "modern_industrialization:electric_age/component/assembler/qubit" },
        "#c:glass_panes",
        "advanced_ae:quantum_alloy"
      );
});

  

  