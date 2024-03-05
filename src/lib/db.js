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
    }
]

export let profile = {
    userId: 1,
    userName: "slemonacc",
    passwordEncrpt: "578727344",

}