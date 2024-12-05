export const pointBuyScoreCost: any = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9
};
export const pointBuyBudget = 27;
export function validateAbilityScore(oldScore: number, newScore: number, points: number) {
  const pts = points - pointBuyScoreCost[oldScore];
  const validScore = Math.max(8, Math.min(15, newScore));
  const cost = pointBuyScoreCost[validScore];
  return (cost <= (pointBuyBudget - pts) ? validScore : oldScore);
}

export const alignments= {
  "Lawful Good": {
    "description": "Devoted and principled, you always strive to do the right thing as expected by society. Some may call you a goody two-shoes, but you are seen as a beacon of reliability and righteousness."
  },
  "Neutral Good": {
    "description": "Dedicated to doing good, you navigate the complexities of morality with a flexible approach. You understand that doing the right thing often means bending or occasionally breaking rules when the greater good demands it."
  },
  "Chaotic Good": {
    "description": "Guided by a strong moral compass, you do what you believe is right, often disregarding established laws if they conflict with your personal sense of justice. Fearless in your pursuit of doing good, you trust in your own judgment and are unafraid to defy convention."
  },
  "Lawful Neutral": {
    "description": "Orderly and structured, you follow laws, codes, or traditions without bias towards good or evil. Your commitment is to uphold the order and rules set before you, often regardless of the moral outcomes of such adherence."
  },
  "Neutral": {
    "description": "Self-reliant and pragmatic, you are guided primarily by your own needs and desires, staying detached from moral extremes. You consider what is best for you above all, neither swayed by the rules of society nor driven by a moral agenda."
  },
  "Chaotic Neutral": {
    "description": "Unpredictable and independent, you act on impulse, embracing your freedom to do as you wish. You are driven by your own desires, indifferent to laws and morals, making decisions that can seem random or driven by a momentary whim."
  },
  "Lawful Evil": {
    "description": "Manipulative and domineering, you use the laws and structures of society to further your own selfish ambitions, often at the expense of others. You exploit every loophole, enforce harsh judgments, and strive for power and control."
  },
  "Neutral Evil": {
    "description": "Driven by self-interest, you are unbound by any scruples or societal rules. You prioritize your own gain over everything else, using any means necessary to achieve your ends."
  },
  "Chaotic Evil": {
    "description": "Reveling in chaos and destruction, you follow your own whims and impulses, causing harm and disorder wherever you go. You oppose any authority, reject all rules, and relish the suffering of others."
  }
};

