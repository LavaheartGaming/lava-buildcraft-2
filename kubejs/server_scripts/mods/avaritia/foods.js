ServerEvents.recipes(lava => {

    lava.remove({ id: "avaritia:cosmic_meatballs" }) // remove the original recipe
    lava.remove({ id: "avaritia:ultimate_stew" }) 

    const allMeats = [
        "avaritia:neutron_pile",
        "pamhc2foodcore:cookedgroundfishitem",
        "pamhc2foodextended:bentoboxitem",
        "pamhc2foodextended:deluxenachoesitem",
        "pamhc2foodextended:gourmetbeefburgeritem",
        "pamhc2foodextended:delightedmealitem",
        "pamhc2foodextended:charsiuitem",
        "pamhc2foodextended:cornedbeefbreakfastitem",
        "pamhc2foodextended:friedfeastitem",
        "pamhc2foodextended:deluxechickencurryitem",
        "pamhc2foodextended:koreandinneritem",
        "twilightforest:meef_stroganoff",
        "twilightforest:cod_jerky",
        "biomeswevegone:blueberry_pie",
        "biomeswevegone:green_apple_pie",
        "minecraft:beef",
        "twilightforest:cooked_venison",
        "pamhc2foodcore:groundmuttonitem",
        "twilightforest:hydra_chop",
        "twilightforest:raw_venison",
        "minecraft:chicken",
        "createaddition:honey_cake",
        "pamhc2foodcore:groundporkitem",
        "twilightforest:rabbit_jerky",
        "extended_industrialization:canned_food",
        "twilightforest:cooked_meef",
        "twilightforest:meef_jerky",
        "minecraft:rotten_flesh",
        "minecraft:cooked_chicken",
        "twilightforest:venison_jerky",
        "pamhc2foodcore:cookedgroundrabbititem",
        "minecolonies:stuffed_pepper",
    ]

    const allstewingredients = [
    "avaritia:neutron_pile",
    "pamhc2crops:radishitem",
    "pamhc2crops:garlicitem",
    "pamhc2crops:nettlesitem",
    "pamhc2crops:bellpepperitem",
    "pamhc2crops:caulifloweritem",
    "minecraft:pumpkin",
    "minecraft:beetroot",
    "pamhc2crops:kohlrabiitem",
    "pamhc2crops:onionitem",
    "pamhc2crops:okraitem",
    "pamhc2crops:tomatoitem",
    "pamhc2crops:parsnipitem",
    "pamhc2crops:asparagusitem",
    "pamhc2crops:tomatilloitem",
    "pamhc2crops:broccoliitem",
    "pamhc2crops:wintersquashitem",
    "pamhc2crops:scallionitem",
    "pamhc2crops:rhubarbitem",
    "pamhc2crops:leekitem",
    "pamhc2crops:waterchestnutitem",
    "pamhc2crops:lettuceitem",
    "pamhc2crops:lotusitem",
    "minecraft:potato",
    "pamhc2crops:bokchoyitem",
    "pamhc2crops:jicamaitem",
    "pamhc2trees:avocadoitem",
    "pamhc2crops:arrowrootitem",
    "pamhc2crops:cucumberitem",
    "pamhc2crops:peasitem",
    "pamhc2crops:taroitem",
    "pamhc2crops:cassavaitem",
    "minecraft:carrot",
    "pamhc2crops:calabashitem",
    "pamhc2crops:spinachitem",
    "pamhc2trees:durianitem",
    "minecraft:apple",
    "pamhc2trees:pawpawitem",
    "pamhc2trees:jackfruititem",
    "pamhc2crops:blueberryitem",
    "pamhc2crops:greengrapeitem",
    "pamhc2crops:elderberryitem",
    "pamhc2crops:wolfberryitem",
    "pamhc2trees:papayaitem",
    "pamhc2trees:plumitem",
    "pamhc2crops:guaranaitem",
    "pamhc2trees:cherryitem",
    "minecraft:glow_berries",
    "pamhc2crops:cantaloupeitem",
    "pamhc2trees:limeitem",
    "pamhc2trees:lemonitem",
    "pamhc2trees:lycheeitem",
    "pamhc2crops:cactusfruititem",
    "pamhc2crops:huckleberryitem",
    "pamhc2crops:grapeitem",
    "pamhc2trees:pearitem",
    "pamhc2trees:rambutanitem",
    "minecraft:melon",
    "pamhc2crops:mulberryitem",
    "pamhc2trees:grapefruititem",
    "pamhc2trees:persimmonitem",
    "pamhc2crops:cranberryitem",
    "minecraft:melon_slice",
    "pamhc2crops:juniperberryitem",
    "pamhc2crops:pineappleitem",
    "pamhc2trees:guavaitem",
    "pamhc2trees:gooseberryitem",
    "pamhc2trees:tamarinditem",
    "pamhc2trees:starfruititem",
    "pamhc2crops:nopalesitem"]

    const stewingredients = allstewingredients.map(id => ({ item: id })) // convert to ingredient format

    const meatingredients = allMeats.map(id => ({ item: id }))

    lava.custom({
        type: "avaritia:shapeless_table",
        tier: 4,
        ingredients: meatingredients, 
        result: {
            id: "avaritia:cosmic_meatballs",
            count: 1
        }
    })

    lava.custom({
        type: "avaritia:shapeless_table",
        tier: 4,
        ingredients: stewingredients,
        result: {
            id: "avaritia:ultimate_stew",
            count: 1
        }
    })

})
