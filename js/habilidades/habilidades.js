const mageBtn = document.getElementById('mage');
const thiefBtn = document.getElementById('thief');
const warriorBtn = document.getElementById('warrior');

mageBtn.addEventListener('click', () => {
    gerarTabelas(magePerks);
    document.body.style.backgroundImage = "url('../../images/bg/themage.png')";
});

thiefBtn.addEventListener('click', () => {
    gerarTabelas(thiefPerks);
    document.body.style.backgroundImage = "url('../../images/bg/thethief.jpeg')";
});

warriorBtn.addEventListener('click', () => {
    gerarTabelas(warriorPerks);
    document.body.style.backgroundImage = "url('../../images/bg/thewarrior.jpeg')";
});

const magePerks = [
    {
        name: 'Illusion',
        perks: [
            {
                name: 'Novice Illusion', 
                requirements: 'None', 
                description: 'Cast Novice level Illusion spells for half magicka.'
            },
            {
                name: 'Illusion Dual Casting', 
                requirements: 'Illusion 20, Novice Illusion', 
                description: 'Dual casting an Illusion spell overcharges the effects into an even more powerful version.'
            },
            {
                name: 'Animage', 
                requirements: 'Illusion 20, Novice Illusion', 
                description: 'Illusion spells now work on higher level animals (+8 levels).'
            },
            {
                name: 'Apprentice Illusion', 
                requirements: 'Illusion 25, Novice Illusion', 
                description: 'Cast Apprentice level Illusion spells for half magicka.'
            },
            {
                name: 'Hypnotic Gaze', 
                requirements: 'Illusion 30, Novice Illusion', 
                description: 'Calm spells now work on higher level opponents (+8 levels).'
            },
            {
                name: 'Kindred Mage', 
                requirements: 'Illusion 40, Animage', 
                description: 'All Illusion spells work on higher level people (+10 levels).'
            },
            {
                name: 'Adept Illusion', 
                requirements: 'Illusion 50, Apprentice Illusion', 
                description: 'Cast Adept level Illusion spells for half magicka.'
            },
            {
                name: 'Aspect of Terror', 
                requirements: 'Illusion 50, Hypnotic Gaze', 
                description: 'Fear spells work on higher level opponents (+10 levels).'
            },
            {
                name: 'Quiet Casting', 
                requirements: 'Illusion 50, Kindred Mage', 
                description: 'All spells cast from any school of magic are silent to others.'
            },
            {
                name: 'Rage', 
                requirements: 'Illusion 70, Aspect of Terror', 
                description: 'Frenzy spells work on higher level opponents (+12 levels).'
            },
            {
                name: 'Expert Illusion', 
                requirements: 'Illusion 75, Adept Illusion', 
                description: 'Cast Expert level Illusion spells for half magicka.'
            },
            {
                name: 'Master of the Mind', 
                requirements: 'Illusion 90, Rage, Quiet Casting', 
                description: 'Illusion spells work on undead, daedra and automatons.'
            },
            {
                name: 'Master Illusion', 
                requirements: 'Illusion 100, Expert Illusion', 
                description: 'Cast Master level Illusion spells for half magicka.'
            }
        ]  
    },
    {
        name: 'Conjuration',
        perks: [
            {
                name: 'Novice Conjuration', 
                requirements: 'None', 
                description: 'Cast Novice level Conjuration spells for half magicka'
            },
            {
                name: 'Conjuration Dual Casting', 
                requirements: 'Conjuration 20, Novice Conjuration', 
                description: 'Dual casting a Conjuration spell overcharges the effects into a longer lasting version'
            },
            {
                name: 'Mystic Binding', 
                requirements: 'Conjuration 20, Novice Conjuration', 
                description: 'Bound weapons do more damage'
            },
            {
                name: 'Apprentice Conjuration', 
                requirements: 'Conjuration 25, Novice Conjuration', 
                description: 'Cast Apprentice level Conjuration spells for half magicka'
            },
            {
                name: 'Summoner (2)', 
                requirements: 'Conjuration 30/70, Novice Conjuration', 
                description: 'Can summon Atronachs, raise undead or Dremora Lords twice as far away (three times as far for the second rank at Conjuration 70)'
            },
            {
                name: 'Soul Stealer', 
                requirements: 'Conjuration 30, Mystic Binding', 
                description: 'Bound weapons cast Soul Trap on targets'
            },
            {
                name: 'Necromancy', 
                requirements: 'Conjuration 40, Novice Conjuration', 
                description: 'Greater duration for reanimated undead'
            },
            {
                name: 'Atromancy', 
                requirements: 'Conjuration 40, Summoner', 
                description: 'Double duration for conjured Atronachs and Dremora Lords'
            },
            {
                name: 'Oblivion Binding', 
                requirements: 'Conjuration 50, Soul Stealer', 
                description: 'Bound weapons will banish summoned creatures and turn raised ones'
            },
            {
                name: 'Adept Conjuration', 
                requirements: 'Conjuration 50, Apprentice Conjuration', 
                description: 'Cast Adept level Conjuration spells for half magicka'
            },
            {
                name: 'Dark Souls', 
                requirements: 'Conjuration 70, Necromancy', 
                description: 'Reanimated undead have 100 points more health'
            },
            {
                name: 'Expert Conjuration', 
                requirements: 'Conjuration 75, Adept Conjuration', 
                description: 'Cast Expert level Conjuration spells for half magicka'
            },
            {
                name: 'Elemental Potency', 
                requirements: 'Conjuration 80, Atromancy', 
                description: 'Conjured Atronachs are 50% more powerful'
            },
            {
                name: 'Twin Souls', 
                requirements: 'Conjuration 100, Elemental Potency OR Dark Souls', 
                description: 'The player can have two conjured creatures'
            },
            {
                name: 'Twin Souls', 
                requirements: 'Conjuration 100, Elemental Potency OR Dark Souls', 
                description: 'The player can have two conjured creatures'
            },
            {
                name: 'Master Conjuration', 
                requirements: 'Conjuration 100, Expert Conjuration', 
                description: 'Cast Master level Conjuration spells for half magicka'
            }
        ]  
    },
    {
        name: 'Destruction',
        perks: [
            {
                name: 'Novice Destruction', 
                requirements: 'None', 
                description: 'Cast Novice level Destruction spells for half magicka'
            },
            {
                name: 'Destruction Dual Casting', 
                requirements: 'Destruction 20, Novice Destruction', 
                description: 'Dual casting a Destruction spell overcharges the effects into an even more powerful version'
            },
            {
                name: 'Apprentice Destruction', 
                requirements: 'Destruction 25, Novice Destruction', 
                description: 'Cast Apprentice level Destruction spells for half magicka'
            },
            {
                name: 'Augmented Flames (2)', 
                requirements: 'Destruction 30/60, Novice Destruction', 
                description: 'Fire spells do 25% more damage (50% for second rank) (Affects all fire weapon enchantments, not just self-enchanted ones.)'
            },
            {
                name: 'Augmented Frost (2)', 
                requirements: 'Destruction 30/60, Novice Destruction', 
                description: 'Frost spells do 25% more damage (50% for second rank) (Affects all frost weapon enchantments, not just self-enchanted ones.)'
            },
            {
                name: 'Augmented Shock (2)', 
                requirements: 'Destruction 30/60, Novice Destruction', 
                description: 'Shock spells do 25% more damage (50% for second rank) (Affects all shock weapon enchantments, not just self-enchanted ones.)'
            },
            {
                name: 'Impact', 
                requirements: 'Destruction 40, Destruction Dual Casting', 
                description: 'Most destruction spells will stagger an opponent when dual cast'
            },
            {
                name: 'Rune Master', 
                requirements: 'Destruction 40, Apprentice Destruction', 
                description: 'Can place runes five times farther away'
            },
            {
                name: 'Adept Destruction', 
                requirements: 'Destruction 50, Apprentice Destruction', 
                description: 'Cast Adept level Destruction spells for half magicka'
            },
            {
                name: 'Intense Flames', 
                requirements: 'Destruction 50, Augmented Flames', 
                description: 'Fire damage causes targets to flee if their health is low'
            },
            {
                name: 'Deep Freeze', 
                requirements: 'Destruction 60, Augmented Frost', 
                description: 'Frost damage paralyzes targets if their health is low'
            },
            {
                name: 'Disintegrate', 
                requirements: 'Destruction 70, Augmented Shock', 
                description: 'Shock damage disintegrates targets if their health is low'
            },
            {
                name: 'Expert Destruction', 
                requirements: 'Destruction 75, Adept Destruction', 
                description: 'Cast Expert level Destruction spells for half magicka'
            },
            {
                name: 'Master Destruction', 
                requirements: 'Destruction 100, Expert Destruction', 
                description: 'Cast Master level Destruction spells for half magicka'
            },
        ]
    },
    {
        name: 'Restoration',
        perks: [
            {
                name: 'Novice Restoration', 
                requirements: 'None', 
                description: 'Cast Novice level Restoration spells for half magicka'
            },
            {
                name: 'Restoration Dual Casting', 
                requirements: 'Restoration 20, Novice Restoration', 
                description: 'Dual casting a Restoration spell overcharges the effects into an even more powerful version'
            },
            {
                name: 'Regeneration', 
                requirements: 'Restoration 20, Novice Restoration', 
                description: 'Healing spells cure 50% more'
            },
            {
                name: 'Apprentice Restoration', 
                requirements: 'Restoration 25, Novice Restoration', 
                description: 'Cast Apprentice level Restoration spells for half magicka'
            },
            {
                name: 'Recovery (2)', 
                requirements: 'Restoration 30/60, Novice Restoration', 
                description: 'Magicka regenerates 25% faster (50% for second rank)'
            },
            {
                name: 'Respite', 
                requirements: 'Restoration 40, Novice Restoration', 
                description: 'Healing spells also restore stamina'
            },
            {
                name: 'Adept Restoration', 
                requirements: 'Restoration 50, Apprentice Restoration', 
                description: 'Cast Adept level Restoration spells for half magicka'
            },
            {
                name: 'Ward Absorb', 
                requirements: 'Restoration 60, Novice Restoration', 
                description: 'Wards that are cast absorb 25% of magicka that hits them.'
            },
            {
                name: 'Necromage', 
                requirements: 'Restoration 70, Regeneration', 
                description: 'All spells are more effective against undead'
            },
            {
                name: 'Expert Restoration', 
                requirements: 'Restoration 75, Adept Restoration', 
                description: 'Cast Expert level Restoration spells for half magicka'
            },
            {
                name: 'Avoid Death', 
                requirements: 'Restoration 90, Recovery', 
                description: 'Once a day, heals 250 points automatically if the caster falls below 10% health.'
            },
            {
                name: 'Master Restoration', 
                requirements: 'Restoration 100, Expert Restoration', 
                description: 'Cast Master level Restoration spells for half magicka'
            }
        ]
    },
    {
        name: 'Alteration',
        perks: [
            {
                name: 'Novice Alteration', 
                requirements: 'None', 
                description: 'Cast Novice level Alteration spells for half magicka'
            },
            {
                name: 'Alteration Dual Casting', 
                requirements: 'Alteration 20, Novice Alteration', 
                description: 'Dual casting an Alteration spell overcharges the effects into an even more powerful version'
            },
            {
                name: 'Apprentice Alteration', 
                requirements: 'Alteration 25, Novice Alteration', 
                description: 'Cast Apprentice level Alteration spells for half magicka'
            },
            {
                name: 'Mage Armor (3)', 
                requirements: 'Alteration 30/50/70, Apprentice Alteration', 
                description: 'Protection spells like Stoneflesh are twice as strong if not wearing armor (+0.5 per additional rank)'
            },
            {
                name: 'Magic Resistance (3)', 
                requirements: 'Alteration 30/50/70, Apprentice Alteration', 
                description: 'Blocks 10%/20%/30% of a spells effect.'
            },
            {
                name: 'Adept Alteration', 
                requirements: 'Alteration 50, Apprentice Alteration', 
                description: 'Cast Adept level Alteration spells for half magicka'
            },
            {
                name: 'Stability', 
                requirements: 'Alteration 70, Adept Alteration', 
                description: 'Alteration spells have greater duration (+50%)'
            },
            {
                name: 'Expert Alteration', 
                requirements: 'Alteration 75, Adept Alteration', 
                description: 'Cast Expert level Alteration spells for half magicka'
            },
            {
                name: 'Atronach', 
                requirements: 'Alteration 100, Expert Alteration', 
                description: 'Grants 30% Spell Absorption.'
            },
            {
                name: 'Master Alteration', 
                requirements: 'Alteration 100, Expert Alteration', 
                description: 'Cast Master level Alteration spells for half magicka'
            }
        ]
    },
    {
        name: 'Enchanting',
        perks: [
            {
                name: 'Enchanter (5)', 
                requirements: 'Enchanting 0/20/40/60/80', 
                description: 'New enchantments are 20/40/60/80/100% stronger (+20% per rank)'
            },
            {
                name: 'Soul Squeezer', 
                requirements: 'Enchanting, 20 Enchanter', 
                description: 'Soul gems provide extra magicka for recharging'
            },
            {
                name: 'Fire Enchanter', 
                requirements: 'Enchanting, 30 Enchanter', 
                description: 'Fire enchantments on weapons and armor are 25% stronger'
            },
            {
                name: 'Soul Siphon', 
                requirements: 'Enchanting 40, Soul Squeezer', 
                description: "Death blows to creatures, but not people, trap 5% of the victim's soul, recharging the weapon"
            },
            {
                name: 'Frost Enchanter', 
                requirements: 'Enchanting 40, Fire Enchanter', 
                description: 'Frost enchantments on weapons and armor are 25% stronger'
            },
            {
                name: 'Insightful Enchanter', 
                requirements: 'Enchanting 50, Enchanter', 
                description: 'Skill enchantments on armor are 25% stronger'
            },
            {
                name: 'Storm Enchanter', 
                requirements: 'Enchanting 50, Frost Enchanter', 
                description: 'Shock enchantments on weapons and armor are 25% stronger'
            },
            {
                name: 'Corpus Enchanter', 
                requirements: 'Enchanting 70, Insightful Enchanter', 
                description: 'Health, magicka and stamina enchantments on armor are 25% stronger'
            },
            {
                name: 'Extra Effect', 
                requirements: 'Enchanting 100, Storm Enchanter or Corpus Enchanter', 
                description: 'Can put two enchantments on the same item'
            }
        ]
    },
]

