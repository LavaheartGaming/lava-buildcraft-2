ServerEvents.tags('worldgen/placed_feature', event => {
    event.get('ptsdeco:crafting_ore').removeAll()
})