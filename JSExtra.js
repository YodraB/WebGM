// Creature Generator

var size = ['a small house', 'an elephant', 'a bear', 'a horse', 'a horse', 'an average adult human', 'a large dog', 'a large dog', 'a child', 'a child', 'a child', 'a house cat', 'a house cat', 'a house cat', 'a mouse']

var like = ['a duck', 'a cat', 'a bat', 'a dog', 'a horse', 'a deer', 'a tapir', 'an alligator', 'an octopus', 'a squid', 'a slug', 'a dragonfly', 'a sardine', 'an elephant', 'a snail', 'a turtle', 'a snake', 'a stingray', 'a kangaroo', 'a chameleon', 'a pelican', 'a worm', 'a beetle', 'a mass of spaghetti', 'a blob', 'an ape',  'an eagle', 'a weasel', 'a rat', 'a frog', 'a monkey', 'a fish', 'a scorpion', 'a starfish', 'an emu', 'a lion', 'a rhino', 'a hippo', 'a wombat', 'a kangaroo mouse', 'a platypus', 'an otter', 'a bear', 'a giraffe', 'a llama', 'a spider', 'an anenome', 'a sponge', 'a cow', 'an antelope', 'a camel', 'a pig', 'a shark', 'a raccoon', 'a dolphin', 'a crab', 'a mouse', 'a koala', 'a sloth', 'an armadillo', 'an anteater', 'a hummingbird', 'a goose', 'an owl', 'a chicken', 'a crane', 'a jellyfish', 'a mole', 'a rabbit', 'a robin', 'a lizard', 'a centaur', 'a balloon', 'a raptor', 'a squirrel']

var but = ['on stilts', 'inside-out', 'capable of flight', 'aquatic', 'covered in spines', 'with many more limbs', 'burrowing', 'with a horrible disease', 'standing upright', 'partially melted', 'upside-down', 'from the mind of H. R. Giger', 'really fluffy', 'gaunt and bony', 'with swelling in unsettling places', 'more dangerous', 'as designed by a young girl', 'inflatable', 'fatter, with stubby legs', 'triangular', 'built for speed', 'frilly', 'keenly intelligent', 'arboreal', 'as understood in medieval times', 'nocturnal', 'glittering with gems', 'angry', 'sad', 'stretched out', 'mixed with a dinosaur', 'plant-like', 'with a hive-mind', 'non-biological', 'insectoid', 'split down the middle', 'sort of squished', 'ethereal', 'really young', 'with the limbs bent backwards']

var head = ['one eye', 'no eyes', 'huge eyes', 'slitted eyes', 'tiny eyes', 'a small beak', 'a long beak', 'a long snout', 'a forked tongue', 'a long neck', 'multiple heads', 'pointed ears', 'a great many eyes', 'eye stalks', 'antennae', 'tusks', 'a forlorn expression', 'large flappy ears', 'a huge nose', 'a muscular trunk', 'a short snout', 'a large nose', 'no nose', 'a great many teeth', 'no teeth', 'a huge mouth', 'a probiscus', 'a tentacled face', 'mandibles', 'no neck', 'a long, sticky tongue', 'with man long tongues', 'a mouth that opens in three or more parts', 'a wide bill']

var extras = ['retractable claws', 'six limbs', 'a shaggy mane', 'a pair of antlers', 'horns', 'fangs', 'giant feet', 'tentacles', 'a prehensile tail', 'hooves', 'bony scutes', 'delicate whiskers', 'loose folds of skin', 'glows', 'changes color', 'can leap great distances', 'is controlled by a tiny parasite', 'a sail fin', 'a heavy shell', 'frills', 'little wings', 'hooved feet', 'walks on its knuckles', 'a moustache', 'long decorative plumes', 'a prehensile upper lip', 'lots of jagged teeth', 'a heavy brow ridge', 'rolls of fat', 'a stubby tail', 'a long tail', 'a prehensile tail', 'a barbed tail']

var fight = ['sharp quills', 'the ability to discharge electricity', 'can appear more dangerous than it really is', 'can move surprisingly quickly', 'emits a noxious gas', 'a poisonous bite', 'incredible endurance', 'flees at the first sign of danger', 'can camouflage itself', 'wickedly sharp claws', 'shoots acid', 'poisonous spines', 'bony spurs', 'exudes a paralytic from its skin', 'shrieks like a banshee', 'is oddly hypnotizing', 'can move faster than the eye can see', 'plays dead very convincingly', 'emits a terrible smell when startled', 'buries itself', 'exceedingly tough scales']

