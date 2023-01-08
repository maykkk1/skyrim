const container = document.getElementById('containerRow');
const selectedRoute = JSON.parse(sessionStorage.getItem('infoRouter'));

const cities = [
    {
        name: 'whiterun',
        lore: `Whiterun is a city in central Skyrim, and will be the first major city the player arrives at when following the main quest.
        The city is split into three major districts, the Plain District, the Wind District and the Cloud District. Although many characters wander the districts, many can be found in the Plain District at some point in the day.
        `,
        shops: [
            "Arcadia's Cauldron",
            "Belathor's General Goods",
            'Whiterun Outdoor Market',
            "Warmaiden's",
            'The Bannered Mare',
            'The Drunken Huntsman'
        ],
        pointsOfInterest: [
            {
                name: 'Dragonsreach',
                text: `Dragonsreach is the keep of the city of Whiterun. Jarl Balgruuf the Greater rules the city from here. Inside Farengar Secret-Fire's study you can find a copy of Lost Legends that will trigger the quest Forbidden Legend.`
            },
            {
                name: 'Jorrvaskr',
                text: `Home to The Companions, Jorrvaskr is the reason for Whiterun's existence. The mead-hall was built adjacent to the Skyforge and Whiterun is said to have been built around it. Although Jorrvaskr is no longer the legendary spot it once was, it is still filled with people and quests through The Companions.`
            },
            {
                name: 'Breezehome',
                text: `Whiterun features a house named Breezehome that the player can purchase for 5000 Gold after becoming Thane by finishing Dragon Rising. Seek out Preventus Avenicci, the Jarl's steward to purchase the home. To find out more, visit the Breezehome page.`
            }
        ],
        imgUrl: '../../images/cities/whiterun.webp'
    },
    {
        name: 'windhelm',
        lore: `Windhelm is a major city in Skyrim and the center of the Stormcloak rebellion against the Imperial Army. Historically, it was the capital of the First Empire of Tamriel, forged by the legendary Nord hero Ysgramor. Ysgramor's Palace of the Kings still stands at the city's heart.

        The city is divided into four quarters, one of which (The Grey Quarter) is a slum for the much maligned Dark Elf. The dark elves have settled in Windhelm as it was the first city they encountered when escaping the burning of Red Mountain.
        
        One thing about Windhelm is that it's full of radiant quests. From dungeon diving, bandit killing, drunk helping, brawling and rare gifts it'll be easy to rack up some loot and some gold.`,
        shops: [
            "Candlehearth Hall",
            "Calixto's House of Curiosities",
            "The White Phial, potions, ingredients",
            "New Gnisis Corner Club",
            "Sadri's Used Wares"
        ],
        pointsOfInterest: [
            {
                name: 'Hjerim',
                text: 'The house Hjerim can be purchased in Windhelm by completing certain Stormcloak quests.  The house starts at 12,000 gold.  It is a main location of the quest Blood on the Ice.'
            },
            {
                name: 'Brawl',
                text: 'Rolff Stone-Fist is a dark elf hater who will give you a chance to brawl with him for 100 gold.'
            },
            {
                name: 'New Gnisis Corner Club',
                text: 'Go upstairs (2nd level) to find the book "A Game at Dinner", which will increase your alchemy.'
            },
            {
                name: 'House of Clan Shatter-Shield',
                text: `While you may be able to walk right in here, there isn't much to do unless you're into thieving or listening to sob stories about dead daughters/sisters.

                One notable item is an "unusual gem" on a shelf in an upstairs bedroom. Beware - when you put your cursor on the gem it says "take" rather than "steal", but if you are seen taking it you will be considered a thief.
                `
            },
            {
                name: 'Hall of the Dead',
                text: `Not much going on in here, but you can receive the Blessing of Arkay in the central room. Be sure to speak to Helgrid, the caretaker, as she has an uplifting message for you. There are a few things worth stealing in the knapsack in her living quarters (just to the left at the bottom of the first set of stairs).`
            }
        ],
        imgUrl: '../../images/cities/windhelm.webp'
    },
    {
        name: 'riften',
        lore: `Riften, referred to as Rifton in earlier records,[1][2] is a city situated in the southeastern corner of The Rift, at the eastern end of Lake Honrich, with a good portion of the city actually spilling over the water atop large wooden piers. It is the southernmost and easternmost of all the cities in Skyrim. Fort Greenwall is a short distance beyond the guard towers at the northern gate. It is home to Skyrim's Thieves' Guild. and as such is a very corrupted town with people who believe themselves above the law.`,
        shops: [
            'The Bee and Barb',
            "Elgrim's Elixirs",
            "Haelga's Bunkhouse",
            "Black-Briar Manor/Black-Briar Meadery",
            'The Scorched Hammer',
            'The Ragged Flagon',
            'The Pawned Prawn'
        ],
        pointsOfInterest: [
            {
                name: 'Honeyside',
                text: `The house, Honeyside, can be purchased by speaking to the Jarl's steward. It can be purchased for 8,000 coins and is considered to be a good shelter to get early in the game as the roads to Riften from other places are usually long and filled with many dungeons, forts, and caves, which may be cleared and looted. One may store all that loot in the house in Riften and can even store your stolen goods for convenience as the fence for the Thieves' Guild can be found in The Ragged Flagon, which is in the lower levels of Riften. It can be also fully furnished, with all possible furnishings such as the Alchemy lab and so on, for a total of 4,300 coins.
                `
            },
            {
                name: 'Temple of Mara',
                text: `The Temple of Mara is where you can get the Amulet of Mara which allows you to broadcast yourself across Skyrim as an eligible man or woman. Speak to Maramal for details`
            },
            {
                name: 'Thieves Guild Headquarters',
                text: "Located in the sewers, the Thieves Guild Headquarters is a great place to fence items, train with fellow theives and visit for various Thieves' Guild Quests."
            }
        ],
        imgUrl: '../../images/cities/riften.webp'
    },
    {
        name: 'winterhold',
        lore: `Winterhold is a city located on Skyrim's Northeastern coast. It is home to the College of Winterhold, the mages guild of Skyrim. In times past Winterhold was a major port and trade hub for the province, but years ago the majority of the city sank into the sea in a mysterious cataclysm. Today, Winterhold is a shadow of its former self. Its dwindling residents speak of rumors that the College's mages somehow caused Winterhold's destruction, but the College vehemently denies such accusations. The town of Winterhold was once proud of housing the College, but now they have grown to fear the mages and their power. Winterhold was also the capital city of all of Skyrim, but is no longer holding that honor.`,
        shops: [
            "Birna's Oddments",
            "Hall of Countenance",
            "The Frozen Hearth"
        ],
        pointsOfInterest: [
            {
                name: 'College of Winterhold',
                text: `Ah the College of Winterhold, a place for magic users in Skyrim to learn and teach the arcane arts. Join to start the College of Winterhold quest line.`
            }
        ],
        imgUrl: '../../images/cities/winterhold.webp'
    },
    {
        name: 'solitude',
        lore: `Solitude is a major city in the North Western area of Skyrim. It's one of the largest cities in Skyrim and the capital of the province, where the High King of Skyrim holds his court. At the time of Skyrim's civil war it is the site of the headquarters of the Imperial Army. It is home to the Bard's College which you can join for Bard quests. Built next to the ocean allows it to be an active sea port from which you can see the giant stone arch that Solitude is built on.`,
        shops: [
            "Angeline's Aromatics",
            "Solitude Blacksmith",
            "Fletcher",
            "Radiant Raiment",
            "The Winking Skeever"
        ],
        pointsOfInterest: [
            {
                name: 'The Blue Palace',
                text: 'Jarl Elisif the Fair lives in the palace in the place of her husband. Her steward Falk Firebeard can be the source of a number of good side quests.'
            },
            {
                name: 'Proudspire Manor - How to Purchase',
                text: `The player can purchase the house Proudspire Manor in Solitude after completing a quest for the city's Jarl. It can be purchased for 25,000 gold from Falk Firebeard, the steward.`
            },
            {
                name: 'Free Steel Arrows',
                text: `Inside the Castle/Fort courtyard of Solitude you'll see Imperials Practicing archery. They're using steel arrows that once they shot the targets you can then pick up. Steel arrows are usually the first arrow type that vendors will buy from you, although only for one gold. So stick around in town for awhile and then go pick some up off the target when desired. `
            }
        ],
        imgUrl: '../../images/cities/solitude.webp'
    }
]

