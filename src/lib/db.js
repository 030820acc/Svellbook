export let spells = [
    { name: "Ray of Frost",
    level: 0,
    traits: ["attack", "cantrip", "cold", "evocation"],
    actions: 2,
    actionType: "somatic, verbal",
    range: "120 feet",
    area: undefined,
    targets: "1 creature",
    savingThrow: undefined,
    duration: undefined,
    definition: "You blast an icy ray. Make a spell attack roll. The ray deals cold damage equal to 1d4 + your spellcasting ability modifier"
    },
    { name: "Levitate",
    level: 3,
    traits: ["evocation"],
    actions: 2,
    actionType: "somatic, verbal",
    range: "touch",
    area: undefined,
    targets: "1 unattended object or willing creature",
    savingThrow: "",
    duration: "5 minutes",
    definition: "You defy gravity and levitate the target 5 feet off the ground. For the duration of the spell, you can move the target up or down 10 feet with a single action, which has the concentrate trait. A creature floating in the air from levitate takes a -2 circumstance penalty to attack rolls. A floating creature can spend an Interact action to stabilize itself and negate this penalty for the remainder of its turn. If the target is adjacent to a fixed object or terrain of suitable stability, it can move across the surface by climbing (if the surface is vertical, like a wall) or crawling (if the surface is horizontal, such as a ceiling). The GM determines which surfaces can be climbed or crawled across."
    },
    { name: "Daze",
    level: 0,
    traits: ["mental", "cantrip", "enchantment", "nonlethal"],
    actions: 2,
    actionType: "somatic, verbal",
    range: "60 feet",
    area: undefined,
    targets: "1 creature",
    savingThrow: "will",
    duration: "1 round",
    definition: "You cloud the target's mind and daze it with a mental jolt. The jolt deals mental damage equal to your spellcasting ability modifier; the target must attempt a basic Will save. If the target critically fails the save, it is also stunned 1."
    },
    { name: "Fireball",
    level: 3,
    traits: ["fire", "evocation"],
    actions: 2,
    actionType: "somatic, verbal",
    range: "500 feet",
    area: "20 foot burst",
    targets: undefined,
    savingThrow: "reflex",
    duration: undefined,
    definition: "A roaring blast of fire appears at a spot you designate, dealing 6d6 fire damage."
    },
    { name: "Shillelagh",
    level: 1,
    traits: ["plant", "transmutation"],
    actions: 2,
    actionType: "somatic, verbal",
    range: "touch",
    area: undefined,
    targets: "1 club or staff you hold",
    savingThrow: undefined,
    duration: "1 minute",
    definition: "The target grows vines and leaves, brimming with primal energy. The target becomes a +1 striking weapon while in your hands, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two. Additionally, as long as you are on your home plane, attacks you make with the target against aberrations, extraplanar creatures, and undead increase the number of weapon damage dice to three."
    },
    { name: "Magic Missile",
    level: 1,
    traits: ["force", "evocation"],
    actions: 1,
    actionType: "somatic, verbal",
    range: "120 feet",
    area: undefined,
    targets: "1 creature",
    savingThrow: undefined,
    duration: undefined,
    definition: "You send a dart of force streaking toward a creature that you can see. It automatically hits and deals 1d4+1 force damage. For each additional action you use when Casting the Spell, increase the number of missiles you shoot by one, to a maximum of three missiles for 3 actions. You choose the target for each missile individually. If you shoot more than one missile at the same target, combine the damage before applying bonuses or penalties to damage, resistances, weaknesses, and so forth."
    },
    { name: "Shape Stone",
    level: 4,
    traits: ["earth", "transmutation"],
    actions: 2,
    actionType: "somatic, verbal",
    range: "touch",
    area: undefined,
    targets: "cube of stone 10 feet across or smaller",
    savingThrow: undefined,
    duration: undefined,
    definition: "You shape the stone into a rough shape of your choice. The shaping process is too crude to produce intricate parts, fine details, moving pieces, or the like. Any creatures standing atop the stone when you reshape it must each attempt a Reflex save or Acrobatics check."
    },
]

export let profile = {
    userId: 1,
    userName: "slemonacc",
    passwordEncrpt: "578727344",

}