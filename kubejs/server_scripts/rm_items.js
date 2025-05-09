ServerEvents.recipes(event => {
    let itemsToRemove = [
      'artifacts:eternal_steak',
      'artifacts:everlasting_beef',
      'biomeswevegone:aspen_crafting_table',
      'biomeswevegone:baobab_crafting_table',
      'biomeswevegone:blue_enchanted_crafting_table',
      'biomeswevegone:cika_crafting_table',
      'biomeswevegone:cypress_crafting_table',
      'biomeswevegone:ebony_crafting_table',
      'biomeswevegone:fir_crafting_table',
      'biomeswevegone:florus_crafting_table',
      'biomeswevegone:fir_crafting_table',
      'biomeswevegone:holly_crafting_table',
      'biomeswevegone:ironwood_crafting_table',
      'biomeswevegone:jacaranda_crafting_table',
      'biomeswevegone:mahogany_crafting_table',
      'biomeswevegone:maple_crafting_table',
      'biomeswevegone:palm_crafting_table',
      'biomeswevegone:pine_crafting_table',
      'biomeswevegone:rainbow_eucalyptus_crafting_table',
      'biomeswevegone:redwood_crafting_table',
      'biomeswevegone:sakura_crafting_table',
      'biomeswevegone:skyris_crafting_table',
      'biomeswevegone:spirit_crafting_table',
      'biomeswevegone:white_mangrove_crafting_table',
      'biomeswevegone:zelkova_crafting_table',
      'biomeswevegone:witch_hazel_crafting_table',
      'biomeswevegone:willow_crafting_table',
      'biomeswevegone:green_enchanted_crafting_table',
      'mysticalagriculture:emerald_seeds'
    ];

    itemsToRemove.forEach(item => {
      event.remove({ output: item });
      event.remove({ input: item });
    });
  });
  