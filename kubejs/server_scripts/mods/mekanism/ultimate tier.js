ServerEvents.recipes(event => {
  const types = [
    'smelting','enriching','crushing','compressing',
    'combining','purifying','injecting','infusing','sawing'
  ];

  types.forEach(t => {
    // Remove only if the replacer didn't catch it (uncomment if needed)
     event.remove({ output: `mekanism:ultimate_${t}_factory` });

    event.shaped(
      Item.of(`mekanism:ultimate_${t}_factory`),
      [
        'ABA',
        'IPI',
        'ACA'
      ],
      {
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:ultimate_energy_cube',
        I: 'powah:crystal_nitro',
        P: `mekanism:elite_${t}_factory`,
        B: 'mekanism:ultimate_control_circuit'
      }
    ).id(`lava:mek/ultimate_${t}_factory`);
  });
});