export const classes= {
  "Barbarian": {
    "description": "",
    "hitDice": 12,
    "unarmoredACBonus": "constitution",
    "armorProficiency": [
      "Light Armor",
      "Medium Armor",
      "Shields"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "martialMelee",
      "martialRanged"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "strength",
      "constitution"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Animal Handling",
          "Athletics",
          "Intimidation",
          "Nature",
          "Perception",
          "Survival"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "martialMelee"
        ]
      },
      {
        "select": 1,
        "options": [
          "simpleMelee",
          "simpleRanged"
        ]
      },
      "Explorer's Pack",
      "Four Javelins"
    ],
    "languages": [],
    "features": [
      "Rage",
      "Unarmored Defense"
    ]
  },
  "Bard": {
    "description": "",
    "hitDice": 8,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "Hand Crossbow",
      "Longswords",
      "Rapiers",
      "Shortswords"
    ],
    "toolProficiency": [
      {
        "select": 3,
        "options": [
          "Bagpipes",
          "Drum",
          "Dulcimer",
          "Flute",
          "Lute",
          "Lyre",
          "Horn",
          "Pan Flute",
          "Shawm",
          "Viol"
        ]
      }
    ],
    "savingThrowProficiency": [
      "dexterity",
      "charisma"
    ],
    "skillProficiency": [
      {
        "select": 3,
        "options": [
          "Athletics",
          "Sleight of Hand",
          "Stealth",
          "Arcana",
          "History",
          "Investigation",
          "Nature",
          "Religion",
          "Animal Handling",
          "Insight",
          "Medicine",
          "Perception",
          "Survival",
          "Deception",
          "Performance",
          "Persuasion"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Rapier",
          "Longsword",
          "simpleMelee",
          "simpleRanged"
        ]
      },
      {
        "select": 1,
        "options": [
          "Diplomat's Pack",
          "Entertainer's Pack"
        ]
      },
      {
        "select": 1,
        "options": [
          "musicalInstrument"
        ]
      },
      "Leather Armor",
      "Dagger"
    ],
    "languages": [],
    "features": [
      "Spellcasting",
      "Bardic Inspiration (d6)"
    ]
  },
  "Cleric": {
    "description": "",
    "hitDice": 8,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor",
      "Medium Armor",
      "Shields"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "wisdom",
      "charisma"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "History",
          "Insight",
          "Medicine",
          "Persuasion",
          "Religion"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Mace",
          "Warhammer (profCheck)"
        ]
      },
      {
        "select": 1,
        "options": [
          "Scale Mail",
          "Leather Armor",
          "Chain Mail (profCheck)"
        ]
      },
      {
        "select": 1,
        "options": [
          [
            "Light Crossbow",
            "20 bolts"
          ],
          "simpleMelee",
          "simpleRanged"
        ]
      },
      {
        "select": 1,
        "options": [
          "Priest's Pack",
          "Explorer's Pack"
        ]
      },
      "Shield",
      "Holy Symbol"
    ],
    "languages": [],
    "features": [
      "Spellcasting",
      "Divine Domain"
    ]
  },
  "Druid": {
    "description": "",
    "hitDice": 8,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor (non metal)",
      "Medium Armor (non metal)",
      "Shields (non metal)"
    ],
    "weaponProficiency": [
      "Clubs",
      "Daggers",
      "Darts",
      "Javelins",
      "Maces",
      "Quarterstaffs",
      "Scimitars",
      "Sickles",
      "Slings",
      "Spears"
    ],
    "toolProficiency": [
      "Herbalism Kit"
    ],
    "savingThrowProficiency": [
      "intelligence",
      "wisdom"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Arcana",
          "Animal Handling",
          "Insight",
          "Medicine",
          "Nature",
          "Perception",
          "Religion",
          "Survival"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Wooden Shield",
          "simpleMelee",
          "simpleRanged"
        ]
      },
      {
        "select": 1,
        "options": [
          "Scimitar",
          "simpleMelee"
        ]
      },
      "Leather Armor",
      "Explorer's Pack",
      "Druidic Focus"
    ],
    "languages": [
      "Druidic"
    ],
    "features": [
      "Druidic",
      "Spellcasting"
    ]
  },
  "Fighter": {
    "description": "",
    "hitDice": 10,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor",
      "Medium Armor",
      "Heavy Armor",
      "Shields"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "martialMelee",
      "martialRanged"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "strength",
      "constitution"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Acrobatics",
          "Animal Handling",
          "Athletics",
          "History",
          "Insight",
          "Intimidation",
          "Perception",
          "Survival"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Chain Mail",
          [
            "Leather Armor",
            "Longbow",
            "20 arrows"
          ]
        ]
      },
      {
        "select": 1,
        "options": [
          [
            "martialMelee",
            "Shield"
          ],
          [
            "martialRanged",
            "Shield"
          ],
          [
            {
              "select": 2,
              "options": [
                "martialMelee",
                "martialRanged"
              ]
            }
          ]
        ]
      },
      {
        "select": 1,
        "options": [
          [
            "Light Crossbow",
            "20 bolts"
          ],
          "2 Handaxes"
        ]
      },
      {
        "select": 1,
        "options": [
          "Dungeoneer's Pack",
          "Explorer's Pack"
        ]
      }
    ],
    "languages": [],
    "features": [
      "Fighting Style",
      "Second Wind"
    ]
  },
  "Monk": {
    "description": "",
    "hitDice": 8,
    "unarmoredACBonus": "wisdom",
    "armorProficiency": [],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "Shortswords"
    ],
    "toolProficiency": [
      {
        "select": 1,
        "options": [
          "Alchemist's Supplies",
          "Brewer's Supplies",
          "Calligrapher's Supplies",
          "Carpenter's Tools",
          "Cobbler's Tools",
          "Cook's Utensils",
          "Glassblower's Tools",
          "Jeweler's Tools",
          "Leatherworker's Tools",
          "Mason's Tools",
          "Painter's Supplies",
          "Potter's Tools",
          "Smith's Tools",
          "Tinker's Tools",
          "Weaver's Tools",
          "Woodcarver's Tools",
          "Bagpipes",
          "Drum",
          "Dulcimer",
          "Flute",
          "Lute",
          "Lyre",
          "Horn",
          "Pan Flute",
          "Shawm",
          "Viol"
        ]
      }
    ],
    "savingThrowProficiency": [
      "strength",
      "dexterity"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Acrobatics",
          "Athletics",
          "History",
          "Insight",
          "Religion",
          "Stealth"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Shortsword",
          "simpleMelee",
          "simpleRanged"
        ]
      },
      {
        "select": 1,
        "options": [
          "Dungeoneer's Pack",
          "Explorer's Pack"
        ]
      },
      "10 Darts"
    ],
    "languages": [],
    "features": [
      "Unarmored Defense",
      "Martial Arts"
    ]
  },
  "Paladin": {
    "description": "",
    "hitDice": 10,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor",
      "Medium Armor",
      "Heavy Armor",
      "Shields"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "martialMelee",
      "martialRanged"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "wisdom",
      "charisma"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Athletics",
          "Insight",
          "Intimidation",
          "Medicine",
          "Persuasion",
          "Religion"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          [
            {
              "select": 1,
              "options": [
                "martialMelee",
                "martialRanged"
              ]
            },
            "Shield"
          ],
          {
            "select": 2,
            "options": [
              "martialMelee",
              "martialRanged"
            ]
          }
        ]
      },
      {
        "select": 1,
        "options": [
          "Five Javelins",
          "simpleMelee"
        ]
      },
      {
        "select": 1,
        "options": [
          "Priest's Pack",
          "Explorer's Pack"
        ]
      },
      "Chain Mail",
      "Holy Symbol"
    ],
    "languages": [],
    "features": [
      "Divine Sense",
      "Lay on Hands"
    ]
  },
  "Ranger": {
    "description": "",
    "hitDice": 10,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor",
      "Medium Armor",
      "Shields"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "martialMelee",
      "martialRanged"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "strength",
      "dexterity"
    ],
    "skillProficiency": [
      {
        "select": 3,
        "options": [
          "Animal Handling",
          "Athletics",
          "Insight",
          "Investigation",
          "Nature",
          "Perception",
          "Stealth",
          "Survival"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Scale Mail",
          "Leather Armor"
        ]
      },
      {
        "select": 1,
        "options": [
          "2 Shortswords",
          {
            "select": 2,
            "options": [
              "simpleMelee"
            ]
          }
        ]
      },
      {
        "select": 1,
        "options": [
          "Dungeoneer's Pack",
          "Explorer's Pack"
        ]
      },
      "Longbow",
      "Quiver of 20 arrows"
    ],
    "languages": [],
    "features": [
      "Favored Enemy",
      "Natural Explorer"
    ]
  },
  "Rogue": {
    "description": "",
    "hitDice": 8,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged",
      "Hand Crossbow",
      "Longswords",
      "Rapiers",
      "Shortswords"
    ],
    "toolProficiency": [
      "Thieves' Tools"
    ],
    "savingThrowProficiency": [
      "dexterity",
      "intelligence"
    ],
    "skillProficiency": [
      {
        "select": 4,
        "options": [
          "Acrobatics",
          "Athletics",
          "Deception",
          "Insight",
          "Intimidation",
          "Investigation",
          "Perception",
          "Performance",
          "Persuasion",
          "Sleight of Hand",
          "Stealth"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Rapier",
          "Shortsword"
        ]
      },
      {
        "select": 1,
        "options": [
          [
            "Shortbow",
            "Quiver of 20 arrows"
          ],
          "Shortsword"
        ]
      },
      {
        "select": 1,
        "options": [
          "Burglar's Pack",
          "Dungeoneer's Pack",
          "Explorer's Pack"
        ]
      },
      "Leather Armor",
      "2 Daggers",
      "Thieves' Tools"
    ],
    "languages": [
      "Thieves' Cant"
    ],
    "features": [
      "Expertise",
      "Sneak Attack",
      "Thieves' Cant"
    ]
  },
  "Sorcerer": {
    "description": "",
    "hitDice": 6,
    "unarmoredACBonus": "",
    "armorProficiency": [],
    "weaponProficiency": [
      "Daggers",
      "Darts",
      "Slings",
      "Quarterstaffs",
      "Light Crossbow"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "constitution",
      "charisma"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Arcana",
          "Deception",
          "Insight",
          "Intimidation",
          "Persuasion",
          "Religion"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          [
            "Light Crossbow",
            "20 bolts"
          ],
          "simpleMelee",
          "simpleRanged"
        ]
      },
      {
        "select": 1,
        "options": [
          "Component Pouch",
          "Arcane Focus"
        ]
      },
      {
        "select": 1,
        "options": [
          "Dungeoneer's Pack",
          "Explorer's Pack"
        ]
      },
      "2 Daggers"
    ],
    "languages": [],
    "features": [
      "Spellcasting",
      "Sorcerous Origin"
    ]
  },
  "Warlock": {
    "description": "",
    "hitDice": 8,
    "unarmoredACBonus": "",
    "armorProficiency": [
      "Light Armor"
    ],
    "weaponProficiency": [
      "simpleMelee",
      "simpleRanged"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "wisdom",
      "charisma"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Arcana",
          "Deception",
          "History",
          "Intimidation",
          "Investigation",
          "Nature",
          "Religion"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          [
            "Light Crossbow",
            "20 bolts"
          ],
          "simpleMelee",
          "simpleRanged"
        ]
      },
      {
        "select": 1,
        "options": [
          "Component Pouch",
          "Arcane Focus"
        ]
      },
      {
        "select": 1,
        "options": [
          "Scholar's Pack",
          "Dungeoneer's Pack"
        ]
      },
      {
        "select": 1,
        "options": [
          "simpleMelee",
          "simpleRanged"
        ]
      },
      "Leather Armor",
      "2 Daggers"
    ],
    "languages": [],
    "features": [
      "Otherworldly Patron",
      "Pact Magic"
    ]
  },
  "Wizard": {
    "description": "",
    "hitDice": 6,
    "unarmoredACBonus": "",
    "armorProficiency": [],
    "weaponProficiency": [
      "Daggers",
      "Darts",
      "Slings",
      "Quarterstaffs",
      "Light Crossbow"
    ],
    "toolProficiency": [],
    "savingThrowProficiency": [
      "intelligence",
      "wisdom"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Arcana",
          "History",
          "Insight",
          "Investigation",
          "Medicine",
          "Religion"
        ]
      }
    ],
    "equipment": [
      {
        "select": 1,
        "options": [
          "Quarterstaff",
          "Dagger"
        ]
      },
      {
        "select": 1,
        "options": [
          "Component Pouch",
          "Arcane Focus"
        ]
      },
      {
        "select": 1,
        "options": [
          "Scholar's Pack",
          "Explorer's Pack"
        ]
      },
      "Spellbook"
    ],
    "languages": [],
    "features": [
      "Spellcasting",
      "Arcane Recovery"
    ]
  }
};

