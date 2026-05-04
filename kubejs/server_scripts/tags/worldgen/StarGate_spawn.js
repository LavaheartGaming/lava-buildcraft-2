ServerEvents.tags('worldgen/biome', event => {
    // La liste des structures à supprimer
    const structuresToRemove = [
        'sgjourney:classic_stargate',
        'sgjourney:milky_way_stargate',
        'sgjourney:universe_stargate',
        'sgjourney:pegasus_stargate',
        'sgjourney:tollan_stargate'
    ]

    structuresToRemove.forEach(stargateId => {
        event.removeAllTagsFrom(stargateId)
    })
})