const races = [
    {
        name: 'breton',
        lore: `Bretons are the human descendants of the Merethic Era Aldmeri and Nedes that are now the inhabitants of the province of High Rock. Bretons feel an instinctive bond with the mercurial forces of magic and the supernatural. Many great sorcerers have come from their home province of High Rock. In addition to their quick and perceptive grasp of spellcraft, enchantment, and alchemy, all Bretons boast a resistance to spells.
        
        Bretons are fantastic at taking on other mages; both Dragonskin and Magic Resistance support this and are strong abilities even in the late game.
        
        Magic Resistance significantly increases your survivability against enemy casters, while Dragonskin is great at keeping your Magicka up; this helps you maintain the Ward spells that are your first line of defense.`,
        skill: [
            '+10 Conjuration (25)',
            '+5 Alchemy (20)',
            '+5 Alteration (20)',
            '+5 Illusion (20)',
            '+5 Restoration (20)',
            '+5 Speech (20)'
        ],
        spells: [
            'Conjure Familiar (Conjuration)',
            'Flames (Destruction)',
            'Healing (Restoration)'
        ],
        special: [
            'Dragonskin : Absorb 50% of magicka from hostile spells for 60 seconds.',
            'Magic Resistance : Breton blood grants a 25% resistance to magic. Note: In the loading screen trivia, it says the Bretons have a 50% magic resistance. 25% is the correct level.'
        ],
        imgUrl: '../../images/races/breton.webp'
    },
    {
        name: 'imperial',
        lore: `Also known as Cyrodiils, Cyrodilics, Cyro-Nordics and Imperial Cyrods, the well-educated and well-spoken Imperials are the natives of the civilized, cosmopolitan province of Cyrodiil. Imperials are also known for the discipline and training of their citizen armies, and their respect for the rule of law. Though physically less imposing than the other races, the Imperials have proved to be shrewd diplomats and traders, and these traits, along with their remarkable skill and training as light infantry, have enabled them to subdue all the other nations and races and erect the monument to peace and prosperity that comprises the Glorious Empire. Their hegemony has waxed and waned throughout the eras, and most historians refer to three distinct Empires, the ends of which each mark a new epoch in Tamrielic history.`,
        skill: [
            '+10 Restoration (25)',
            '+5 Block (20)',
            '+5 Destruction (20)',
            '+5 Enchanting (20)',
            '+5 Heavy Armor (20)',
            '+5 One-Handed (20)'
        ],
        spells: [
            'Flames (Destruction)',
            'Healing (Restoration)'
        ],
        special: [
            'Voice of the Emperor: Calms nearby humanoids for 60 seconds.',
            'Imperial Luck: Anywhere gold coins might be found, Imperials always seem to find a few more.'
        ],
        imgUrl: '../../images/races/imperial.webp'
    },
    {
        name: 'dunmer',
        lore: `he Dunmer, also known as Dark Elves, are the ash-skinned, typically red-eyed elven peoples of Morrowind. "Dark" is commonly understood as meaning such characteristics as "dark-skinned", "gloomy", "ill-favored by fate" and so on. The Dunmer and their national identity, however, embrace these various connotations with enthusiasm. In the Empire, "Dark Elf" is the common usage, but among their Aldmeri brethren they are called "Dunmer". Their combination of powerful intellects with strong and agile physiques produce superior warriors and sorcerers. On the battlefield, Dunmer are noted for their skill with a balanced integration of the sword, the bow and destruction magic. Dunmer live two to three times as long as humans; with a 200-year-old Dunmer being old and a 300-year-old Dunmer being very, very old. In character, they are grim, aloof, and reserved, as well as distrusting and disdainful of other races.

        Dunmer distrust and are treated distrustfully by other races. They are often proud, clannish, ruthless, and cruel, from an outsider's point of view, but greatly value loyalty and family. Young female Dunmer have a reputation for promiscuity in some circles. Despite their powerful skills and strengths, the Dunmer's vengeful nature, age-old conflicts, betrayals, and ill-reputation prevent them from gaining more influence. Those born in their homeland of Morrowind before its devastation were known to be considerably less friendly than those who grew up in the Imperial tradition.`,
        skill: [
            '+10 Destruction (25)',
            '+5 Alchemy (20)',
            '+5 Alteration (20)',
            '+5 Illusion (20)',
            '+5 Light Armor (20)',
            '+5 Sneak (20)'
        ],
        spells: [
            'Flames (Destruction)',
            'Sparks (Destruction)',
            'Healing (Restoration)'
        ],
        special: [
            `Ancestor's Wrath: Once per day for 60 seconds, opponents that get too close take 8 points per second of fire damage. Ancestor's Wrath can harm neutral characters such as town guards.`,
            `Resist Fire: Your Dunmer blood gives you 50% resistance to fire.`
        ], 
        imgUrl: '../../images/races/dunmer.webp'
    },
    {
        name: 'nord',
        lore: `Nords are a race that were led to Skyrim by Ysgramor. They are tall (standing at a scale of 1.03), fair-haired and pale-skinned humans from Atmora who are known for their incredible resistance to cold and even magical frost. They are enthusiastic warriors, and act as soldiers, mercenaries, merchants and blacksmiths all over Tamriel. Eager to augment their martial skills beyond the traditional methods of Skyrim, they excel in all manner of warfare. Above all else in Nord culture is the quest for honor and glory, and a great emphasis is placed on family values. They thrive in the cold, reminiscent of their native Atmora, and are known as a militant people by their neighbors. Nords are also naturally superior at sea, and have benefited from nautical trade since their first migrations across the sea from Atmora. They captain and crew the merchant fleets of many regions, and may be found all along Tamriel's coasts. They issue a battle cry to make their enemies flee for a short time. Nords comprise the majority of the Stormcloaks, as well as the majority of the population of Skyrim.`,
        skill: [
            '+10 Two-Handed (25)',
            '+5 Block (20)',
            '+5 Light Armor (20)',
            '+5 One-Handed (20)',
            '+5 Smithing (20)',
            '+5 Speech (20)'
        ],
        spells: [
            'Flames (Destruction)',
            'Healing (Restoration)'
        ],
        special: [
            `Battle Cry: Target flees for 30 seconds.`,
            `Resist Frost: Your Nord blood gives you 50% resistance to frost.`
        ],
        imgUrl: '../../images/races/nord.webp'
    },
    {
        name: 'bosmer',
        lore: `Bosmer (or, more commonly, Wood Elves) are the elven people of Valenwood. They prefer a simple existence, living in harmony with the land and wild animals. They are known to be the best archers in all of Tamriel and are known for their ability to command wild creatures. They make great scouts or thieves, due to their natural stealth and light footing.`,
        skill: [
            '+10 Archery (25)',
            '+5 Alchemy (20)',
            '+5 Light Armor (20)',
            '+5 Lockpicking (20)',
            '+5 Pickpocket (20)',
            '+5 Sneak (20)'
        ],
        spells: [
            'Flames (Destruction)',
            'Healing (Restoration)'
        ], 
        special: [
            `Command Animal: Make an animal an ally for 60 seconds.`,
            `Resist Disease and Poison: Your Bosmer blood gives you 50% resistance to poison and disease.`
        ], 
        imgUrl: '../../images/races/bosmer.webp'
    },
    {
        name: 'orc',
        lore: `The Orsimer (more commonly known as Orcs), are the native people of the Wrothgarian and Dragontail Mountains. They are possibly a variant of elves or mer. Other sources state they are beastfolk. Following in the footsteps of Trinimac, and subsequently Malacath, Orcs have consistently held a standard as a race as some of Tamriel's greatest warriors and smiths.`,
        skill: [
            '+10 Heavy Armor (25)',
            '+5 Block (20)',
            '+5 Enchanting (20)',
            '+5 One-Handed (20)',
            '+5 Smithing (20)',
            '+5 Two-Handed (20)'
        ],
        spells: [
            'Flames (Destruction)',
            'Healing (Restoration)'
        ], 
        special: [
            `Berserker Rage – Take half damage and do double damage for 60 seconds. This does not apply to damage dealt by spells; however, it does stack with other physical damage buffs. While Berserker Rage is active, the screen turns red and a little blurry while sound dulls a bit.`
        ],
        imgUrl: '../../images/races/orc.webp'
    },
    {
        name: 'redguard',
        lore: `Redguards hail from the great desert province of Hammerfell. They are descended from a long line of warriors and mystic seers. Legend has it that Redguards are innately more proficient with the use of weaponry than any other race. They excel in all arts concerning blade and shield.

        The most naturally talented warriors in Tamriel, the Redguards of Hammerfell seem born to battle. However, their pride and fierce independence of spirit makes them more suitable as scouts or skirmishers, or as free ranging heroes and adventurers, than as rank and file soldiers. In addition to their cultural affinities for many weapon and armor styles, Redguards are also blessed with hardy constitutions and fleetness of foot.`,
        skill: [
            '+10 One-Handed (25)', 
            '+5 Alteration (20)',
            '+5 Archery (20)',
            '+5 Block (20)',
            '+5 Destruction (20)',
            '+5 Smithing (20)'
        ],
        spells: [
            'Flames (Destruction)',
            'Healing (Restoration)'
        ],
        special: [
            `Adrenaline Rush: Stamina regenerates 10x faster for 60 seconds.`,
             `Resist Poison: Your Redguard blood gives you 50% resistance to poison.`
        ],
        imgUrl: '../../images/races/redguard.webp'
    },
    {
        name: 'altmer',
        lore: `The Altmer, or self-titled "Cultured People", are a tall, golden-skinned race, hailing from Summerset Isles. They are also known as High Elves by the denizens of Tamriel. In the Empire, "High" is often understood to mean proud or snobbish, and as the Altmer generally personify these characteristics, the "lesser races" generally resent them. Altmer live two to three times as long as humans; with a 200-year-old Altmer being old and a 300-year-old Altmer being very, very old. Altmer consider themselves to be the most civilized culture of Tamriel; the common tongue of the continent is based on Altmer speech and writing, and most of the Empire's arts, crafts, laws, and sciences are derived from Altmer traditions.

        The Altmer are the most strongly gifted in the arcane arts of all the races. They are among the longest living and most intelligent races of Tamriel, and they often become powerful magic users due to both their magical affinity and the many years they may devote to their studies.`,
        skill: [
            '+10 Illusion (level 25)',
            '+5 Alteration (level 20)',
            '+5 Conjuration (level 20)',
            '+5 Destruction (level 20)',
            '+5 Enchanting (level 20)',
            '+5 Restoration (level 20)'
        ],
        spells: [
            `Flames (Destruction). All races start with this particular spell.`,
            `Healing (Restoration). All races start with this particular spell.`,
            `Fury (Illusion)`
        ],
        special: [
            `Highborn: Regenerate magicka faster for 60 seconds, once a day.`,
            `Fortify Magicka: Passive increase in magicka by 50 points. If the player is a vampire and the Necromage perk is taken from the`,
            `Restoration perk tree, this will increase by 25% to 62 points.`
        ],
        imgUrl: '../../images/races/altmer.webp'
    },
    {
        name: 'argonian',
        lore: `Enigmatic and intelligent, the Argonians are experts at guerrilla warfare, and their natural abilities suit their swampy homeland, Black Marsh. They have developed immunities to the diseases that have doomed many would-be explorers in the region, and they are capable of easily exploring underwater locations due to their ability to breathe underwater. Argonians make proficient thieves, due to their increased lockpicking and sneaking skills.`,
        skill: [
            '+10 Lockpicking (level 25)',
            '+5 Light Armor (level 20)',
            '+5 Alteration (level 20)',
            '+5 Pickpocket (level 20)',
            '+5 Restoration (level 20)',
            '+5 Sneak (level 20)'
        ],
        spells: [
            `Flames (Destruction)`,
            `Healing (Restoration)`
        ],
        special: [
            `Histskin: Invoke the power of the Hist to recover health ten times faster for 60 seconds. Can only be used once per day.`,
            `Resist Disease: Your Argonian blood is 50% resistant to disease.`,
            `Waterbreathing: Your Argonian Lungs can breathe underwater.`
        ],
        imgUrl: '../../images/races/argonian.webp'
    },
    {
        name: 'khajiit',
        lore: `The Khajiit are a playable race present in The Elder Scrolls V: Skyrim. Khajiit are one of the beast races which inhabit the continent of Tamriel, primarily their home province of Elsweyr. The Khajiit have feline appearance and sly accent common to Cathay, however their type is not specified. Along with the Argonians, they are referred to as the beast-races of Skyrim. Because of this, Khajiit have a negative public image. They are the rarest race encountered in Skyrim, most commonly found only in caravans.`,
        skill: [
            '+10 Sneak (level 25)',
            '+5 Pickpocket (level 20)',
            '+5 One-Handed (level 20)',
            '+5 Lockpicking (level 20)',
            '+5 Archery (level 20)',
            '+5 Alchemy (level 20)'
        ],
        spells: [
            `Flames (Destruction) – All races have this starting spell.`,
            `Healing (Restoration) – All races have this starting spell.`
        ],
        special: [
            `Night Eye – See in the dark for 60 seconds for an unlimited number of times per day.`,
            `Claws – Unarmed attacks do 12 points of damage.[note 1] The race base unarmed damage is set to 10, as opposed to 4 for most other races, which means their unarmed attacks actually do 22 damage in total, more than the base damage of any one-handed weapon and identical to the Ebony Greatsword.`
        ],
        imgUrl: '../../images/races/khajiit.webp'
    }
]