var cover = ['is covered in long, shaggy fur', 'is completely bald', 'is covered in soft, velvety down', 'is very wrinkly', 'has feathers', 'has patches of scraggly fur', 'has curly fur', 'has short fur', 'has densely matted fur', 'has thick scales', 'has shiny scales', 'has tough, leathery skin', 'has delicate skin', 'has a covering of mucuous', 'is slimy', 'has long, dazzling plumage', 'is covered in tiny scales, is soft to the touch,', 'has tough, rubbery skin', 'is covered in a mat of greenery']

var color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown', 'chocolate-colored', 'coffee-colored', 'copper colored', 'liver-colored', 'peach-colored', 'pure white', 'off-white', 'cream-colored', 'blue-grey', 'grey', 'silver', 'bronze', 'gold', 'the color of a bruise', 'black', 'lilac', 'iridescent']

var design = ['striped with', 'with small spots of',  'with large, irregular spots of', 'tipped with', 'flecked with spots of', 'with blotches of', 'with patches of', 'with horizontal stripes of', 'and', 'and', 'and', 'and', 'and']

function creature() {
 var nsize = randomPick(size);
 var nlike = randomPick(like);
 var nbut = randomPick(but);
 var nhead = randomPick(head);
 var nextras = randomPick(extras);
 var nfight = randomPick(fight);
 var ncover = randomPick(cover);
 var ndesign = randomPick(design);
 var ncolorA = randomPick(color);
 var ncolorB = randomPick(color);
 var text = 'This creature is the size of ' + nsize + ' and resembles ' + nlike + ', but ' + nbut + '. It has ' + nhead + ', ' + nextras + ', and ' + nfight + '. It is ' + ncover + ' and is ';
 var blanket = Math.random()
 while (ncolorA == ncolorB) {
   ncolorB = randomPic(color);
 }
 if (blanket > 0.49) {
   text += ncolorA + '.';
 } else {
   text += ncolorA + ' ' + ndesign + ' ' + ncolorB + '.';
 }
 print(text);
}

//Magical Effects
var magCatList = ['abilityTo', 'control', 'transform', 'statusEffect', 'immunity', 'bodyChange', 'sensorium', 'summon', 'misc']
//var magCatList = ['sensorium']

//durations
var durationList = ['5 minutes', '10 minutes', '15 minutes', '20 minutes', '30 minutes', '1 hour', '3 hours', '12 hours', '24 hours', '3 days', '7 days', 'a fornight', 'a year', 'a year and a day', '7 years', 'forever', 'wildcard']
var statusDurationList =['30 seconds', '2 minutes', '15 minutes', '1 hour', '3 days']
var goodWildDurations = ['the next full moon', 'justTarget are fully submersed in water', 'justTarget commit an evil act', 'justTarget are overtaken by madness', 'a magic candle in possesiveTarget possesion goes out', 'justTarget anger someone', 'it is no longer necessary']
var badWildDurations = ['justTarget earn the love of a willing soul', 'possesiveTarget quest ends', 'justTarget slay a demon', 'justTarget are forgiven', 'justTarget pass on the transformation', 'justTarget keep a vow of silence for a year', 'justTarget cry tears of true sorrow', 'justTarget solve a riddle', 'justTarget are bathed in moonlight', 'justTarget get their revenge']
var wildDurations = goodWildDurations.concat(badWildDurations)

//targets
var directTargetList = ['you', 'your chosen target']
var areaTargetList = ['you', 'your chosen target', 'everyone in sight', 'whatever is most important nearby']
var genTargetList = ['you', 'your chosen target', 'everyone in sight']

