ServerEvents.recipes(lava => {
    
  global.potions_server.forEach(potion => {
      lava.shaped(`potionsmaster:${potion.id}_oresight_powder`, [
            'EGR',
            'OPM',
            '   '
            ],{
            E: 'potionsmaster:ender_powder',
            G: 'minecraft:glowstone_dust',
            M: 'potionsmaster:tile_mortar',
            P: 'potionsmaster:pestle',
            R: 'minecraft:redstone',
            O: `${potion.item}`
        })
        lava.blasting(`1x potionsmaster:calcinated_${potion.id}_oresight_powder`, `potionsmaster:${potion.id}_oresight_powder`, 5,200)
    })
})