const warriorPerks = [
    {
        name: 'Smithing',
        perks: [
            {
                name: 'Steel Smithing', 
                requirements: 'No requirement', 
                description: 'Can create steel armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Arcane Blacksmith', 
                requirements: 'Smithing 60, Steel Smithing', 
                description: 'Magical weapons and armor can now be improved.'
            },
            {
                name: 'Elven Smithing', 
                requirements: 'Smithing 30, Steel Smithing', 
                description: 'Can create Elven armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Advanced Armors', 
                requirements: 'Smithing 50, Elven Smithing', 
                description: 'Can create scaled and steel plate armor at forges, and improve them twice as much.'
            },
            {
                name: 'Glass Smithing', 
                requirements: 'Smithing 70, Advanced Armors', 
                description: 'Can create glass armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Dwarven Smithing', 
                requirements: 'Smithing 30, Steel Smithing', 
                description: 'Can create Dwarven armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Orcish Smithing', 
                requirements: 'Smithing 50, Dwarven Smithing', 
                description: 'Can create Orcish armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Ebony Smithing', 
                requirements: 'Smithing 80, Orcish Smithing', 
                description: 'Can create ebony armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Daedric Smithing', 
                requirements: 'Smithing 90, Ebony Smithing', 
                description: 'Can create daedric armor and weapons at forges, and improve them twice as much.'
            },
            {
                name: 'Dragon Armor', 
                requirements: 'Smithing 100, Glass or Daedric Smithing', 
                description: 'Can create dragon armor and weapons* at forges, and improve them twice as much.'
            }
        ]  
    },
    {
        name: 'Heavy Armor',
        perks: [
            {
                name: 'Juggernaut (5)', 
                requirements: 'Heavy Armor 00/ 20/ 40/ 60/ 80', 
                description: 'Increases armor rating for Heavy Armor by 20%/ 40%/ 60%/ 80%/ 100%.'
            },
            {
                name: 'Fists of Steel', 
                requirements: 'Heavy Armor 30', 
                description: 'Unarmed attacks with Heavy Armor gauntlets do their armor rating in extra damage.'
            },
            {
                name: 'Cushioned', 
                requirements: 'Heavy Armor 50, Fists of Steel', 
                description: 'Half damage from falling if wearing all Heavy Armor: head, chest, hands, feet.'
            },
            {
                name: 'Tower of Strength', 
                requirements: 'Heavy Armor 50, Well Fitted', 
                description: '50% less stagger when wearing only Heavy Armor.'
            },
            {
                name: 'Conditioning', 
                requirements: 'Heavy Armor 70, Cushioned', 
                description: "Heavy Armor weighs nothing and doesn't slow you down when worn."
            },
            {
                name: 'Matching Set', 
                requirements: 'Heavy Armor 70, Tower of Strength', 
                description: 'Additional 25% Armor bonus if wearing a matched set of Heavy Armor.'
            },
            {
                name: 'Reflect Blows', 
                requirements: 'Heavy Armor 100, Matching Set', 
                description: '10% chance to reflect melee damage back to the enemy while wearing all Heavy Armor: head, chest, hands, feet.'
            }
        ]  
    },
    {
        name: 'Block',
        perks: [
            {
                name: 'Shield Wall (5)',
                requirements: 'Block 0/20/40/60/80',
                description: 'Blocking is 20% more effective (+5% per additional rank)'
            },
            {
                name: 'Deflect Arrows',
                requirements: 'Block 30, Shield Wall',
                description: 'Arrows that hit the shield do no damage'
            },
            {
                name: 'Quick Reflexes',
                requirements: 'Block 30, Shield Wall',
                description: "Time slows down if you are blocking during an enemy's power attack"
            },
            {
                name: 'Power Bash',
                requirements: 'Block 30, Shield Wall',
                description: 'Able to do a power bash'
            },
            {
                name: 'Elemental Protection',
                requirements: 'Block 50, Deflect Arrows',
                description: 'Blocking with a shield reduces incoming fire, frost and shock damage by 50%'
            },
            {
                name: 'Block Runner',
                requirements: 'Block 70, Elemental Protection',
                description: 'Able to move faster with a shield or weapon raised'
            },
            {
                name: 'Disarming Bash',
                requirements: 'Block 70, Deadly Bash',
                description: 'Chance to disarm when power bashing (50% chance)'
            },
            {
                name: 'Shield Charge',
                requirements: 'Block 100, Block Runner',
                description: 'Sprinting with a shield raised knocks down most targets'
            }
        ]
    },
    {
        name: 'Two-Handed',
        perks: [
            {
                name: 'Barbarian (5)',
                requirements: 'Two-Handed 20/40/60/80',
                description: 'Two-Handed weapons do 20% more damage (+20% per additional rank)'
            },
            {
                name: "Champion's Stance",
                requirements: 'Two-Handed 20, Barbarian',
                description: 'Power attacks with two-handed weapons cost 25% less stamina'
            },
            {
                name: 'Limbsplitter (3)',
                requirements: 'Two-Handed 30/60/90, Barbarian',
                description: 'Attacks with battle axes cause extra bleeding damage (Additional ranks raise the bleeding damage)'
            },
            {
                name: 'Deep Wounds (3)',
                requirements: 'Two-Handed 30/60/90, Barbarian',
                description: 'Attacks with greatswords have a 10% chance of doing critical damage (+5% per additional rank)'
            },
            {
                name: 'Skull Crusher (3)',
                requirements: 'Two-Handed 30/60/90, Barbarian',
                description: 'Attacks with warhammers ignore 25% of armor (+25% per additional rank)'
            },
            {
                name: 'Devastating Blow',
                requirements: "Two-Handed 50, Champion's Stance",
                description: 'Standing power attacks do 25% bonus damage with a chance to decapitate your enemies'
            },
            {
                name: 'Great Critical Charge',
                requirements: "Two-Handed 50, Champion's Stance",
                description: 'Can do a two-handed power attack while sprinting that does double critical damage'
            },
            {
                name: 'Sweep',
                requirements: 'Two-Handed 70, Devastating Blow OR Great Critical Charge',
                description: 'Sideways power attacks with two-handed weapons hit all targets in front of you'
            },
            {
                name: 'Warmaster',
                requirements: 'Two-Handed 100, Sweep',
                description: 'Backwards power attack has a 25% chance to paralyze the target'
            }
        ]
    },
    {
        name: 'One-Handed',
        perks: [
            {
                name: 'Armsman (5)',
                requirements: 'One-Handed 0/20/40/60/80',
                description: 'One-handed weapons do 20% more damage (+20% per additional rank)'
            },
            {
                name: 'Fighting Stance',
                requirements: 'One-Handed 20, Armsman',
                description: 'Power attacks with one-handed weapons cost 25% less stamina'
            },
            {
                name: 'Hack and Slash (3)',
                requirements: 'One-Handed 30/60/90, Armsman',
                description: 'Attacks with war axes cause extra bleeding damage (additional ranks raise the bleeding damage)'
            },
            {
                name: 'Bone Breaker (3)',
                requirements: 'One-Handed 30/60/90, Armsman',
                description: 'Attacks with maces ignore 25% of armor (+25% per additional rank), this includes the armor provided by flesh spells and wards.'
            },
            {
                name: 'Bladesman (3)',
                requirements: 'One-Handed 30/60/90, Armsman',
                description: 'Attacks with swords have a 10% chance of doing critical damage (+5% per additional rank, does not apply to daggers)'
            },
            {
                name: 'Dual Flurry (2)',
                requirements: 'One-Handed 30/50, Armsman',
                description: 'Dual wielding attacks are 20% faster (35% for second rank)'
            },
            {
                name: 'Savage Strike',
                requirements: 'One-Handed 50, Fighting Stance',
                description: 'Standing power attacks do 25% bonus damage with a chance to decapitate your enemies'
            },
            {
                name: 'Critical Charge',
                requirements: 'One-Handed 50, Fighting Stance',
                description: 'Can do a one-handed power attack while sprinting that does double critical damage'
            },
            {
                name: 'Dual Savagery',
                requirements: 'One-Handed 70, Dual Flurry',
                description: 'Dual wielding power attacks do 50% bonus damage'
            },
            {
                name: 'Paralyzing Strike',
                requirements: 'One-Handed 100, Savage Strike OR Critical Charge',
                description: 'Backwards power attack has a 25% chance to paralyze the target'
            }
        ]
    },
    {
        name: 'Archery',
        perks: [
            {
                name: 'Overdraw (5)',
                requirements: 'Archery Any/20/40/60/80',
                description: 'Bows do 20% more damage (+20% per additional rank)'
            },
            {
                name: 'Eagle Eye',
                requirements: 'Archery 30, Overdraw',
                description: 'Pressing Block while aiming will zoom in your view'
            },
            {
                name: 'Critical Shot (3)',
                requirements: 'Archery 30/60/90, Overdraw',
                description: '10% chance of a critical hit that does extra damage (+5% chance and +25% critical damage per additional rank)'
            },
            {
                name: 'Steady Hand (2)',
                requirements: 'Archery 40/60, Eagle Eye',
                description: 'Zooming in with a bow slows time by 25% (50% for second rank)'
            },
            {
                name: 'Power Shot',
                requirements: 'Archery 50, Eagle Eye',
                description: 'Arrows stagger all but the largest opponents 50% of the time'
            },
            {
                name: "Hunter's Discipline",
                requirements: 'Archery 50, Critical Shot',
                description: 'Recover twice as many arrows from dead bodies'
            },
            {
                name: 'Ranger',
                requirements: "Archery 60, Hunter's Discipline",
                description: 'Able to move faster with a drawn bow'
            },
            {
                name: 'Quick Shot',
                requirements: 'Archery 70, Power Shot',
                description: 'Can draw a bow 30% faster'
            },
            {
                name: 'Bullseye',
                requirements: 'Archery 100, Quick Shot or Ranger',
                description: '15% chance of paralyzing the target for a few seconds'
            }
        ]
    }
]