//magCats
var abilityToList = ['hold possesiveTarget breath indefinitely', 'phase through objects', 'turn invisible', 'fly', 'walk on water', 'speak to animals', 'mimic the magic of others', 'speak any language', 'heal injuries and disease', 'dispell curses', 'dispell magic', 'never tire', 'time travel', 'see in the dark', 'read minds', 'communicate telepathically', 'move at super-speed', 'see like an eagle', 'tell truth from lies', 'teleport within possesiveTarget sight range', 'stick to walls', 'shapeshift', 'project force fields', 'move objects with possesiveTarget mind', 'change possesiveTarget size', 'create and control illusions', 'create replicas of possesiveTargetself and merge with the replicas', 'cause things to explode', 'breathe fire', 'create water', 'create fog', 'spit poison', 'spit acid', 'generate ink from possesiveTarget fingertips', 'smell like a bloodhound', 'jump 10 feet upwards', 'astral project', 'disintigrate things upon touching them', 'heal all maladies', 'pass without a trace', 'create portals', 'escape any imprisonment', 'turn into an animal', 'change possesiveTarget age', 'disguise themTargetself perfectly', 'cough up gems', 'feel the emotions of others', 'sense danger', 'sense valuables', 'sense treachery', 'paralyse those justTarget touch', 'see souls', 'hear the dead', 'travel through shadows', 'enter the mirror realm']
 var abilityAbsoluteList = ['hold possesiveTarget breath indefinitely', 'never tire', 'move at super-speed', 'see like an eagle', 'cause things to explode', 'smell like a bloodhound', 'jump 10 feet upwards', 'pass without a trace', 'escape any imprisonment', 'turn into an animal', 'disguise themTargetself perfectly', 'cough up gems', 'paralyse those justTarget touch', 'enter the mirror realm']
var controlList = ['ants', 'worms', 'beetles', 'butterflies', 'dragonflies', 'eels', 'fish', 'jellyfish', 'plants', 'flowers', 'the dead', 'metal', 'ice', 'electricity', 'stone', 'magnetism', 'minds', "objects touching the controller's skin", 'bees', 'the weather', 'fire', 'shadow', 'water', 'light', 'gravity', 'air', 'earth', 'blood', 'sound', 'emotions', 'density', 'dreams', 'crystals', 'magical fields', 'magma', 'poison', 'smoke', 'sand', 'memories', 'ink', 'the senses of others', 'liquids', 'hair', 'glass', 'paper', 'cloth', 'rope', 'wood', 'velocity', 'monsters', 'money', 'disease', 'ashes', 'acid', 'demons', 'mirrors', 'friction', 'dolls', 'clouds', 'bubbles', 'the ocean', 'gold', 'momentum', 'wire', 'gemstones', 'insects', 'skin', 'candy', 'fungi', 'swords', 'weapons', 'armor', 'rubber', 'sugar', 'salt', 'explosives', 'spherical objects', 'milk', 'heat', 'ceramics', 'wax', 'silver', 'bronze', 'copper', 'aluminum', 'garbage', 'images', 'dice', 'coins', 'the spirit', 'a spectral hand']
var immunityList = ['poison', 'paralysis', 'compulsions', 'emotional manipulation', 'forced sleep', 'exhaustion', 'fear', 'dizziness', 'nausea', 'hunger', 'silencing', 'sickness', 'being stunned', 'brainwashing', 'charm', 'petrification', 'unconciousness', 'curses', 'heat', 'cold', 'electricity', 'bug bites', 'illusions', 'alcohol', 'physical injury', 'mind-reading', 'mind control', 'magic', 'getting wet', 'disease']
var bodyChangeList = ['arms turn into wings', 'body sprouts an eyeball', 'face grows a third eyeball', 'joints grow spiked protrusions', 'skin grows bony armor', 'legs turn into a fin', 'limbs become tentacles', 'head becomes that of a goat', 'left foot turns into a hoof', 'hands grow three new fingers each', 'arms disappear', 'back erupts into wings', 'ears become pointed', 'pupils become splitted', 'forehead grows horns', 'hand is replaced with a hook', 'right eye disappears', 'tongue becomes forked', 'tailbone grows into a real tail', 'head becomes that of an animal', 'eyes shoot lasers', 'neck sprouts gills', 'head grows a bony crest', 'number of arms doubles', 'fingers turn to stone', 'fingers swap hands', 'limbs turn invisible', 'hair grows out', 'upper lip grows a magnificent moustache', 'eyebrows turn orange', 'ears grow to giant sizes', 'nose lengthens', 'body is covered in fish scales', 'mouth is suddenly sewn shut', 'skin is covered in boils', 'ears emit smoke', 'skin grows fur', 'skin grows harmless lumps', 'voice disappears', 'fingers turn to cheese', 'mouth becomes a beak', 'feet swell', 'thumbs turn backwards', 'vision shows only shades of green', 'voice sounds like a bird call', 'voice lowers by wuite a bit', 'voice becomes a squeaky falsetto', 'hair changes color', 'neck grows a foot longer', 'body becomes emaciated', 'face sprouts cat whiskers', 'entire body disintegrates', 'eyes cross involuntarily', 'clothing spontaneously disintegrates']
var statusEffectList = ['poisoned', 'paralyzed', 'blind', 'compelled to dance', 'compelled to laugh uproariously', 'happy', 'sad', 'angry', 'paranoid', 'tied up', 'confused', 'asleep', 'afraid', 'dizzy', 'hungry', 'unable to use magic', 'sick', 'nauseous', 'vomiting', 'bleeding', 'very very sick', 'stunned', 'deaf', 'in a beserker rage', 'brainwashed', 'charmed', 'petrified', 'unconscious', 'jinxed', 'an amnesiac', 'exhausted', 'feeling very calm and peaceful', 'wanted by the law', 'purple', 'blue', 'orange', 'sweaty', 'floating', 'sitting down', 'homesick', 'itchy', 'overwhelmingly charming', 'hiccuping unstopably', 'very very lucky']
 var statusInstantList = ['poisoned', 'tied up', 'asleep', 'hungry', 'sick', 'bleeding', 'very very sick', 'in a beserker rage', 'jinxed', 'exhausted', 'sitting down', 'homesick']