const factions = [
    {
        name: 'dark brotherhood',
        lore: `The Dark Brotherhood is a guild of professional assassins which historically possessed considerable influence and power but has recently fallen on considerably harder times. It is similar to Morrowind's Morag Tong, but despite a common misconception, it is a completely separate organization; also, the legality of this organization is much more limited than that of its older cousin. The leader of the Dark Brotherhood was the Night Mother, but now that role has fallen to Astrid. The Dark Brotherhood also has a contact in the Riften Thieves Guild. In Skyrim, you can choose to either join the Dark Brotherhood and take on assassinations for hire, or destroy the Brotherhood's last remaining chapter.`,
        history: `The Dark Brotherhood has been struggling for survival ever since the end of the Third Era. Due to the events of The Elder Scrolls IV: Oblivion, the Dark Brotherhood in Cyrodiil was crippled. They managed to survive until the Great War, when, one after another, each Brotherhood Sanctuary was destroyed. By the end of the war, the Brotherhood was near total destruction once again. Cicero, one of two remaining Dark Brotherhood assassins outside of Skyrim (the other believed to be a deserter), took the Night Mother's corpse from Bravil to the last remaining Dark Brotherhood Sanctuary. In The Elder Scrolls V: Skyrim, the Dark Brotherhood has no listener to hear the Night Mother and thus hears about The Black Sacrament through rumors. This type of life for the Brotherhood continues until the Dragonborn joins them. 
        Any man or woman may join the Dark Brotherhood. Initiates must display the ability to kill mercilessly, without regret or sorrow. As a result, their ranks include vampires, werewolves, bandits, and mages.
        `,
        imgUrl: '../../images/factions/darkbrotherhood.webp'
    },
    {
        name: 'thieves guild',
        lore: `The Thieves Guild is dedicated to the gathering and training of those who are stealthy and shadowy in nature. Although criminal by its very definition, for untold years, local authorities in places throughout Tamriel have tolerated the existence of the guild for its role as "crime regulator", as it does not tolerate competition or egregious conduct from its members (not to mention the personal financial benefits for authorities who play nice). It is usually considered to be a distinctly Imperial entity, though of course other organizations of the Empire do not officially condone their actions.
        Like any trade guild, the Thieves Guild is an organization of professionals, except that in this case the professionals are burglars, robbers, pickpockets, smugglers and other enterprising operators. They typically don't have public guild halls but sometimes have safe-houses and members tend to gather at a single location in large towns, such as at a cornerclub, inn or tavern. Typically, members are bound not to rob each other, kill anyone while thieving or rob the poor. The Thieves Guild usually has the resources to bribe officials, establish a black market of stolen goods and maintain a network of informants.`,
        history: `Little is known about when and how the Thieves Guild of Skyrim was founded, but it is rumored to have been around as long as Riften has.[1] As the Fourth Era continued, the Thieves Guild slipped further and further into obscurity and the members and regular clients began to leave (with the exception of Maven Black-Briar).[1][2][3][4][5]

        The guild was previously believed to be completely fictional; in Oblivion, if asked about the guild, guards would simply state that there was no such thing. However, the Thieves Guild has become well known and, in fact, well renowned for their thievery and exploitation.[6]
        
        The guild has some close association with the Dark Brotherhood which becomes apparent in "The Silence Has Been Broken" quest for the Dark Brotherhood, in which the Dragonborn must bring an amulet given by Amaund Motierre to Delvin Mallory, a member of the Thieves Guild, to be revised on its value to cover payment of Motierre's several contracts that culminate in the murder of Emperor Titus Mede II.`,
        imgUrl: '../../images/factions/thieves.webp'
    },
    {
        name: 'companions',
        lore: `The Companions are the warriors guild of Skyrim. It serves a similar function to the Fighters Guild chapters of other regions of Tamriel. Eorlund Gray-Mane, a blacksmith in Whiterun, states that they have been leaderless since Ysgramor. He says that an elder known as Kodlak Whitemane acts as the Harbinger (counselor). The fact that they have no official leader is emphasized by their name.

        If Torvar is asked, "Who's in charge around here?" before joining, he will reply, "In charge of what? I'm in charge of me, and you're in charge of you."
        
        Jorrvaskr, the mead hall where the Companions live and operate, is the oldest building in Whiterun.`,
        history: `The Companions can trace their origins from the Five Hundred Companions which the legendary army Ysgramor raised to wage war against the snow elves and avenge the Night of Tears. After defeating the snow elves in the Nordic-Falmer War, the remnants of the Five Hundred Companions went their separate ways to inhabit the unexplored lands of Tamriel. This period of exploration and colonization is known as The Return.

        Several hundred years after the death of Ysgramor, the Companions had converted into soldiers for hire. Their services could be purchased for the fighting of wars, but the commitment to individual honor meant that often Shield-Brothers would be forced to face each other on the field of battle. Since the conflict of interests between its members was jeopardizing their bonds of honor, Harbinger Mryfwiil, in his wisdom, decreed that they would no longer be party to any war or political conflict of any kind. Because of his steady hand, the Companions today are known as impartial arbiters of honor, in addition to their glories on the field of battle.
        
        By the end of the First Era, the Companions have begun to do away with rigid rules of Atmoran racial purity and recruited people of different races and walks of life to fill their ranks. After the dark periods in the late Second Era, when a string of false and dishonorable Harbingers laid claim to Jorrvaskr, it was Kyrnil Long-Nose who gathered the true hearts of the Companions in the wilds and stormed Jorrvaskr itself, killing the usurpers and returning honor through blood, in the old ways. He began the tradition of trusted advisors called the Circle (named after Ysgramor's council of captains) who would serve as examples to the younger, newer Companions.[1]`,
        imgUrl: `../../images/factions/companions.webp`
    },
    {
        name: 'college of winterhold',
        lore: `The College of Winterhold is a guild of mages centered in Skyrim. It is a faction of magic-users similar to the Mages Guild of Cyrodiil and Morrowind. When the Dragonborn appears, the current Arch-Mage is Savos Aren, with Mirabelle Ervine serving as the Master Wizard. During the faction's main quest, Tolfdir replaces her as Master Wizard. The College is located in the northern section of the city of Winterhold, in northern Skyrim. Instructors of each magical discipline reside within, offering training and various magical wares to members.`,
        history: `Winterhold was once a great, powerful and wealthy hold,[1][2] and its relationship with the College of Winterhold was good.[3]

        In 4E 122, an unprecedented, cataclysmic event struck Winterhold and most of the areas along the coastline. A massive storm came in from the Sea of Ghosts, which brought huge waves which crashed into Winterhold. Most of the city fell into the sea, leaving the city in ruins both physically in terms of the destruction of the city itself, and the emotional and psychological damage to Winterhold's people. This event would eventually be referred to as "The Great Collapse." The disaster left Winterhold in ruins, and some had said that things would never be the same again, including Winterhold's relationship with the College. The people of Winterhold would eventually begin to blame the College for causing the Great Collapse. Winterhold has yet to recover from the Great Collapse.`,
        imgUrl: '../../images/factions/college.webp'
    }
]

