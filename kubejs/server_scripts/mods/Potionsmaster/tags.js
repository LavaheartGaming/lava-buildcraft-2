ServerEvents.tags('item', lava => {
  //Potionsmaster
  global.potions_server.forEach(potion => {
    lava.add(`potionsmaster:calcinated/${potion.id}`, `potionsmaster:calcinated_${potion.id}_oresight_powder`)
  })
  
})