export const languages= {
  "Common": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Humans",
    "script": "Common"
  },
  "Dwarvish": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Dwarves",
    "script": "Dwarvish"
  },
  "Elvish": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Elves",
    "script": "Elvish"
  },
  "Giant": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Ogres, Giants",
    "script": "Dwarvish"
  },
  "Gnomish": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Gnomes",
    "script": "Dwarvish"
  },
  "Goblin": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Goblinoids",
    "script": "Dwarvish"
  },
  "Halfling": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Halflings",
    "script": "Common"
  },
  "Orc": {
    "description": "",
    "type": "standard",
    "typicalSpeakers": "Orcs",
    "script": "Dwarvish"
  },
  "Abyssal": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Demons",
    "script": "Infernal"
  },
  "Celestial": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Celestials",
    "script": "Celestial"
  },
  "Draconic": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Dragons, Dragonborn",
    "script": "Draconic"
  },
  "Deep Speech": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Aboleths, Cloakers",
    "script": ""
  },
  "Infernal": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Devils",
    "script": "Infernal"
  },
  "Primordial": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Elementals",
    "script": "Dwarvish"
  },
  "Sylvan": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Fey creatures",
    "script": "Elvish"
  },
  "Undercommon": {
    "description": "",
    "type": "exotic",
    "typicalSpeakers": "Underworld traders",
    "script": "Elvish"
  }
};

