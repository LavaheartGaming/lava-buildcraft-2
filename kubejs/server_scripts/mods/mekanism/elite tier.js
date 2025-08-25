ServerEvents.recipes(event => {
  const types = [
    'smelting','enriching','crushing','compressing',
    'combining','purifying','injecting','infusing','sawing'
  ];

  types.forEach(t => {
    // Remove only if the replacer didn't catch it (uncomment if needed)
     event.remove({ output: `mekanism:elite_${t}_factory` });

    event.shaped(
      Item.of(`mekanism:elite_${t}_factory`),
      [
        'ABA',
        'IPI',
        'ACA'
      ],
      {
        A: '#mekanism:alloys/reinforced',
        C: 'mekanism:elite_energy_cube',
        I: 'modern_industrialization:stainless_steel_plate',
        P: `mekanism:advanced_${t}_factory`,
        B: 'mekanism:elite_control_circuit'
      }
    ).id(`lava:mek/elite_${t}_factory`);
  });
});