ServerEvents.recipes(lava => {
lava.remove({output: 'powah:dielectric_paste'}) 
lava.remove({output: 'draconicevolution:energy_core'})  
lava.custom(
{
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    { "item": "ae2:certus_quartz_dust" },
    { "item": "ae2:certus_quartz_dust" },
    { "tag": "c:dusts/aluminum" },
    { "item": "minecraft:clay_ball" },
    { "tag": "c:dusts/coal" },
  ],
  "inputFluid": {
    "amount": 250,
    "fluid": "pneumaticcraft:lubricant"
  },
  "output": {
    "count": 8,
    "id": "powah:dielectric_paste"
  },
  "processingTime": 100
}),

lava.custom(
{
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    { "item": "mekanism:pellet_antimatter" },
    { "item": "mekanism:pellet_antimatter" },
    { "item": "mekanism:pellet_antimatter" },
    { "item": "draconicevolution:draconic_energy_core" },
    { "item": "mekanism:ultimate_induction_cell" },
    { "item": "mekanism:pellet_antimatter" },
    { "item": "mekanism:pellet_antimatter" },
    { "item": "mekanism:pellet_antimatter" }
 
  ],
  "inputFluid": {
    "amount": 25,
    "fluid": "modern_industrialization:uu_matter"
  },
  "output": {
    "count": 1,
    "id": "draconicevolution:energy_core"
  },
  "processingTime": 10000
})
})