var transformList = ['a dog', 'a horse', 'a skeleton', 'a elephant', 'living metal', 'a fish', 'a pig', 'a duck', 'a dragon', 'a goldfish', 'a sheep', 'a frog', 'a raven', 'a deer', 'a swan', 'a donkey', 'a dove', 'a doll', 'stone', 'a snake', 'a beetle', 'a spider', 'water', 'vapor', 'a giant', 'a child', 'an elderly person', 'a rubber chicken',  'a slime', 'a bird', 'a sword', 'a set of armor', 'a pendant', 'a book', 'a spectral form', 'a flower', 'a monster', 'a being of flame', 'a puddle of ink', 'a crude clay golem', 'smoke', 'a sprkling crystal', 'diamond', 'paper', 'ice', 'dust', 'ashes', 'a piece of coal', 'wood', 'a leper']
var sensoriumList = ['illusion', 'see', 'hear', 'smell', 'taste', 'feel']
 var illusionList = ['bleed from empty eyesockets', 'be surrounded by angry bees', 'have horrifying deformities', 'be spectacularly beautiful', 'be blessed by a god', 'be made of cloth', 'attack', 'take on a demonic appearance', 'be greviously injured', 'ooze from the pores', 'float several inches above the ground', 'have no shadow', 'be a tasty piece of food', 'be sleepwalking', 'be inside-out', 'be wearing a ludicrous hat', 'be wearing a fancy ballgown', 'have been replaced with a porcelain doll', 'have no face', 'be wrapped in bandages', 'be glowing brightly']
 var seeList = ['something dark out of the corner of possesiveTarget eye', 'a vision of possesiveTarget gruesome death', 'a dull red glow', 'the promised land', 'a procession of the fae court', 'a pink elephant', 'a castle in the sky', 'a familiar toy from possesiveTarget childhood', 'flowers instead of weapons', 'the sprits of the dead']
 var hearList = ['tinkling bells', 'something skittering away behind themTargetself', 'a loud whooping noise', 'meowing', 'all speech as gibberish', 'ominous drums in the distance', 'a train whistle', 'screaming', 'a low hissing noise', 'someone singing out of tune', 'a hideous screetching noise', 'running water', 'paper rustling', 'an angelic choir', 'everything go completely silent', 'pealing laughter', 'a low snickering']
 var smellList = ['rotting flesh', 'a strong scent of lavender', 'fear', 'citrus', 'the sharp scent of peppermint', 'a slight scent of almonds', 'fresh strawberries', 'dirty socks', 'cooking meat', 'vanilla', 'baking cookies', 'burning', 'ozone', 'something sickeningly sweet', 'wet earth', 'mothballs', 'ink and old paper', 'motor oil']
 var tasteList = ['sausage', 'blood', 'rotten fruit', 'chocolate', 'the color green', 'cherry pie', 'melting wax', 'pineapple juice', 'salt', 'copper', 'peanut butter', 'cinnamon', "possesiveTarget mother's home cooking", 'blueberries', 'lemonade', 'mint', 'ashes', 'seawater', 'pomegranite', 'rust', 'soap']
 var feelList = ['the touch of spectral hands', "like justTarget can't breathe", 'a crawling sensation like a bug on possesiveTarget skin', 'a pebble in possesiveTarget mouth that cannot be removed', 'the temperature drop sharply', "the overpowering urge to lick whatever justTarget're paying attention to", 'a strong craving for possesiveTarget favorite food', 'something trying to escape from possesiveTarget stomach', 'possesiveTarget body burning', 'possesiveTarget skin bubbling']