export const races= {
  "Dragonborn": {
    "description": "Dragonborn have draconic features and take great pride in their heritage. They are often seen as outsiders and strive to meet the standards of draconic strength and honor. Dragonborn reflect their draconic heritage, having a Breath Weapon based on their dragon ancestry and resistance to the corresponding elemental damage.",
    "racialStatBonus": [
      "strength,2",
      "charisma,1"
    ],
    "hpBonus": 0,
    "speed": 30,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      "Draconic"
    ],
    "features": [
      "Draconic Ancestry",
      "Breath Weapon",
      "Damage Resistance"
    ],
    "skillProficiency": []
  },
  "Hill Dwarf": {
    "description": "Dwarves are stout and strong, known for their skill in forging and mining. They value tradition and live in mountainous or underground cities. Dwarves have increased Constitution scores and resistance to poison. They are also proficient with certain weapons and tools, showcasing their craftsmanship. Hill dwarves are a subrace of dwarves with keen senses, intuition, and resilience.",
    "racialStatBonus": [
      "constitution,2",
      "wisdom,1"
    ],
    "hpBonus": 1,
    "speed": 25,
    "armorProficiency": [],
    "weaponProficiency": [
      "Battleaxe",
      "Handaxe",
      "Light Hammer",
      "Warhammer"
    ],
    "toolProficiency": [
      {
        "select": 1,
        "options": [
          "Brewer's Supplies",
          "Mason's Tools",
          "Smith's Tools"
        ]
      }
    ],
    "languages": [
      "Common",
      "Dwarvish"
    ],
    "features": [
      "Darkvision",
      "Dwarven Resilience",
      "Dwarven Combat Training",
      "Tool Proficiency",
      "Stonecunning",
      "Dwarven Toughness"
    ],
    "skillProficiency": []
  },
  "High Elf": {
    "description": "Known for their grace and longevity, elves live in natural settings and are often seen as aloof. They come in different kinds, including high elves, wood elves, and dark elves (drow). Elves have keen senses and intuition, reflected in their proficiency in Perception. They also have Fey Ancestry, which grants them advantage on saving throws against being charmed, and immunity to magical sleep.  High elves are a subrace of elves who have a keen mind and mastery over the basics of magic.",
    "racialStatBonus": [
      "dexterity,2",
      "intelligence,1"
    ],
    "hpBonus": 0,
    "speed": 30,
    "weaponProficiency": [
      "Longsword",
      "Shortsword",
      "Shortbow",
      "Longbow"
    ],
    "armorProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      "Elvish",
      {
        "select": 1,
        "options": [
          "Dwarvish",
          "Giant",
          "Gnomish",
          "Goblin",
          "Halfling",
          "Orc",
          "Abyssal",
          "Celestial",
          "Draconic",
          "Deep Speech",
          "Infernal",
          "Primordial",
          "Sylvan",
          "Undercommon"
        ]
      }
    ],
    "features": [
      "Darkvision",
      "Keen Senses",
      "Fey Ancestry",
      "Trance",
      "Elf Weapon Training",
      "Cantrip",
      "Extra Language"
    ],
    "skillProficiency": [
      "Perception"
    ]
  },
  "Rock Gnome": {
    "description": "Gnomes are small, energetic, and thrive on innovation and invention. They often live in whimsical communities filled with mechanical wonders. Gnomes are intelligent and cunning, with a bonus to Intelligence. They also have Gnome Cunning, which gives them advantage on all Intelligence, Wisdom, and Charisma saving throws against magic. Rock Gnomes are a subrace of gnomes known for their inventive spirit and hardiness.",
    "racialStatBonus": [
      "intelligence,2",
      "constitution,1"
    ],
    "hpBonus": 0,
    "speed": 25,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [
      "Tinker's Tools"
    ],
    "languages": [
      "Common",
      "Gnomish"
    ],
    "features": [
      "Darkvision",
      "Gnome Cunning",
      "Artificer's Lore",
      "Tinker"
    ],
    "skillProficiency": []
  },
  "Half-Elf": {
    "description": "Half-elves blend human and elven traits. They often feel like outsiders as they don’t fully fit into the societies of either race. This gives them a unique perspective that makes them excellent diplomats and negotiators. Half-elves gain a +2 bonus to Charisma and a +1 bonus to two other ability scores of their choice, reflecting their mixed heritage. They also have Darkvision, allowing them to see in low light conditions, and they have advantage on saving throws against being charmed and cannot be put to sleep by magic, thanks to their elven blood.",
    "racialStatBonus": [
      "charisma,2",
      {
        "select": 2,
        "options": [
          "strength,1",
          "dexterity,1",
          "constitution,1",
          "intelligence,1",
          "wisdom,1"
        ]
      }
    ],
    "hpBonus": 0,
    "speed": 30,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      "Elvish",
      {
        "select": 1,
        "options": [
          "Dwarvish",
          "Giant",
          "Gnomish",
          "Goblin",
          "Halfling",
          "Orc",
          "Abyssal",
          "Celestial",
          "Draconic",
          "Deep Speech",
          "Infernal",
          "Primordial",
          "Sylvan",
          "Undercommon"
        ]
      }
    ],
    "features": [
      "Darkvision",
      "Fey Ancestry",
      "Skill Versatility"
    ],
    "skillProficiency": [
      {
        "select": 2,
        "options": [
          "Athletics",
          "Sleight of Hand",
          "Stealth",
          "Arcana",
          "History",
          "Investigation",
          "Nature",
          "Religion",
          "Animal Handling",
          "Insight",
          "Medicine",
          "Perception",
          "Survival",
          "Deception",
          "Performance",
          "Persuasion"
        ]
      }
    ]
  },
  "Lightfoot Halfling": {
    "description": "Small and unassuming, halflings live in pastoral idylls or quiet boroughs. They love peace and comfort but are surprisingly resourceful and brave. Halflings are lucky, which allows them to reroll 1s on d20 rolls once. They are also nimble and can move through the space of larger creatures. Lightfoot Halflings are a subrace of halflings are prone to wanderlust and excellent at stealth.",
    "racialStatBonus": [
      "dexterity,2",
      "charisma,1"

    ],
    "hpBonus": 0,
    "speed": 25,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      "Halfling"
    ],
    "features": [
      "Lucky",
      "Brave",
      "Halfling Nimbleness",
      "Naturally Stealthy"
    ],
    "skillProficiency": []
  },
  "Half-Orc": {
    "description": "Half-orcs bear the physical marks of their orc heritage with pride, often facing prejudice from both orc and human societies. They are known for their strength, courage, and tenacity. Many half-orcs strive to overcome stereotypical expectations by proving their worth as loyal and competent companions. Half-orcs receive a +2 bonus to Strength and a +1 to Constitution, highlighting their toughness and physical power. They have the Relentless Endurance trait, which allows them to drop to 1 hit point instead of 0 once per day when they would normally be knocked out. Additionally, they possess the Savage Attacks trait, which gives them extra dice of damage on critical hits with melee weapons.",
    "racialStatBonus": [
      "strength,2",
      "constitution,1"
    ],
    "hpBonus":0,
    "speed": 30,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      "Orc"
    ],
    "features": [
      "Darkvision",
      "Menacing",
      "Relentless Endurance",
      "Savage Attacks"
    ],
    "skillProficiency": [
      "Intimidation"
    ]
  },
  "Human": {
    "description": "The most ubiquitous race in most D&D worlds, humans are known for their adaptability and diversity. They are young, ambitious, and cover a wide range of cultures. Humans gain a +1 bonus to all their ability scores, reflecting their versatile nature.",
    "racialStatBonus": [
      {
        "strength": 1
      },
      {
        "dexterity": 1
      },
      {
        "constitution": 1
      },
      {
        "intelligence": 1
      },
      {
        "wisdom": 1
      },
      {
        "charisma": 1
      }
    ],
    "hpBonus": 0,
    "speed": 30,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      {
        "select": 1,
        "options": [
          "Elvish",
          "Dwarvish",
          "Giant",
          "Gnomish",
          "Goblin",
          "Halfling",
          "Orc",
          "Abyssal",
          "Celestial",
          "Draconic",
          "Deep Speech",
          "Infernal",
          "Primordial",
          "Sylvan",
          "Undercommon"
        ]
      }
    ],
    "skillProficiency": []
  },
  "Tiefling": {
    "description": "Born of a human and infernal bloodline, tieflings often face prejudice due to their demonic features. They are resourceful and strong-willed, often driven by a desire to prove themselves. Tieflings have infernal heritage which provides them with resistance to fire and spells like Thaumaturgy. They also get a bonus to Intelligence and Charisma.",
    "racialStatBonus": [
      {
        "intelligence": 1
      },
      {
        "charisma": 2
      }
    ],
    "hpBonus": 0,
    "speed": 30,
    "armorProficiency": [],
    "weaponProficiency": [],
    "toolProficiency": [],
    "languages": [
      "Common",
      "Infernal"
    ],
    "features": [
      "Darkvision",
      "Hellish Reistance",
      "Infernal Legacy"
    ],
    "skillProficiency": []
  }
};