const render = () => {
    if(selectedRoute.type == 'city') return renderCity(selectedRoute.name);
    if(selectedRoute.type == 'race') return renderRace(selectedRoute.name);
    if(selectedRoute.type == 'faction') return renderFaction(selectedRoute.name);
}

const renderFaction = (factionName) => {
    const faction = factions.find(f => f.name == factionName);
    container.innerHTML = "";
    const article = document.createElement('article');
    article.classList.add('col-lg-7');
    article.classList.add('col-md-12');
    const title = document.createElement('h2');
    title.innerHTML = faction.name;
    const lore = document.createElement('p');
    lore.innerHTML = faction.lore;
    article.appendChild(title);
    article.appendChild(document.createElement('hr'));
    article.appendChild(lore);
    const historyTitle = document.createElement('h3');
    historyTitle.innerHTML = 'History';
    const historyText = document.createElement('p');
    historyText.innerHTML = faction.history;
    article.appendChild(historyTitle);
    article.appendChild(document.createElement('hr'));
    article.appendChild(historyText);
    container.appendChild(article);
    const figure = document.createElement('figure');
    figure.classList.add('col-lg-5');
    const img = document.createElement('img');
    img.src = faction.imgUrl;
    figure.appendChild(img)
    container.appendChild(figure);
};