var summonList = ['spectral weapon', 'perfect meatball sub', 'pond full of carp', 'dragon', 'five course meal', 'earth elemental', 'air elemental', 'water elemental', 'fire elemental', 'hearty sandwich', 'flying machine', 'rubber chicken']
 summonList = summonList.concat(animalList)
 var summonSingleList = ['pond full of carp', 'hearty sandwich', 'flying machine']
 var summonCreatureList = ['dragon', 'earth elemental', 'air elemental', 'water elemental', 'fire elemental']
 summonCreatureList = summonCreatureList.concat(animalList)
 var summonPrefixList = ['demonic', 'dire', 'celestial', 'giant', 'albino']
 var summonSuffixList = ['appears out of thin air to serve you', 'appears, and immediately attacks']
var miscList = ['thinkSHere justTarget are a', 'attacked by', 'all corpses within a 3-meter radius come back to life', 'find startTarget irresistible', 'find startTarget repugnant', "startTarget can't help but let out a terrific sneeze", 'a pocket dimension is created', 'a burst of sunlight fills the area', 'startTarget now knowSHere the location of something justTarget were searching for', 'you now know the entire hsitory of your chosen target', 'startTarget developSHere an allergy to lies', 'startTarget developSHere an inconvenient allergy', 'a plague of locusts descends on the area', 'all traps within 3 meters glow blue', 'all curses are removed within a 3-meter radius', 'an earthquake wracks the area', 'startTarget suddenly knowSHere something useful', 'a nearby object comes to life', 'everyone in sight bursts into an eerily coordinated song-and-dance routine', 'all vegetation within 3 meters turns to stone', 'everything goes dark', 'startTarget suddenly reverseSHere their alignment', 'you shoot a fireball at your chosen target', 'you shoot lighting at your chosen target', 'you shoot a magic missle at your chosen target', 'your worst fear appears', 'startTarget experience SHere a sudden intelligence boost', 'startTarget growSHere a new limb', 'suddenly, tigers', 'the world turns 90 degrees to the left around you', 'it begins to rain', 'a burst of fireworks', 'a dazzling flash of light', 'flowers sprout in a circle around startTarget', "justTarget can't smell anymore", 'everything within a 3-meter radius is suddenly clean and tidy']
 var undeadList = ['good as new', 'zombies', 'skeletons', 'vampires', 'liches']
 var attractList = ['animals', 'monsters', 'people justTarget findSHere attractive', 'bugs', 'bees']
 attractList = attractList.concat(animalList)
 var attackList = ['dirty laundry', 'orcs', 'angry bees']
 var thinkAreList = ['teapot', 'king']
 thinkAreList = thinkAreList.concat(animalList)