export const tools = {
  "artisanTools": [
    "Alchemist's Supplies",
    "Brewer's Supplies",
    "Calligrapher's Supplies",
    "Carpenter's Tools",
    "Cobbler's Tools",
    "Cook's Utensils",
    "Glassblower's Tools",
    "Jeweler's Tools",
    "Leatherworker's Tools",
    "Mason's Tools",
    "Painter's Supplies",
    "Potter's Tools",
    "Smith's Tools",
    "Tinker's Tools",
    "Weaver's Tools",
    "Woodcarver's Tools"
  ],
  "gamingSet": [
    "Dice Set",
    "Dragonchess Set",
    "Playing Card Set",
    "Three-Dragon Ante Set"
  ],
  "musicalInstrument": [
    "Bagpipes",
    "Drum",
    "Dulcimer",
    "Flute",
    "Lute",
    "Lyre",
    "Horn",
    "Pan Flute",
    "Shawm",
    "Viol"
  ],
  "other": [
    "Disguise Kit",
    "Forgery Kit",
    "Herbalism Kit",
    "Navigator's Tools",
    "Poisoner's Kit",
    "Thieve's Tools",
    "Vehicles"
  ]
};

export const weapon = {
  "martialMelee": [
    "Battleaxe",
    "Flail",
    "Glaive",
    "Greataxe",
    "Greatsword",
    "Halberd",
    "Lance",
    "Longsword",
    "Maul",
    "Morningstar",
    "Pike",
    "Rapier",
    "Scimitar",
    "Shortsword",
    "Trident",
    "War pick",
    "Warhammer",
    "Whip"
  ],
  "martialRanged": [
    "Blowgun",
    "Hand Crossbow",
    "Heavy Crossbow",
    "Longbow",
    "Net"
  ],
  "simpleMelee": [
    "Club",
    "Dagger",
    "Greatclub",
    "Handaxe",
    "Javelin",
    "Light Hammer",
    "Mace",
    "Quarterstaff",
    "Sickle",
    "Spear"
  ],
  "simpleRanged": [
    "Light Crossbow",
    "Dart",
    "Shortbow",
    "Sling"
  ]
};