const renderRace = (raceName) => {
    const race = races.find(r => r.name == raceName);
    container.innerHTML = "";
    const article = document.createElement('article');
    article.classList.add('col-lg-7');
    article.classList.add('col-md-12');
    const title = document.createElement('h2');
    title.innerHTML = race.name;
    const lore = document.createElement('p');
    lore.innerHTML = race.lore;
    const skillsTitle = document.createElement('h3');
    skillsTitle.innerHTML = 'Skill bonuses';
    const skills = document.createElement('ul');
    race.skill.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.innerHTML = skill;
        skills.appendChild(skillItem);
    })
    const spellsTitle = document.createElement('h3');
    spellsTitle.innerHTML = 'Starting spells'
    const spells = document.createElement('ul');
    race.spells.forEach(spell => {
        const spellItem = document.createElement('li');
        spellItem.innerHTML = spell;
        spells.appendChild(spellItem);
    });
    const specialTitle = document.createElement('h3');
    specialTitle.innerHTML = 'Special abilities';
    const specials = document.createElement('ul');
    race.special.forEach(special => {
        const specialItem = document.createElement('li');
        specialItem.innerHTML = special;
        specials.appendChild(specialItem);
    });
    article.appendChild(title);
    article.appendChild(document.createElement('hr'));
    article.appendChild(lore);
    article.appendChild(document.createElement('hr'));
    article.appendChild(skillsTitle);
    article.appendChild(skills);
    article.appendChild(document.createElement('hr'));
    article.appendChild(spellsTitle);
    article.appendChild(spells);
    article.appendChild(document.createElement('hr'));
    article.appendChild(specialTitle);
    article.appendChild(specials);
    container.append(article);

    const figure = document.createElement('figure');
    figure.classList.add('col-lg-5');
    const img = document.createElement('img');
    img.src = race.imgUrl;
    figure.appendChild(img)
    container.appendChild(figure);
};


