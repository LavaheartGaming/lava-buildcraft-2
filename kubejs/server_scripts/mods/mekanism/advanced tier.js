ServerEvents.recipes(event => {
  const types = [
    'smelting','enriching','crushing','compressing',
    'combining','purifying','injecting','infusing','sawing'
  ];

  types.forEach(t => {
    // Remove only if the replacer didn't catch it (uncomment if needed)
     event.remove({ output: `mekanism:advanced_${t}_factory` });

    event.shaped(
      Item.of(`mekanism:advanced_${t}_factory`),
      [
        'ABA',
        'IPI',
        'ACA'
      ],
      {
        A: '#mekanism:alloys/infused',
        C: 'mekanism:advanced_energy_cube',
        I: '#c:ingots/osmium',
        P: `mekanism:basic_${t}_factory`,
        B: 'mekanism:advanced_control_circuit'
      }
    ).id(`lava:mek/advanced_${t}_factory_cube`);
  });
});