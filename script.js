const roles = [
    "Knight", "Mage", "Rogue", "Archer", "Paladin", "Blacksmith", "Healer", "Assassin", "Saint", "Tamer",
    "Necromancer", "Unknown", "Death Knight", "Farmer", "Demon King", "Swordman", "Magic Swordman",
    "Martial Artist", "Trader", "Archmage", "Slave", "Chef", "Rifleman", "Sapper", "Vampire",  
    "Berserker", "Bard", "Pirate", "Priest", "Alchemist", "Ranger", "Samurai", "Monk", "Vampire Lord", 
    "Warlock", "Warrior", "Sorcerer", "Druid", "Templar", "Gladiator", "Summoner", "Witch Hunter", "Dark Knight", 
    "Inquisitor", "Scout", "Lancer", "Runesmith", "Champion"
];
const races = [
    "Human", "Elf", "Dwarf", "Orc", "Beast", "Dark Elf", "Dragon", "Half Dragon", "Half Elf", "Demon",
    "Werewolf", "Succubus", "Divine Being", "Feline", "Frogman", "Lizardman", "Slime", "Jawir",
    "Sarkaz", "Liberi", "Sankta", "Deer", "Fishman", "Unknown", "Vampire", "Phoenix", "Giant", "Fairy", "Merfolk", "Gnome", "Troll", "Gargoyle", "Zombie", "Skeleton", "Harpy", "Minotaur", "Djinn", "Centaur", "Cyclops", "Satyr", "Dryad", "Spirit", "Naga", "Undead", 
    "Goblin", "Elemental", "Chimera", "Griffin", "Treant", "Yeti", "Ogre"
];
const regions = [
    "LowRess Kingdom", "Liberia", "Great Forest", "Heavenhold", "Kingdom of Erusea", "Soviet Republics",
    "Drakenfell Mountains", "Evershade Isles", "Frostspire Tundra", "Ashenmoor Wastes", "Valoria", 
    "Silverpeak Highlands", "Thornwood Vale", "Eldergrove", "Blackwater Marsh", "Suncrest Plains", 
    "Ironcliff Bastion", "Whispering Sands", "Starlight Hollow", "Glimmerfall Cove", "Shadowfen Swamp", 
    "Stormveil Coast", "Crimson Hollow", "Verdantwild", "Obsidian Flats", "Azurelake Shores", 
    "Emberstone Citadel", "Duskmire Reach", "Wildthorn Expanse", "Goldenleaf Glade", "Ivoryspire City"
];
const roleSkills = {
    "Knight": ["Sword Mastery", "Shield Mastery", "Mounted Combat", "War Cry", "Heavy Armor", "Tactical Strategy", "Battle Charge", "Shield Bash", "Combat Reflexes", "Defensive Stance", "Sword Block", "Battlefield Awareness", "Parry", "Shield Slam", "Armor Reinforcement", "Toughness", "Sword Precision", "Holy Vow", "Defender's Resolve", "Battle Endurance", "Total Immunity"],
    "Mage": ["Fire Magic", "Water Magic", "Earth Magic", "Wind Magic", "Lightning Magic", "Arcane Magic", "Teleportation", "Time Manipulation", "Illusion", "Energy Bolt", "Mana Control", "Dark Magic", "Summon Elementals", "Meteor Shower", "Magic Shield", "Mana Drain", "Arcane Blast", "Magic Ward", "Mana Burst", "Elemental Mastery", "Total Immunity"],
    "Rogue": ["Stealth", "Sneak Attack", "Lockpicking", "Pickpocketing", "Backstab", "Evasion", "Poison Crafting", "Agility Boost", "Silent Step", "Ambush", "Trap Detection", "Shadow Step", "Dagger Mastery", "Dual Wielding", "Smoke Bomb", "Shadow Meld", "Thievery", "Quick Escape", "Decoy", "Cloak of Shadows", "Total Immunity"],
    "Archer": ["Archery", "Tracking", "Trap Setting", "Camouflage", "Eagle Eye", "Quick Shot", "Bow Mastery", "Arrow Crafting", "Precision Shot", "Wind Guidance", "Critical Strike", "Multi Shot", "Long Range Mastery", "Animal Companion", "Piercing Arrow", "Explosive Arrow", "Double Shot", "Sniper Focus", "Hawk Eye", "Rapid Fire", "Total Immunity"],
    "Paladin": ["Holy Strike", "Divine Protection", "Healing", "Sword Mastery", "Shield of Faith", "Blessing of Light", "Aura of Courage", "Smite Evil", "Guardian's Shield", "Divine Resilience", "Holy Aura", "Purification", "Divine Judgement", "Divine Shield", "Light's Wrath", "Sacred Sword", "Healing Light", "Holy Hammer", "Divine Crusade", "Faith Barrier", "Total Immunity"],
    "Blacksmith": ["Blacksmithing", "Crafting", "Metal Manipulation", "Weapon Forging", "Armor Crafting", "Enchanting", "Repairing", "Mining", "Material Refinement", "Tool Crafting", "Metalworking", "Rune Engraving", "Weapon Enhancement", "Resource Management", "Hammer Strike", "Metal Shaping", "Smith's Endurance", "Ore Detection", "Forge Mastery", "Anvil Strike", "Total Immunity"],
    "Healer": ["Healing", "Potion Brewing", "Herbalism", "Light Magic", "First Aid", "Divine Touch", "Cure Disease", "Revitalize", "Holy Ward", "Life Restoration", "Group Healing", "Resurrection", "Mana Regeneration", "Protective Aura", "Restoration Surge", "Healing Circle", "Cleanse", "Renewal", "Sanctified Healing", "Restorative Light", "Total Immunity"],
    "Assassin": ["Stealth", "Poison Crafting", "Sneak Attack", "Dagger Mastery", "Critical Strike", "Dual Wielding", "Silent Step", "Shadow Meld", "Smoke Bomb", "Assassination", "Death Strike", "Vanish", "Shadow Clone", "Nerve Strike", "Ambush", "Silent Kill", "Toxin Expert", "Blinding Powder", "Heart Strike", "Deadly Precision", "Total Immunity"],
    "Saint": ["Blessing Magic", "Divine Protection", "Healing", "Charisma", "Inspiration", "Holy Flame", "Sanctuary", "Holy Light", "Miracle", "Divine Aura", "Sacred Shield", "Purify", "Light of Hope", "Holy Wrath", "Blessed Words", "Divine Intervention", "Blessing of Strength", "Holy Song", "Sacred Prayer", "Eternal Light", "Total Immunity"],
    "Tamer": ["Animal Training", "Beast Communication", "Taming Magic", "Summon Beast", "Beast Mastery", "Animal Bond", "Feral Rage", "Beast Riding", "Track Animals", "Command Beast", "Wild Frenzy", "Animal Empathy", "Beast Whisperer", "Tame Elemental", "Summon Spirit Beast", "Feral Protection", "Nature's Call", "Primal Roar", "Savage Charge", "Pack Leader", "Total Immunity"],
    "Necromancer": ["Necromancy", "Curse Magic", "Soul Magic", "Bone Magic", "Dark Ritual", "Raise Dead", "Undead Mastery", "Corpse Explosion", "Soul Drain", "Lich Transformation", "Plague Magic", "Life Drain", "Dark Pact", "Death's Embrace", "Graveborn", "Soul Reaver", "Spirit Shackles", "Shadow of Death", "Soul Harvest", "Deathly Aura", "Total Immunity"],
    "Unknown": ["Unknown Skill", "Mystery", "Hidden Talent", "Adaptability", "Survival Instinct", "Random Burst", "Eternal Enigma", "Shifting Powers", "Unpredictable Talent", "Foresight", "Chaos Manipulation", "Arcane Puzzle", "Reality Bending", "Anomalous Strength", "Unstable Magic", "Flicker Strike", "Quantum Leap", "Temporal Shift", "Mimic", "Darkness Within", "Total Immunity"],
    "Death Knight": ["Death Blade", "Soul Drain", "Plague Strike", "Undead Mastery", "Dark Armor", "Cursed Shield", "Death Charge", "Grim Command", "Necrotic Slash", "Unholy Aura", "Corpse Explosion", "Bone Shield", "Life Steal", "Dark Pact", "Vampiric Strike", "Reaper's Touch", "Soul Reaper", "Dark Command", "Death's Advance", "Doom Strike", "Total Immunity"],
    "Farmer": ["Harvesting", "Soil Knowledge", "Crop Mastery", "Animal Husbandry", "Seed Crafting", "Irrigation Mastery", "Plowing", "Plant Growth", "Land Fertility", "Livestock Care", "Crop Rotation", "Agricultural Trade", "Farming Tools", "Pest Control", "Farm Management", "Compost Creation", "Breeding Mastery", "Crop Forecasting", "Herbology", "Barn Construction", "Total Immunity"],
    "Demon King": ["Dark Command", "Infernal Flames", "Demon Summoning", "Absolute Domination", "Demonic Aura", "Soul Corruption", "Hellfire", "Dark Rebirth", "Demon Lord's Might", "Dark Pact", "Summon Demon Hordes", "Hellstorm", "Infernal Protection", "Shadow Flame", "Doom Prophecy", "Chaos Control", "Abyssal Magic", "Soul Reaver", "Eternal Torment", "Cursed Throne", "Total Immunity"],
    "Swordman": ["Sword Mastery", "Blade Dance", "Quick Strike", "Deflect", "Parry", "Sword Combo", "Sharp Focus", "Sword Spin", "Deadly Slash", "Sword Precision", "Sword Reflection", "Blade Guard", "Heavy Strike", "Sword Blitz", "Raging Slash", "Sword of Fury", "Rapid Slash", "Sword Counter", "Blade Crush", "Whirling Blade", "Total Immunity"],
    "Magic Swordman": ["Sword Mastery", "Elemental Blade", "Arcane Strike", "Mana Infusion", "Sword Dance", "Enchanted Weapon", "Magic Burst", "Quick Slash", "Spellblade", "Blade of Flames", "Ice Blade", "Lightning Edge", "Earth Cleave", "Wind Cutter", "Sword of Light", "Darkness Slash", "Sword Aura", "Mystic Edge", "Arcane Barrier", "Mana Shield", "Total Immunity"],
    "Martial Artist": ["Hand-to-Hand Combat", "Pressure Point Strike", "Fists of Fury", "Agility Boost", "Palm Strike", "Roundhouse Kick", "Counterattack", "Chi Focus", "Tiger Stance", "Dragon Kick", "Iron Fist", "Body Hardening", "Mental Focus", "Chi Channeling", "Flurry of Blows", "Disarm", "Sweeping Kick", "Nerve Strike", "Power Punch", "Energy Burst", "Total Immunity"],
    "Trader": ["Bartering", "Market Analysis", "Negotiation", "Wealth Accumulation", "Merchant's Eye", "Inventory Management", "Contract Drafting", "Supply Chain", "Risk Assessment", "Sales Mastery", "Trade Secrets", "Customer Rapport", "Trade Route Knowledge", "Investment Strategies", "Merchant's Luck", "Price Manipulation", "Logistics Expertise", "Market Expansion", "Haggling", "Wealth Control", "Total Immunity"],
    "Archmage": ["Ultimate Fireball", "Meteor Shower", "Elemental Mastery", "Arcane Surge", "Mystic Explosion", "Mana Mastery", "Teleportation", "Time Warp", "Mana Storm", "Reality Shatter", "Infinite Wisdom", "Arcane Barrage", "Planar Rift", "Arcane Manipulation", "Elemental Fury", "Cosmic Insight", "Eternal Flame", "Mana Explosion", "Spellsurge", "Mana Infusion", "Total Immunity"],
    "Slave": ["Endurance", "Survival Instinct", "Pain Tolerance", "Obedience", "Escape Artist", "Servitude Mastery", "Submission", "Silent Endurance", "Servant's Will", "Willpower", "Stealth Work", "Escape Plan", "Unseen Movement", "Rebellious Mind", "Survival Expert", "Hidden Talent", "Chained Strength", "Mental Resilience", "Resistance", "Hidden Strength", "Total Immunity"],
    "Chef": ["Cooking", "Ingredient Sourcing", "Flavor Mastery", "Knife Skills", "Heat Control", "Herb Knowledge", "Food Presentation", "Recipe Creation", "Gourmet Crafting", "Culinary Expertise", "Meal Preparation", "Food Preservation", "Baking Mastery", "Herb Infusion", "Ingredient Substitution", "Food Safety", "Multitasking", "Culinary Innovation", "Taste Testing", "Plating Expertise", "Total Immunity"],
    "Rifleman": ["Precise Aim", "Wind Estimation", "Critical Strike", "Lethality", "Mass Shooting", "Bayonet Fight", "Multishot", "Dead Eye", "Overload", "Suppresive Fire", "Close Air Support", "Guerrilla", "Artillery Strike", "Iron Clad", "Dual Welding", "Bullseye", "Total Focus", "Eyes In The Sky", "Infinite Mazagine", "Bulletproof", "Limit Break", "Two Birds One Stone", "APHE Shots", "Total Immunity", "Elemental Bullets"],
    "Sapper": ["Suppressive Fire", "Field Repair", "Bomb Defuse", "Sabotage", "Limit Break", "Iron Clad", "Marvelous Engineering", "Excavation", "Minesweeping", "Multitasking", "Confrontation", "No Retreat", "Demolition Expert", "Unconventional Warfare", "Eagle Eyes", "Damage Reduction", "Total Immunity", "Front Line Defense"],
    "Vampire": ["Total Immunity", "Blood Drain", "Bat Transformation", "Night Vision", "Immortal Presence", "Vampiric Aura", "Shadow Strike", "Dark Seduction", "Blood Pact", "Mist Form", "Blood Frenzy", "Summon Bats", "Night Stalker", "Immortal Regeneration", "Crimson Fury", "Charm of the Undead", "Blood Ritual", "Shadow Dash", "Nightwalker", "Hypnotic Gaze", "Vampire's Thrall"],
    "Berserker": ["Total Immunity", "Rage Unleashed", "Bloodlust", "Frenzied Strikes", "Battle Roar", "Relentless Assault", "Fearless Charge", "Savage Blow", "Battle Frenzy", "Bloodthirst", "Weapon Smash", "War Cry", "Unstoppable Force", "Rampage", "Critical Strike", "Battlefield Fury", "Rage Recovery", "Adrenaline Surge", "Destruction Wave", "Uncontrolled Rage", "Death Rage"],
    "Bard": ["Total Immunity", "Song of Valor", "Melodic Healing", "Inspiring Anthem", "Lute Mastery", "Song of Protection", "Charming Tune", "Magical Melody", "Harmonic Harmony", "Ballad of Bravery", "Rhythmic Defense", "Melody of Recovery", "Tune of Tranquility", "Battle Hymn", "Sonic Burst", "Hymn of Power", "Lullaby of Sleep", "Musical Shield", "Soundwave Shock", "Note of Clarity", "Inspiration Aura"],
    "Pirate": ["Total Immunity", "Swordplay", "Navigation", "Pistol Mastery", "Rum Drinking", "Sea Tactics", "Ship Management", "Plundering", "Treasure Hunting", "Cannon Operation", "Sea Combat", "Boarding Mastery", "Anchor Toss", "Sea Legs", "Whirlwind Slash", "Jolly Roger Spirit", "Oceanic Maneuvering", "Sail Mastery", "Rope Swing", "Pirate's Code", "Storm Riding"],
    "Priest": ["Total Immunity", "Holy Prayer", "Purify", "Healing Light", "Divine Intervention", "Blessing of Protection", "Resurrection", "Smite", "Holy Aura", "Faith Shield", "Prayer of Hope", "Restoration", "Spiritual Guidance", "Divine Judgment", "Miracle Healing", "Aura of Devotion", "Sermon of Light", "Benediction", "Martyrdom", "Prayer of Salvation", "Divine Grace"],
    "Alchemist": ["Total Immunity", "Potion Crafting", "Transmutation", "Herb Knowledge", "Elemental Infusion", "Elixir Mastery", "Alchemy Circle", "Catalyst Expertise", "Mana Elixirs", "Poison Brewing", "Stone Transmutation", "Antidote Creation", "Explosive Concoctions", "Potion of Speed", "Regeneration Brew", "Flame Essence", "Alchemy Enhancement", "Mana Restoration", "Resilience Brew", "Healing Elixirs", "Elemental Fusion"],
    "Ranger": ["Total Immunity", "Bow Mastery", "Tracking", "Stealth", "Hunting", "Nature Knowledge", "Animal Companion", "Cloak of Shadows", "Precision Shot", "Silent Kill", "Trap Setting", "Camouflage", "Survival Instinct", "Arrow Mastery", "Rapid Fire", "Animal Bond", "Foraging", "Evasion", "Swift Movements", "Lethal Arrow", "Wilderness Navigation"],
    "Samurai": ["Total Immunity", "Katana Mastery", "Bushido Code", "Quick Draw", "Parry", "Iaijutsu", "Sword Stance", "Focused Strike", "Spiritual Resolve", "Deflect Arrows", "Blade of Honor", "Perfect Focus", "Kiai", "Dual Katana", "Swift Blade", "Martial Spirit", "Battle Discipline", "Zen Meditation", "Blade Fury", "Warrior's Patience", "Sacred Oath"],
    "Monk": ["Total Immunity", "Chi Mastery", "Meditation", "Palm Strike", "Iron Fist", "Serene Mind", "Tiger Claw", "Pressure Point", "Swift Movement", "Chi Shield", "Inner Strength", "Spiritual Awareness", "Energy Channeling", "Keen Reflexes", "Healing Meditation", "Chi Burst", "Mystic Harmony", "Whirling Kick", "Fist of Fury", "Evasion", "Focused Breathing"],
    "Vampire Lord": ["Total Immunity", "Blood Drain", "Bat Transformation", "Night Vision", "Immortal Presence", "Vampiric Aura", "Shadow Strike", "Dark Seduction", "Blood Pact", "Mist Form", "Blood Frenzy", "Summon Bats", "Night Stalker", "Immortal Regeneration", "Crimson Fury", "Charm of the Undead", "Blood Ritual", "Shadow Dash", "Nightwalker", "Hypnotic Gaze", "Vampire's Thrall"],
    "Warlock": ["Total Immunity", "Curse of Agony", "Shadow Bolt", "Soul Harvest", "Summon Demon", "Dark Pact", "Fear", "Doom Bolt", "Life Drain", "Demonic Power", "Soulstone", "Curse of Weakness", "Hellfire", "Shadow Grasp", "Summon Imp", "Corruption", "Fel Flame", "Demonic Circle", "Nether Bind", "Chaos Bolt", "Unstable Affliction"],
    "Sorcerer": ["Total Immunity", "Arcane Mastery", "Fireball", "Lightning Bolt", "Ice Spear", "Teleportation", "Mana Shield", "Spell Casting", "Elemental Fury", "Meteor Strike", "Summon Familiar", "Mana Drain", "Frost Nova", "Arcane Blast", "Conjure Elemental", "Chain Lightning", "Firestorm", "Mystic Shield", "Mana Surge", "Time Warp", "Arcane Torrent"],
    "Summoner": ["Total Immunity", "Summon Beast", "Arcane Summoning", "Summon Elemental", "Summon Golem", "Mana Channeling", "Familiar Mastery", "Summon Phoenix", "Spirit Bond", "Summon Doppelganger", "Ethereal Binding", "Summon Undead", "Mana Surge", "Summon Hydra", "Soul Link", "Summon Titan", "Elemental Convergence", "Arcane Familiar", "Conjure Guardian", "Planar Rift", "Summon Chimera"],
    "Witch Hunter": ["Total Immunity", "Dark Detection", "Purifying Flame", "Holy Shot", "Hunter's Mark", "Silver Bullets", "Dark Magic Nullification", "Curse Breaking", "Demonbane", "Vampire Slayer", "Purity of Will", "Mystic Ward", "Crossbow Mastery", "Exorcism", "Hunter’s Reflexes", "Witch’s Bane", "Trap Mastery", "Evil Scent", "Divine Smite", "Shadow Purge", "True Sight"],
    "Psychic": ["Total Immunity", "Mind Control", "Telepathy", "Psychic Blast", "Mental Shield", "Mind Crush", "Telekinesis", "Precognitive Reflex", "Psionic Storm", "Empathic Link", "Psychic Scream", "Astral Projection", "Mind Fortress", "Psychic Wave", "Mental Assault", "Thought Probe", "Willpower Boost", "Mind Push", "Psionic Reflection", "Psychic Drain", "Psi Barrage"],
    "Dark Knight": ["Total Immunity", "Shadow Strike", "Death Blade", "Dark Aura", "Nightmare Slash", "Soul Corruption", "Void Edge", "Unholy Strength", "Vampiric Touch", "Fell Cleave", "Shadow Barrier", "Blackened Blade", "Dark Shield", "Abyssal Wrath", "Soul Drain", "Grim Resolve", "Spectral Slash", "Voidwalker", "Dread Charge", "Cursed Armor", "Siphon Life"],
    "Scout": ["Total Immunity", "Keen Eye", "Ambush", "Tracking", "Silent Step", "Sniper Shot", "Camouflage", "Hawk’s Vision", "Quick Shot", "Evasion", "Trap Mastery", "Trailblazer", "Agility Boost", "Escape Artist", "Deadly Aim", "Stealth Tactics", "Bow Mastery", "Terrain Mastery", "Survivalist", "Vantage Point", "Reconnaissance"],
    "Lancer": ["Total Immunity", "Spear Mastery", "Shield Bash", "Charging Thrust", "Lunging Strike", "Deflect", "Piercing Blow", "Phalanx Formation", "Shield Wall", "Counter Thrust", "Skewer", "Javelin Throw", "Polearm Precision", "Battle Roar", "Shield Charge", "Sweeping Strike", "Tactical Stance", "Spartan Discipline", "Storm Thrust", "Rending Spear", "Unbreakable Defense"],
    "Runesmith": ["Total Immunity", "Rune Crafting", "Weapon Inscription", "Armor Engraving", "Rune Empowerment", "Magic Infusion", "Rune of Fire", "Rune of Frost", "Rune of Protection", "Mystic Inscription", "Arcane Engravings", "Rune of Lightning", "Rune of Life", "Stone Rune", "Empowered Glyphs", "Rune Channeling", "Spirit Binding", "Rune of Destruction", "Mystic Warding", "Rune of Clarity", "Enchantment Mastery"],
    "Champion": ["Total Immunity", "Heroic Strike", "Battle Charge", "Defensive Posture", "War Cry", "Shield Bash", "Mighty Cleave", "Roar of the Champ", "Battle Endurance", "Overpower", "Critical Blow", "Tactical Defense", "Rallying Cry", "Victory Rush", "Stalwart Defense", "Unyielding Strength", "Shield Mastery", "Battlefield Domination", "Power Slam", "Warrior's Wrath"]
};
const stage = ["Married", "Divorced", "Widowed", "Alone", "Engaged"];
const ranks = ["F", "E", "D", "C", "B", "A", "S", "SS", "SSS"];
const guilds = ["PSHT", "RHODES", "Silverthorn", "Dragonshade", "Shadowspire", "El Gasing", "Mariners"];
const titles = {
    "Knight": ["Champion of Light", "Guardian of the Realm", "Master of Arms", "Sword Guardian", "Defender of the Weak", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Mage": ["Master of Elements", "Arcane Scholar", "Stormcaller", "Elemental Weaver", "Mystic of the Arcane", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Rogue": ["Adept of Shadows", "Silent Blade", "Shadow Stalker", "Master Thief", "Cloaked Avenger", "Anomaly", "Noob"],
    "Archer": ["Eagle Eye", "Sharpshooter", "Bowmaster", "Hunter of the Wild", "Silent Marksman", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Paladin": ["Divine Protector", "Lightbringer", "Holy Crusader", "Guardian of the Faith", "Shield of Light", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Blacksmith": ["Master Blacksmith", "Forge Master", "Hammer of the Forge", "Steel Crafter", "Anvil Guardian", "Anomaly", "Noob"],
    "Healer": ["Grand Healer", "Life Restorer", "Saint of Light", "Divine Medic", "Reviver of Souls", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Assassin": ["Master Assassin", "Death's Whisper", "Silent Executioner", "Shadow's Edge", "Night Hunter", "Anomaly", "Noob"],
    "Saint": ["Blessed Savior", "Eternal Light", "Divine Speaker", "Holy Guardian", "Radiant Saint", "Anomaly", "Noob"],
    "Tamer": ["Beast Master", "Wild Whisperer", "Rider of Beasts", "Nature's Bond", "Animal Sovereign", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Necromancer": ["Necromancer King", "Master of the Dead", "Soul Weaver", "Lord of Shadows", "Gravecaller", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Unknown": ["Enigma", "Fate Twister", "Seeker of the Unknown", "Wielder of Chaos", "Shifter of Realms", "Anomaly", "Noob"],
    "Death Knight": ["Reaper of Souls", "Doombringer", "Knight of Death", "Grim Commander", "Bearer of Darkness", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Farmer": ["Harvest Lord", "Master of Fields", "Crop Sovereign", "Tiller of the Earth", "Lord of the Land", "Anomaly", "Noob"],
    "Demon King": ["Emperor of Flames", "Lord of Chaos", "Dark Overlord", "Hell's Ruler", "Master of Despair", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Swordman": ["Master Swordsman", "Blademaster", "Sword Sage", "Steel Tempest", "Blade Lord", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Magic Swordman": ["Arcane Blademaster", "Mystic Swordsman", "Elemental Bladesman", "Spellblade", "Mana Wielder", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Martial Artist": ["Master of Fists", "Chi Guardian", "Iron Fist", "Dragon Warrior", "Martial Master", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Trader": ["Master Merchant", "Goldfinger", "Wealth Accumulator", "Lord of Trade", "Market King", "Anomaly", "Noob"],
    "Archmage": ["Archmage Supreme", "Master of Magic", "Eternal Scholar", "Cosmic Magus", "Arcane Sovereign", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Slave": ["Survivor", "Endurer of Chains", "Liberated Soul", "Unseen Warrior", "Silent Strength", "Anomaly", "Noob"],
    "Chef": ["Ultimate Chef", "Gourmet King", "Master of Flavors", "Grand Cook", "Sovereign of Taste", "Anomaly", "Noob"],
    "Rifleman": ["Deadshot", "Precision Shooter", "Pistol Specialist", "Rifle Expert", "Marine for Life", "Black Baron", "Anomaly", "Noob", "Great War Winner", "Great War Loser"],
    "Sapper": ["Bomb Defuser", "Field Repair Specialist", "Handyman", "Master of Engineering", "Nutcracker", "Anomaly", "Noob", "Codebreaker", "Great War Winner", "Great War Loser"],
    "Berserker": ["Rage of the Battlefield", "Warrior of Fury", "Bloodthirsty Destroyer", "Wielder of Wrath", "Fury Unleashed", "Madman of Battle", "Bringer of Carnage", "The Frenzied", "Wrathbringer", "Destroyer of Foes"],
    "Bard": ["Songweaver", "Master of Melody", "Minstrel of Legends", "Keeper of Tales", "Harmonious Singer", "Traveler's Song", "Poet of Ages", "Muse of the Realm", "Melody Maker", "Voice of the Ages"],
    "Pirate": ["Captain of the Seas", "Sea Rover", "Lord of the Ocean", "Buccaneer King", "Ruler of the Waves", "Master of the High Seas", "Ocean Raider", "Corsair Champion", "Scourge of the Waters", "Seafaring Marauder"],
    "Priest": ["Blessed Cleric", "Voice of the Divine", "Keeper of Faith", "Holy Shepherd", "Bearer of Grace", "Soul Keeper", "Divine Intercessor", "Servant of the Light", "Harbinger of the Sacred", "Guardian of the Faithful"],
    "Alchemist": ["Master of Transmutation", "Potion Master", "Crafter of Elixirs", "Herbalist of the Realms", "Arcane Chemist", "Wielder of Elements", "Mixer of Potions", "Catalyst of Change", "Enchanter of Potions", "Alchemical Sage"],
    "Ranger": ["Warden of the Wilds", "Guardian of Nature", "Tracker of Beasts", "Forest Wanderer", "Nature’s Protector", "Hunter of the Wild", "Beast Seeker", "Woodsman of the Realm", "Pathfinder", "Wilds Keeper"],
    "Samurai": ["Warrior of Honor", "Master of the Katana", "Bushido Blade", "Sword of Honor", "Lord of the Katana", "Disciple of Bushido", "Master of the Sword", "Ronin of Valor", "Keeper of the Code", "Blade of Honor"],
    "Monk": ["Disciple of Peace", "Master of Tranquility", "Fist of the Ancients", "Silent Guardian", "Wanderer of Virtue", "Keeper of Balance", "Mystic Warrior", "Guardian of Serenity", "Devout of the Spirit", "Master of Harmony"],
    "Vampire Lord": ["Dark Blood King", "Lord of Night", "Sovereign of Shadows", "Ruler of the Undead", "Master of Vampires", "Night Stalker", "Bloodthirsty Monarch", "Shadow Emperor", "Darkblood Ruler", "Wraith of the Night"],
    "Warrior": ["Warlord of Valor", "Master of Combat", "Champion of War", "Warblade", "Shieldbearer", "Warbringer", "Sword of Victory", "Warrior of Legends", "Battle-Hardened Hero", "Lord of the Battlefield"],
    "Templar": ["Holy Crusader", "Sword of the Divine", "Shield of Righteousness", "Champion of Faith", "Knight of the Cross", "Protector of the Holy", "Defender of the Light", "Warrior of the Sacred", "Guardian of the Faith", "Sword of Virtue"],
    "Gladiator": ["Champion of the Arena", "Master of the Colosseum", "Pit Fighter", "Warlord of the Sands", "Blood Champion", "Arena Warrior", "Battle-Hardened Fighter", "Lord of the Pit", "Sword of the Arena", "Colosseum Victor"],
    "Summoner": ["Caller of Beasts", "Master of Summons", "Wielder of Creatures", "Invoker of Allies", "Summoner of Realms", "Creature Caller", "Beast Conjuror", "Spirit Summoner", "Master of Conjurations", "Herald of Creatures"],
    "Witch Hunter": ["Hunter of Witches", "Bane of Sorcery", "Protector of Innocents", "Cleansing Flame", "Purger of Darkness", "Slayer of Magic", "Witchbane", "Champion of Light", "Shadow Purger", "Light's Retribution"],
    "Sage": ["Master of Wisdom", "Keeper of Ancient Knowledge", "Seeker of Enlightenment", "Wise One", "Bearer of the Truth", "Mystic of the Ages", "Sage of the Realms", "Enlightened Master", "Wisdom Keeper", "Elder of the Realms"],
    "Psychic": ["Mindbender", "Telepath of Power", "Wielder of the Mind", "Master of Thought", "Seer of Minds", "Psychic Conjuror", "Mindwalker", "Telekinetic Master", "Keeper of Thoughts", "Mentalist Sage"],
    "Dark Knight": ["Knight of Shadows", "Bearer of Darkness", "Ruler of Night", "Wielder of the Void", "Shadowbringer", "Champion of Despair", "Harbinger of Night", "Darkblade", "Knight of the Abyss", "Warlord of the Void"],
    "Inquisitor": ["Seeker of Truth", "Hunter of Heretics", "Purger of Sins", "Judge of the Damned", "Cleansing Light", "Heretic Slayer", "Wielder of Righteousness", "Judge of the Faithless", "Sword of the Inquisition", "Righteous Flame"],
    "Scout": ["Pathfinder of the Wild", "Master Tracker", "Seeker of Secrets", "Ranger of the Unknown", "Warden of the Wilds", "Lightfoot", "Silent Watcher", "Tracker of Beasts", "Explorer of Realms", "Wilderness Wanderer"],
    "Lancer": ["Spear Wielder", "Master of the Lance", "Knight of the Spear", "Piercer of Shields", "Spear of the Skies", "Spear Champion", "Knight of the Lance", "Lancebearer", "Wielder of the Spear", "Lancer of Legends"],
    "Runesmith": ["Master of Runes", "Carver of Magic", "Wielder of Ancient Symbols", "Runewright", "Smith of Power", "Crafter of Enchantment", "Runescribe", "Bearer of Magical Symbols", "Runeforge Master", "Lord of the Runes"],
    "Champion": ["Hero of the People", "Guardian of the Realm", "Sword of Victory", "Master of the Arena", "Warlord of Glory", "Victor of the Colosseum", "Lord of Triumph", "Conqueror of Realms", "Battle Champion", "Champion of Legends"]
};
const roleWeapon = {
    "Knight": ["Heavy Sword", "Short Sword", "Sword and Shield", "Spear", "Club", "Bat"],
    "Mage": ["Staff of Water", "Staff of Earth", "Staff of Fire", "Staff of Darkness", "Metal Staff", "Magic Book"],
    "Rogue": ["Daggers", "Short Sword", "Switchblade", "Club", "Cleaver", "Silenced Pistol"],
    "Archer": ["Longbow", "Quick-fire Bow", "Elemental Bow", "Crossbow"],
    "Paladin": ["Heavy Sword", "Short Sword", "Sword and Shield"],
    "Blacksmith": ["Hammer", "Anvil", "Pickaxe", "Shovel", "Axe"],
    "Healer": ["Staff of Cleanse", "Staff of Healing", "Staff of Regeneration", "Book of Healing"],
    "Assasin": ["Katana", "Wakizashi", "Shuriken", "Daggers", "Sickle"],
    "Saint": ["Unknown"],
    "Tamer": ["Bear", "Crocodile", "Dinosaur", "Elephant", "Tiger", "Leopard"],
    "Necromancer": ["Staff of Darkness", "Staff of Skull", "Femur", "Bone Staff", "Book of the Undead"],
    "Unknown": ["Unknown"],
    "Death Knight": ["Reaper", "Undead Heavy Sword", "Short Sword of Death", "Sword and Shield", "Spear", "Club", "Bat"],
    "Farmer": ["Sickles", "Pitchforks", "Sticks", "Stone", "Bat"],
    "Demon King": ["Unknown"],
    "Swordman": ["Heavy Sword", "Short Sword", "Daggers", "Katana", "Wakizashi", "Cleaver"],
    "Magic Swordman": ["Magic-induced Heavy Sword", "Magic-induced Short Sword", "Magic-induced Daggers", "Magic-induced Katana", "Magic-induced Wakizashi", "Magic-induced Cleaver"],
    "Martial Artist" :["Barehand", "Nunchucks", "Fighting Gloves"],
    "Trader": ["None"],
    "Archmage": ["Staff of Water", "Staff of Earth", "Staff of Fire", "Staff of Darkness", "Metal Staff", "Magic Book", "Staff of Darkness", "Staff of Skull", "Femur", "Bone Staff", "Book of the Undead"],
    "Slave": ["None"],
    "Chef": ["Cleaver", "Axe", "Spatula", "Saucepan", "Wok", "Pot", "Kettle", "Rolling Pin", "Knife"],
    "Rifleman": ["Pistol", "Revolver", "Submachine Gun", "Shotgun", "Assault Rifle", "Light Machine Gun", "Heavy Machine Gun", "Sniper Rifle"],
    "Sapper": ["C4 Pack", "Grenade", "GP Machine Gun", "RPG", "Mortar Launcher", "Grenade Launcher", "Panzerfaust", "Pistol", "Revolver", "Flamethrower"],
    "Vampire": ["Fangs", "Claws"],
    "Berserker": ["Two-Handed Sword", "Battle Axe", "Heavy Sword", "Spear and Shield", "Zweihander", "Mjolnir Hammer"],
    "Bard": ["None"],
    "Pirate": ["Flintlock Pistol", "Quickslash Sword", "Cannon", "Hook"],
    "Priest": ["None"],
    "Alchemist": ["None"],
    "Ranger": ["Longbow", "Quick-fire Bow", "Elemental Bow", "Crossbow", "Daggers", "Short Sword", "Submachine Gun", "Revolver", "Pistol"],
    "Samurai": ["Bajō-zutsu", "Bo-hiya", "Daishō", "Tanegashima", "Wakizashi", "Shuriken"],
    "Monk": ["Fists"],
    "Vampire Lord": ["Fangs", "Claws"]
};
function getRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}
var totalscore = 0;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function submitName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        const race = getRandomElement(races);

        let role;
        const randomChance = Math.random() * 100;

        if (randomChance < 1) {
            role = "Demon King";
        } else if (randomChance > 98) {
            role = "Saint";
        } else {
            do {
                role = getRandomElement(roles);
            } while (
                (["Demon", "Sarkaz", "Orc"].includes(race) && ["Healer", "Paladin", "Saint"].includes(role)) ||
                (role === "Blacksmith" && race !== "Dwarf") ||
                ["Demon King", "Saint"].includes(role) || ((role == "Rifleman" || role == "Sapper") && (race == "Beast" || race == "Succubus" || race == "Dwarf" || race == "Feline" || race == "Slime" || race == "Deer"))
            );
        }


        document.getElementById("inputForm").style.display = "none";

        const strength = getRandomNumber(1, 100);
        const health = getRandomNumber(25, 100);
        const mana = getRandomNumber(1, 100);
        const agi = getRandomNumber(1, 100);
        const lev = getRandomNumber(1, 100);
        const guild = getRandomElement(guilds);
        const region = getRandomElement(regions);
        const characterSkills = [];
        const numberOfSkills = getRandomNumber(3, 5);
        const age = getRandomNumber(22, 60);
        const situation = getRandomElement(stage);
        const skillList = document.getElementById("charSkill");
        let ra = "";

        //Band score for ability and title
        const F_score = 1;
        const E_score = 5;
        const D_score = 10;
        const C_score = 25;
        const B_score = 50;
        const A_score = 150;
        const S_score = 300;
        const SS_score = 500;
        const SSS_score = 1000;
        //End of band score

        //Total band score for overall ranking
        const F_overall = 10;
        const E_overall = 50;
        const D_overall = 100;
        const C_overall = 300;
        const B_overall = 700
        const A_overall = 1250;
        const S_overall = 2000;
        const SS_overall = 3000;
        const SSS_overall = 4500;
        //End of total band score

        skillList.innerHTML = "";
        const availableSkill = roleSkills[role];
        
        for (let i = 0; i < numberOfSkills; i++) {
            var skill = getRandomElement(availableSkill);
            var rank = getRandomElement(ranks);
            var ImmunityChance = Math.random() * 1000;
            if(ImmunityChance == 1000){
                skill = "Total Immunity"
                rank = "SSS";
                totalscore = totalscore + SSS_score;
            }
            else{
                do{
                    skill = getRandomElement(availableSkill);
                }
                while(skill == "Total Immunity");
                if(rank == "F"){
                    totalscore = totalscore + F_score;
                }
                else if(rank == "E"){
                    totalscore = totalscore + E_score;
                }
                else if(rank == "D"){
                    totalscore = totalscore + D_score;
                }
                else if(rank == "C"){
                    totalscore = totalscore + C_score;
                }
                else if(rank == "B"){
                    totalscore = totalscore + B_score;
                }
                else if(rank == "A"){
                }
                else if(rank == "S"){
                    totalscore = totalscore + S_score;
                }
                else if(rank == "SS"){
                    totalscore = totalscore + SS_score;
                }
                else{
                    totalscore = totalscore + SSS_score;
                }
            }
            if (!characterSkills.includes(skill)) {
                //characterSkills.push(`${skill} (Rank ${rank})`);
                characterSkills.push({
                    skill: skill,
                    rank: rank
                })
            }
            const listItem = document.createElement("li");
            listItem.textContent = `${skill} (${rank})`;
            skillList.appendChild(listItem);
        }
        const titlesCount = getRandomNumber(1, 2);
        const titleList = document.getElementById("charTitle");
        titleList.innerHTML = "";

        const availableTitles = titles[role];


        for (let i = 0; i < titlesCount; i++) {
            var NoobChances = getRandomNumber(0, 100);
            var GreatWar = getRandomNumber(0, 1000);
            var title = getRandomElement(availableTitles);
            var titleRank = getRandomElement(ranks);
            if (GreatWar == 1000) {
                title = "Great War Loser";
            } else if (GreatWar == 0) {
                title = "Great War Winner";
            }
            if(NoobChances == 50){
                title = "Noob"
            }
            if(title == "Black Baron" || title == "Great War Winner"){
                titleRank = "SSS";
                totalscore = totalscore + SSS_score;
            }
            else if(title == "Great War Loser" || title == "Noob"){
                titleRank = "F";
                totalscore = totalscore + F_score
            }
            else{
                if(titleRank == "F"){
                    totalscore = totalscore + F_score;
                }
                else if(titleRank == "E"){
                    totalscore = totalscore + E_score;
                }
                else if(titleRank == "D"){
                    totalscore = totalscore + D_score;
                }
                else if(titleRank == "C"){
                    totalscore = totalscore + C_score;
                }
                else if(titleRank == "B"){
                    totalscore = totalscore + B_score;
                }
                else if(titleRank == "A"){
                    totalscore = totalscore + A_score;
                }
                else if(titleRank == "S"){
                    totalscore = totalscore + S_score;
                }
                else if(titleRank == "SS"){
                    totalscore = totalscore + SS_score;
                }
                else{
                    totalscore = totalscore + SSS_score
                }
            }
            const listItem = document.createElement("li");
            listItem.textContent = `${title} (${titleRank})`;
            titleList.appendChild(listItem);
        }

        const availableWeapons = roleWeapon[role];
        const characterWeapon = [];
        const WeaponNumber = 1;

        for (let i = 0; i <WeaponNumber; i++){
            const weapon = getRandomElement(availableWeapons);
            const rank = getRandomElement(ranks);
            if(weapon == "None"){
                characterWeapon.push(`${weapon}`)
            }
            else{
                if(rank == "F"){
                    totalscore = totalscore + F_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "E"){
                    totalscore = totalscore + E_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "D"){
                    totalscore = totalscore + D_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "C"){
                    totalscore = totalscore + C_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "B"){
                    totalscore = totalscore + B_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "A"){
                    totalscore = totalscore + A_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "S"){
                    totalscore = totalscore + S_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else if(rank == "SS"){
                    totalscore = totalscore + SS_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
                else{
                    totalscore = totalscore + SSS_score;
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (${rank})`);
                    }
                }
            }
        }
        if(totalscore < F_overall){
            ra = "N/A";
        }
        else if (totalscore >= F_overall && totalscore < E_overall){
            ra = "F";
        }
        else if(totalscore >= E_overall && totalscore < D_overall){
            ra = "E";
        }
        else if(totalscore >= D_overall && totalscore < C_overall){
            ra = "D";
        }
        else if(totalscore >= C_overall && totalscore < B_overall){
            ra = "C";
        }
        else if(totalscore >= B_overall && totalscore < A_overall){
            ra = "B";
        }
        else if(totalscore >= A_overall && totalscore < S_overall){
            ra = "A";
        }
        else if(totalscore >= S_overall && totalscore < SS_overall){
            ra = "S";
        }
        else if(totalscore >= SS_overall && totalscore < SSS_overall){
            ra = "SS";
        }
        else{
            ra = "SSS"
        }
        totalscore = totalscore + lev*5;
        document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = agi;
        document.getElementById("charLev").textContent = lev;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charMana").textContent = mana;
        document.getElementById("charRank").textContent = ra;
        document.getElementById("charGuild").textContent = guild;
        document.getElementById("charRegion").textContent = region;
        document.getElementById("charAge").textContent = age;
        document.getElementById("charStatus").textContent = situation;
        document.getElementById("charWeapon").textContent = characterWeapon;

        if (["Healer", "Paladin", "Saint"].includes(role)) {
            const divinePower = getRandomNumber(50, 100);
            document.getElementById("charDivinePower").textContent = divinePower;
            document.getElementById("divinePower").style.display = "block";
        }

        if (["Necromancer", "Unknown", "Death Knight", "Demon King"].includes(role) || race === "Demon") {
            const darkEnergy = getRandomNumber(50, 100);
            document.getElementById("charDarkEnergy").textContent = darkEnergy;
            document.getElementById("darkEnergy").style.display = "block";
        }

        document.getElementById("characterDisplay").style.display = "block";
    } else {
        alert("Please enter a name.");
    }
}