const thiefPerks = [
    {
        name: 'Light Armor',
        perks: [
            {
                name: 'Agile Defender', 
                requirements: 'Light Armor 0/20/40/60/80', 
                description: 'Increase armor rating for Light Armor by 20% (+20% per additional rank)'
            },
            {
                name: 'Custom Fit', 
                requirements: 'Light Armor 30, Agile Defender', 
                description: '25% armor bonus if wearing all Light Armor: head, chest, hands, feet'
            }, 
            {
                name: 'Unhindered', 
                requirements: 'Light Armor 50, Custom Fit',
                description: "Light Armor weighs nothing and doesn't slow you down when worn"
            },
            {
                name: 'Wind Walker', 
                requirements: 'Light Armor 60, Unhindered',
                description: 'Stamina regenerates 50% faster in all Light Armor: head, chest, hands, feet'
            },
            {
                name: 'Matching Set', 
                requirements: 'Light Armor 70, Custom Fit',
                description: 'Additional 25% Armor bonus if wearing a matched set of Light Armor.'
            },
            {
                name: 'Deft Movement', 
                requirements: 'Light Armor 100, Wind Walker, Matching Set',
                description: '10% chance of avoiding all damage from a melee attack while wearing all Light Armor: head, chest, hands, feet'
            }
        ]  
    },
    {
        name: 'Sneak',
        perks: [
            {
                name: 'Stealth (5)', 
                requirements: 'Sneak 0/20/40/60/80', 
                description: 'You are 20% harder to detect when sneaking (+5% per additional rank, max 40% with 5/5)'
            },
            {
                name: 'Muffled Movement', 
                requirements: 'Sneak 30, Stealth', 
                description: 'Sneak attacks with one-handed weapons now do six times damage.'
            },
            {
                name: 'Backstab',
                requirements: 'Sneak 30, Stealth',
                description: 'Sneak attacks with one-handed weapons now do six times damage. This bonus stacks with the Shrouded Gloves enchantment, giving 12 times normal damage. It can also apply to the Berserker Rage power, offering 12 times normal damage, or 24 times normal damage with both Shrouded Gloves and the race power active.'
            },
            {
                name: 'Light Foot',
                requirements: 'Sneak 40, Muffled Movement',
                description: "You won't trigger pressure plates"
            },
            {
                name: 'Deadly Aim',
                requirements: 'Sneak 40, Backstab',
                description: 'Sneak attacks with bows now do three times damage. Can apply to the Berserker Rage power, offering 6 times normal damage.'
            },
            {
                name: 'Silent Roll',
                requirements: 'Sneak 50, Light Foot',
                description: 'Sprinting while sneaking executes a silent forward roll'
            },
            {
                name: "Assassin's Blade",
                requirements: 'Sneak 50, Deadly Aim',
                description: 'Sneak attacks with daggers now do a total of fifteen times normal damage. This bonus stacks with Shrouded Gloves enchantment, giving 30 times normal damage. It can also apply to the Berserker Rage power, offering 30 times normal damage, or 60 times normal damage with both Shrouded Gloves and the race power active.'
            },
            {
                name: 'Silence',
                requirements: 'Sneak 70, Silent Roll',
                description: 'Walking and running does not affect detection'
            },
            {
                name: 'Shadow Warrior',
                requirements: 'Sneak 100, Silence',
                description: 'Crouching stops combat for a moment and forces distant opponents to search for a target'
            }
        ]  
    },
    {
        name: 'Lockpicking',
        perks: [
            {
                name: 'Novice Locks',
                requirements: 'None',
                description: 'Novice locks are much easier to pick'
            },
            {
                name: 'Apprentice Locks',
                requirements: 'Lockpicking 25, Novice Locks',
                description: 'Apprentice locks are much easier to pick'
            },
            {
                name: 'Quick Hands',
                requirements: 'Lockpicking 40, Apprentice Locks',
                description: 'Able to pick locks without being noticed'
            },
            {
                name: 'Wax Key',
                requirements: 'Lockpicking 50, Quick Hands',
                description: "Automatically gives you a copy of a picked lock's key if it has one"
            },
            {
                name: 'Adept Locks',
                requirements: 'Lockpicking 50, Apprentice Locks',
                description: 'Adept locks are much easier to pick'
            },
            {
                name: 'Golden Touch',
                requirements: 'Lockpicking 60, Adept Locks',
                description: 'Find more gold in chests'
            },
            {
                name: 'Treasure Hunter',
                requirements: 'Lockpicking 70, Golden Touch',
                description: '50% greater chance of finding special treasure'
            },
            {
                name: 'Expert Locks',
                requirements: 'Lockpicking 75, Adept Locks',
                description: 'Expert locks are much easier to pick'
            },
            {
                name: 'Locksmith',
                requirements: 'Lockpicking 80, Expert Locks',
                description: 'Pick starts close to the lock opening position'
            },
            {
                name: 'Unbreakable',
                requirements: 'Lockpicking 100, Locksmith',
                description: 'Lockpicks never break'
            },
            {
                name: 'Master Locks',
                requirements: 'Lockpicking 100, Expert Locks',
                description: 'Master locks are much easier to pick'
            }
        ]
    },
    {
        name: 'Pickpocket',
        perks: [
            {
                name: 'Light Fingers (5)',
                requirements: 'None/20/40/60/80',
                description: 'Pickpocketing bonus of 20%. Item weight and value reduce pickpocketing odds (+20% per additional rank)'
            },
            {
                name: 'Night Thief',
                requirements: 'Pickpocket 30, Light Fingers',
                description: '+25% chance to pickpocket if the target is asleep'
            },
            {
                name: 'Poisoned',
                requirements: 'Pickpocket 40, Night Thief',
                description: 'Silently harm enemies by placing poisons in their pockets'
            },
            {
                name: 'Cutpurse',
                requirements: 'Pickpocket 40, Night Thief',
                description: 'Pickpocketing gold becomes 50% easier'
            },
            {
                name: 'Extra Pockets',
                requirements: 'Pickpocket 50, Night Thief',
                description: 'Carrying capacity is increased by 100.'
            },
            {
                name: 'Keymaster',
                requirements: 'Pickpocket 60, Cutpurse',
                description: 'Pickpocketing keys almost always works'
            },
            {
                name: 'Misdirection',
                requirements: 'Pickpocket 70, Cutpurse',
                description: 'Can pickpocket equipped weapons (when hidden)'
            },
            {
                name: 'Perfect Touch',
                requirements: 'Pickpocket 100, Misdirection',
                description: 'Can pickpocket equipped items, clothes and armor (when hidden)'
            }
        ]
    },
    {
        name: 'Speech',
        perks: [
            {
                name: 'Haggling (5)',
                requirements: 'None',
                description: 'Buying and selling prices are 10% better (+5% per additional rank)'
            },
            {
                name: 'Allure',
                requirements: 'Speech 30, Haggling',
                description: '10% better prices with the opposite sex'
            },
            {
                name: 'Bribery',
                requirements: 'Speech 30, Haggling',
                description: 'Can bribe guards to ignore crimes'
            },
            {
                name: 'Merchant',
                requirements: 'Speech 50, Allure',
                description: 'Can sell any type of item to any kind of merchant'
            },
            {
                name: 'Persuasion',
                requirements: 'Speech 50, Bribery',
                description: 'Persuasion attempts are 30% easier'
            },
            {
                name: 'Investor',
                requirements: 'Speech 70, Merchant',
                description: 'Can invest 500 gold with a shopkeeper to increase their available gold permanently '
            },
            {
                name: 'Intimidation',
                requirements: 'Speech 70, Persuasion',
                description: 'Intimidation is twice as successful'
            },
            {
                name: 'Fence',
                requirements: 'Speech 90, Investor',
                description: 'Can barter stolen goods with any merchant the Dragonborn has invested in'
            },
            {
                name: 'Master Trader',
                requirements: 'Speech 100, Fence',
                description: 'Every merchant in the world gains 1000 gold for bartering'
            }
        ]
    },
    {
        name: 'Alchemy',
        perks: [
            {
                name: 'Alchemist (5)',
                requirements: 'Alchemy 0/ 20/ 40/ 60/ 80',
                description: 'Potions and poisons are 20% / 40% / 60% / 80% / 100% stronger.'
            },
            {
                name: 'Physician',
                requirements: 'Alchemy 20, Alchemist',
                description: 'Potions you mix that restore health or stamina are 25% more powerful.'
            },
            {
                name: 'Poisoner',
                requirements: 'Alchemy 30, Physician',
                description: 'Poisons you mix are 25% more effective.'
            },
            {
                name: 'Benefactor',
                requirements: 'Alchemy 30, Physician',
                description: 'Potions you mix with beneficial effects have an additional 25% greater magnitude.'
            },
            {
                name: 'Experimenter (3)',
                requirements: 'Alchemy 50/ 70/ 90, Benefactor',
                description: 'Eating an ingredient reveals the first two / three / four effects.'
            },
            {
                name: 'Concentrated Poison',
                requirements: 'Alchemy 60, Poisoner',
                description: 'Poisons applied to weapons last for twice as many hits.'
            },
            {
                name: 'Green Thumb',
                requirements: 'Alchemy 70, Concentrated Poison',
                description: 'Two ingredients are gathered from plants (description is misleading - two ingredients or food items are gathered from any static harvest-able object - be it plant, fungi, hanging fish or meat, egg clusters, etc.) Known exception: Nirnroot (has only 1 root).'
            },
            {
                name: 'Snakeblood',
                requirements: 'Alchemy 80, Concentrated Poison, Experimenter',
                description: '50% resistance to all poisons.'
            },
            {
                name: 'Purity',
                requirements: 'Alchemy 100, Snakeblood',
                description: 'All negative effects are removed from created potions while all positive effects are removed from created poisons.'
            }
        ]
    }
]