export const skillsInfo = {
  "Athletics": {
    "description": "Covers difficult tasks such as climbing, jumping, and swimming. It is used for feats of physical strength and endurance.",
    "ability": "Strength"
  },
  "Acrobatics": {
    "description": "Involves maintaining balance and performing physical stunts such as flips and rolls.",
    "ability": "Dexterity"
  },
  "Sleight of Hand": {
    "description": "Involves manipulating objects with agility and stealth, often to deceive or conceal.",
    "ability": "Dexterity"
  },
  "Stealth": {
    "description": "Used for sneaking, hiding, and avoiding detection.",
    "ability": "Dexterity"
  },
  "Arcana": {
    "description": "Covers knowledge about spells, magic items, and mystical lore.",
    "ability": "Intelligence"
  },
  "History": {
    "description": "Involves knowledge about historical events, legendary figures, and ancient civilizations.",
    "ability": "Intelligence"
  },
  "Investigation": {
    "description": "Used to find clues, solve puzzles, and analyze situations.",
    "ability": "Intelligence"
  },
  "Nature": {
    "description": "Involves knowledge about the natural world, including plants, animals, and weather patterns.",
    "ability": "Intelligence"
  },
  "Religion": {
    "description": "Covers knowledge about deities, religious practices, and divine lore.",
    "ability": "Intelligence"
  },
  "Animal Handling": {
    "description": "Used to calm, train, and understand animals.",
    "ability": "Wisdom"
  },
  "Insight": {
    "description": "Used to understand people's motives, recognize lies, and predict actions.",
    "ability": "Wisdom",
  },
  "Medicine": {
    "description": "Covers knowledge about diagnosing illnesses, treating wounds, and understanding medical procedures.",
    "ability": "Wisdom",
  },
  "Perception": {
    "description": "Used to notice hidden things, detect danger, and spot details in the environment.",
    "ability": "Wisdom",
  },
  "Survival": {
    "description": "Involves skills for surviving in the wild, tracking creatures, and finding food and water.",
    "ability": "Wisdom",
  },
  "Deception": {
    "description": "Used to lie, mislead, and create false impressions.",
    "ability": "Charisma",
  },
  "Intimidation": {
    "description": "Involves using threats, fear, and force to influence others.",
    "ability": "Charisma",
  },
  "Persuasion": {
    "description": "Used to convince others through diplomacy, tact, and charm.",
    "ability": "Charisma",
  },
}