function magicFX() {
 var magCat = randomPick(magCatList);

 var magic = '';
 var append = '';
 var effect = 'effect';
 var targetType = 'null';
 var pluralSwitch = false;

 var duration = randomPick(durationList);
 var directTarget = randomPick(directTargetList);
 var areaTarget = randomPick(areaTargetList);
 var genTarget = randomPick(genTargetList);
 if (directTarget == 'you') {
   directTargetType = true;
 } else {
   directTargetType = false;
 }
 switch(true) {
   case (areaTarget == 'you'):
     areaTargetType = 'you';
     break;
   case (areaTarget == 'your chosen target' || areaTarget == 'everyone in sight'):
     areaTargetType = 'they';
     break;
   case (areaTarget == 'whatever is most important nearby'):
     areaTargetType = 'it';
     break;
 }
 switch(true) {
   case (genTarget == 'you'):
     genTargetType = 'you';
     break;
   case (genTarget == 'your chosen target'):
     genTargetType = 'target';
     break;
   case (genTarget == 'everyone in sight'):
     genTargetType = 'every';
     break;
 }

 //Takes care of durations except wildcards
 switch(true) {
   case (duration == 'forever'):
     duration = 'permanently';
     break;
   default:
     duration = 'for ' + duration;
 }

 switch(true) { //Magic FX types switch

   //Direct target FX
   //abilities
   case (magCat== 'abilityTo'):
     effect = randomPick(abilityToList);
     targetType = 'direct';
     magic += directTarget + ' gainSHere the ability to ';
     if (inside(effect, abilityAbsoluteList) == false) {
       var notWell = Math.random();
       if (notWell <= 0.3) {
         append = ', but not very well, ';
       } else {
         effect += ' ';
       }
     } else {
       effect += ' ';
     }
     if (duration == 'for wildcard') {
       duration = 'until ' + randomPick(goodWildDurations);
     }
     break;

   //control
   case (magCat == 'control'):
     effect = randomPick(controlList);
     targetType = 'direct';
     magic += directTarget + ' can now control ';
     var notWell = Math.random();
     if (notWell <= 0.3) {
       append = ', but not very well, ';
     } else {
     	effect += ' ';
     }
     if (duration == 'for wildcard') {
       duration = 'until ' + randomPick(goodWildDurations);
     }
     break;

   //immunity
   case (magCat == 'immunity'):
     effect = randomPick(immunityList) + ' ';
     targetType = 'direct';
     magic += directTarget + ' areIs now immune to ';
     if (duration == 'for wildcard') {
       duration = 'until ' + randomPick(goodWildDurations);
     }
     break;

   //body changes
   case (magCat == 'bodyChange'):
     effect = randomPick(bodyChangeList) + ' ';
     targetType = 'direct';
     if (directTargetType == true) {
       magic += 'your ';
     } else {
       magic += "your chosen target's ";
     }
     if (duration == 'for wildcard') {
         duration = 'until ' + randomPick(wildDurations);
     }
     break;

   //status effects
   case (magCat == 'statusEffect'):
     effect = randomPick(statusEffectList);
     targetType = 'direct';
     magic += directTarget + ' areIs now ';
     if (inside(effect, statusInstantList) == false) {
       duration = ' for ' + randomPick(statusDurationList);
     } else {
       duration = ''
     }
     break;

   //Area target FX
   //transformations
   case (magCat == 'transform'):
     effect = randomPick(transformList) + ' ';
     targetType = 'area';
     magic += areaTarget + ' transformSHere into ';
     if (duration == 'for wildcard') {
       duration = 'until ' + randomPick(wildDurations);
     }
     break;

   //sensorium
   case (magCat == 'sensorium'):
     effect = randomPick(sensoriumList);
     targetType = 'gen';
     if (effect != 'illusion') {
       duration = ''
     } else {
       duration = ' ' + duration
     }
     list = eval(effect + 'List');
     if (effect == 'illusion'){
       effect = 'appear';
       list = illusionList;
     }
     magic += genTarget + ' ';
     effect += 'SHere ' + randomPick(list);
   break;

   //General target FX
   //summons
   case (magCat == 'summon'):
     effect = randomPick(summonList);
     targetType = 'gen';
     append = ' suddenly appears';
     duration = '';
     if (inside(effect, summonCreatureList) == true) {
       var prefix = Math.random();
       if (prefix <= 0.75 && effect.search('elemental') == -1) {
         effect = randomPick(summonPrefixList) + ' ' + effect
       }
       var pluralSummon = Math.random();
       if (pluralSummon <= 0.5 && inside(effect, summonSingleList) == false) {
         pluralSwitch = true
         effect = 'group of ' + effect
       }
       var suffix = Math.random();
       if (suffix <= 0.5) {
         append = ' ' + randomPick(summonSuffixList)
       }
     } else {
       var pluralSummon = Math.random();
       if (pluralSummon <= 50 && inside(effect, summonSingleList) == false) {
         pluralSwitch = true
         effect = 'pile of ' + effect
       }
     }
     effect = aan(effect) + 'PluralTarget';

     break;

   //misc
   case (magCat == 'misc'):
     effect = randomPick(miscList);
     targetType = 'gen';
     switch(true) {
       case (effect == 'all corpses within a 3-meter radius come back to life'):
         effect += ' as ' + randomPick(undeadList)
         break;
       case (effect == 'find startTarget irresistible' || effect == 'find startTarget repugnant'):
         effect = 'all ' + randomPick(attractList) + 's ' + effect + ' ' + duration
         break;
       case (effect == 'attacked by'):
         effect = 'startTarget areIs suddenly ' + effect + ' ' + randomPick(attackList)
         break;
       case (effect == 'thinkSHere justTarget are a'):
         effect = 'startTarget ' + effect + ' ' + randomPick(thinkAreList)
         break;
     }
     duration = '';
     break;

 } //close entire magCat switch


 // final put-together of sentence
 magic += effect + append + duration;

 // replaces placeholders with target-specific words
 switch(true) {
   case (targetType == 'direct'):
     if (directTargetType == true) {
       magic = magic.replace(/justTarget/g, 'you');
       magic = magic.replace(/possesiveTarget/g, 'your');
       magic = magic.replace(/SHere/g, '');
       magic = magic.replace(/areIs/g, 'are');
     } else {
       magic = magic.replace(/justTarget/g, 'they');
       magic = magic.replace(/possesiveTarget/g, 'their');
       magic = magic.replace(/SHere/g, 's');
       magic = magic.replace(/areIs/g, 'is');
     }
     break;
   case (targetType == 'area'):
     switch(true){
       case (areaTargetType == 'you'):
         magic = magic.replace(/justTarget/g, 'you');
         magic = magic.replace(/themTarget/g, 'your');
         magic = magic.replace(/possesiveTarget/g, 'your');
         magic = magic.replace(/SHere/g, '');
         magic = magic.replace(/areIs/g, 'are');
         break;
       case (areaTargetType == 'they'):
         magic = magic.replace(/justTarget/g, 'they');
         magic = magic.replace(/themTarget/g, 'them');
         magic = magic.replace(/possesiveTarget/g, 'their');
         magic = magic.replace(/SHere/g, 's');
         magic = magic.replace(/areIs/g, 'is');
         break;
       case (areaTargetType == 'it'):
         magic = magic.replace(/justTarget/g, 'it');
         magic = magic.replace(/themTarget/g, 'it');
         magic = magic.replace(/possesiveTarget/g, 'its');
         magic = magic.replace(/SHere/g, 's');
         magic = magic.replace(/areIs/g, 'is');
         break;
     }
     break;
   case (targetType == 'gen'):
     switch(true){
       case (genTargetType == 'you'):
         magic = magic.replace(/startTarget/g, 'you');
         magic = magic.replace(/justTarget/g, 'you');
         magic = magic.replace(/themTarget/g, 'your');
         magic = magic.replace(/possesiveTarget/g, 'your');
         magic = magic.replace(/SHere/g, '');
         magic = magic.replace(/areIs/g, 'are');
         break;
       case (genTargetType == 'target'):
         magic = magic.replace(/startTarget/g, 'your chosen target');
         magic = magic.replace(/justTarget/g, 'they');
         magic = magic.replace(/themTarget/g, 'them');
         magic = magic.replace(/possesiveTarget/g, 'their');
         magic = magic.replace(/SHere/g, 's');
         magic = magic.replace(/areIs/g, 'is');
         break;
       case (genTargetType == 'every'):
         magic = magic.replace(/startTarget/g, 'every person in sight');
         magic = magic.replace(/justTarget/g, 'they');
         magic = magic.replace(/themTarget/g, 'them');
         magic = magic.replace(/possesiveTarget/g, 'their');
         magic = magic.replace(/SHere/g, 's');
         magic = magic.replace(/areIs/g, 'is');
         break;
     }
     break;
 } // close replacement switch
 if (pluralSwitch == true) {
   magic = magic.replace(/PluralTarget/g, 's')
 } else {
   magic = magic.replace(/PluralTarget/g, '')
 }

 magic = magic.charAt(0).toUpperCase() + magic.slice(1) + '.';
 print(magic)
} //close entire function