const gerarTabelas = (habilidades) => {
    const container = document.getElementById('habilidades');
    container.innerHTML = '';
    habilidades.forEach(classe => {
        const table = document.createElement('table');
        table.classList.add('table');
        container.appendChild(table);
        const caption = document.createElement('caption');
        caption.innerHTML = classe.name;
        table.appendChild(caption);
        const thead = document.createElement('thead');
        const theadTr = document.createElement('tr');
        const perkCol = document.createElement('th');
        perkCol.scope = 'col';
        perkCol.innerHTML = 'Perk';
        const requirementsCol = document.createElement('th');
        requirementsCol.scope = 'col';
        requirementsCol.innerHTML = 'Requirements';
        const descriptionCol = document.createElement('th');
        descriptionCol.scope = 'col';
        descriptionCol.innerHTML = 'Description';
        theadTr.appendChild(perkCol);
        theadTr.appendChild(requirementsCol);
        theadTr.appendChild(descriptionCol);
        thead.appendChild(theadTr);
        table.appendChild(thead);
        const tbody = document.createElement('tbody')
        classe.perks.forEach(perk => {
            const tr = document.createElement('tr');
            const name = document.createElement('td');
            name.scope = 'row';
            name.innerHTML = perk.name;
            tr.appendChild(name);
            const requirements = document.createElement('td');
            requirements.scope = 'row';
            requirements.innerHTML = perk.requirements;
            tr.appendChild(requirements);
            const description = document.createElement('td');
            description.scope = 'row';
            description.innerHTML = perk.description;
            tr.appendChild(description);
            tbody.appendChild(tr);
        })
        table.appendChild(tbody);
    })
}

gerarTabelas(magePerks);