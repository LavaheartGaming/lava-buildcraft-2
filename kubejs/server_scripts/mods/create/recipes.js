ServerEvents.recipes(lava => {

lava.remove({output: 'modern_industrialization:steel_machine_casing'})
lava.remove({output: 'mekanism:metallurgic_infuser'})

lava.custom({
 "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "category": "misc",
  "key": {
    "A": {
      "item": "create:brass_casing"
    },
    "P": {
      "item": "createaddition:electric_motor"
    },
    "S": {
      "item": "modern_industrialization:basic_machine_hull"
    }
  },
  "pattern": [
    " AAA ",
    "AAPAA",
    "APSPA",
    "AAPAA",
    " AAA "
  ],
  "result": {
    "count": 1,
    "id": "mekanism:metallurgic_infuser"
  },
}),

lava.custom(
  {
  "type": "create:haunting",
  "ingredients": [
    {
      "item": "mekanism:steel_casing"
    }
  ],
  "results": [
    {
      "id": "modern_industrialization:steel_machine_casing"
    }
  ]
}
)
})