const renderCity = (cityName) => {
    const city = cities.find(c => c.name == cityName);
    container.innerHTML = "";
    const article = document.createElement('article');
    article.classList.add('col-lg-7');
    article.classList.add('col-md-12');
    const title = document.createElement('h2');
    title.innerHTML = city.name;
    const lore = document.createElement('p');
    lore.innerHTML = city.lore;
    article.appendChild(title);
    article.appendChild(document.createElement('hr'));
    article.appendChild(lore);

    const shopsInnTitle = document.createElement('h3');
    shopsInnTitle.innerHTML = 'Shops/Inns';
    shopsInn = document.createElement('ul');
    city.shops.forEach(shops => {
        const shopsInnItem = document.createElement('li');
        shopsInnItem.innerHTML = shops;
        shopsInn.appendChild(shopsInnItem);
    });
    article.appendChild(shopsInnTitle);
    article.appendChild(document.createElement('hr'));
    article.appendChild(shopsInn);

    const pointsOfInterestTitle = document.createElement('h3');
    pointsOfInterestTitle.innerHTML = 'Points of Interest';
    article.appendChild(pointsOfInterestTitle);
    article.appendChild(document.createElement('hr'));

    city.pointsOfInterest.forEach(point => {
        const title = document.createElement('h4');
        title.innerHTML = point.name;
        const text = document.createElement('p');
        text.innerHTML = point.text;
        article.appendChild(title);
        article.appendChild(text);
    });




    container.appendChild(article);

    const figure = document.createElement('figure');
    figure.classList.add('col-lg-5');
    const img = document.createElement('img');
    img.src = city.imgUrl;
    figure.appendChild(img)
    container.appendChild(figure);
};

render();