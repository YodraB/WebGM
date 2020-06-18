//genre generator
//basically a copy of the setting generator

var genres = ['high fantasy', 'space opera', 'western', 'comedy', 'horror', 'action', 'mystery', 'epic', 'fairy tale', 'historical', 'military', 'psychological thriller', 'modern', 'adventure', 'romance', 'buddy-cop', 'conspiracy', 'samurai', 'swashbuckler', 'sword and sorcery', 'political', 'psychological', 'low fantasy', 'urban fantasy', 'xenofiction', 'superhero', 'sports', 'mecha', 'time travel', 'cyberpunk', 'steampunk', 'paranormal', 'modern', 'ninja', 'drama', 'hard science-fiction']

function genre(){
 var genreA = randomPick(genres);
 var genreB = randomPick(genres);
 var genreC = randomPick(genres);
 var genreNum = Math.floor(Math.random() * (3)) + 1;
 var genreArray = [genreA, genreB, genreC];
 var genreText = '';
 for (i = 0; i < genreNum; i++) {
   genreText += genreArray[i] + ' ';
 }
 print(genreText);
}

// Event

var events = ['you lose something important', 'you find out you\'re surrounded', 'the police are trying to arrest you', 'night falls', 'it begins to rain', 'you stumble upon a wild animal', 'you stumble upon a terrible creature', 'your enemies catch up to you', 'you are offered a bribe', 'you stumble into something sinister', 'you come upon something to good to pass up', 'you see a "Help Wanted" sign', 'you overhear something interesting', 'a natural disaster strikes', 'you are wrongfully imprisoned', 'a robbery', 'a chance meeting', 'a critical summons', 'you are drafted', 'you are deputized', 'you are accused of something', 'you are mistaken for somebody else', 'you find an interesting item', 'a kidnapping occurs', 'you come across an obtacle to your travels', 'you come across something wonderful', 'you come across a merchant', 'you come across a con man', 'you get sick', 'a dangerous creature is nearby', 'you fall terribly ill', 'a rare animal crosses your path', 'you see someone you know', 'you realize someone is following you', 'you find an undiscovered area', 'you are challenged to a duel', 'you are challenegd to a battle to the death', 'a silent alarm goes off', 'you find a dead body', 'you suspect there may be a mole in your midst', 'the lights go out', 'the cavalry arrives', 'backup arrives', 'a critical piece of your equipment breaks', 'they decided they could never be friends with you again', 'it turns out you were wrong', 'it turns out it\'s a trap', 'your cover is blown', 'they turn out to be an impostor', 'you come across a derelict', 'you fall through a portal', 'you get a terrible feeling', 'you find something impossible', 'you fall in love', 'an inexplicable rage overcomes you', 'you run into a childhood friend', 'you come across a dying person, mumbling to themself and clutching something in their hands', 'you have no memories', 'you stumble across an incredible secret', 'you hear a strange rumor', 'you meet someone', 'someone says or does something offensive', 'you are bitten by something strange', 'you enter an anomolous field', 'you set in motion something far greater than you know', 'the war begins', 'you are accused of being a traitor', 'a kiss', 'someone betrays you', 'you collapse', 'the last piece of the puzzle slides into place', 'a heated argument begins', 'you find a child', 'your actions backfire', 'your wish comes true', 'it turns out it was all a lie', 'it turns out it was you all along', 'you find someone who looks exactly like you', 'it all goes wrong', 'things start looking up', 'it turns out they were in on it all along', 'someone makes a tortured confession', 'you hear a mysterious song', 'you meet a celebrity', 'are distracted at a critical moment', 'someone has a change of heart', 'it turns out someone you thought was dead, wasn\'t', 'there\'s an eerie howl in the distance', 'unexpectedtly, someone or something attacks', 'there are tigers', 'a being of phenomenal power stops by for a chat', 'you regret everything', 'you find something precious',]

function eventGen() {
 var event = randomPick(events);
 print(event);
}

// Setting

var settings = [ "an artisan's workshop", 'a back alley', 'a bank', 'a bathroom', 'a beach', 'a black market', 'a bountiful kingdom', 'a brothel', 'a building site', 'a bunker', 'a bureaucratic building', 'a burned building', 'a bustling metropolis', 'a busy intersection', 'a cafe', 'a cafeteria', 'a calm harbor', 'a canyon', 'a casino', 'a castle', 'a cave', 'a cemetery', 'a church', 'a circus', 'a city beneath the waves', 'a city', 'a closet', 'a comfortable home', 'a conservatory', 'a cottage', 'a courtroom', 'a crack in the wall', 'a crowded space', 'a den of dangerous beasts', 'a dock', 'a domed city', 'a drab and boring place', 'a dungeon', 'a factory', 'a farm', 'a field of wheat', 'a field of wildflowers', 'a field with animals grazing', 'a floating city', 'a forbidden chamber', 'a forsaken wasteland', 'a fortress', 'a garbage dump', 'a gathering of like minds', 'a giant tree', 'a great estate', 'a hidden compartment', 'a high-stakes chase', 'a hole in the ground', 'a hospital', 'a hub of multiculturalism', 'a huge statue', 'a hunting cabin', 'a kitchen', 'a shifting labyrinth', 'a lake', 'a library', 'a loading bay', 'a mansion', 'a marketplace', 'a meadow', 'a moderate autumn', 'a monastery', 'a morgue', 'a mountaintop', 'a museum', 'a park', 'a pasture', 'a peaceful fishing village', 'a pit', 'a place of leisure', 'a place of madness', 'a place of suffering', 'a pleasant spring', 'a power station', 'a prison', 'a public bath', 'a research facility', 'a resort', 'a restaurant', 'a row of connected buildings', 'a row of townhouses', 'a sacred spot', 'a sanitarium', 'a school', 'a secluded clearing', 'a secret door', 'a sentient location', 'a sewer', 'a shop', 'a shrine', 'a space full of odds and ends', 'a sports arena', 'a squalid hovel', 'a squat building', 'a store', 'a sumptuous garden', 'a supply depot', 'a swamp', 'a swanky hotel', 'a sweltering summer', 'a tall building', 'a tavern', 'a temperate forest', 'a theater', 'a trading post', 'a university', 'a volcano', 'a war-torn countryside', 'a warehouse', 'a watchtower', 'a waterfall', 'a weekend getaway', 'a workshop', 'above the clouds', 'an abandoned building', 'an ancient monument', 'an apartment building', 'an apothecary', 'an art gallery', 'deep underground', 'an emergency room', 'an escape pod', 'an icy winter', 'an inn', 'an island', 'an observation dome', 'another plane', 'at home', 'changing times', 'in space', 'in the future', 'mysterious ruins', 'on a ship', 'out west', 'river rapids', 'stormy seas', 'surrounded by mist', 'surrounded by stacks of books', 'the arctic', 'the desert', 'the plains', 'the rainforest', 'the savanna', 'under the light of two moons', 'underground']

function setting() {
 var settingA = randomPick(settings);
 var settingB = randomPick(settings);
 var settingC = randomPick(settings);
 var settingNum = Math.floor(Math.random() * (3)) + 1;
 var settingArray = [settingA, settingB, settingC];
 var settingText = '';
 for (i = 0; i < settingNum; i++) {
   settingText += settingArray[i] + '... ';
 }
 print(settingText);
}

// Item

var items = ["object d'art", 'access card', 'all-terrain vehicle', 'amphora', 'ancient artifact', 'ancient bone', 'animal', 'animalistic talisman', 'apron', 'axe', 'backpack', 'badge with a sigil', 'bag of holding', 'bag of tricks', 'ball of yarn', 'barrel', 'bathtub', 'bell', 'belt with pouches', 'belt', 'bit of elastic', 'bit of string', 'black powder', 'blanket', 'blue bucket', 'blue sphere', 'boat', 'boat', 'bolt of cloth', 'bolt', 'bomb', 'book of riddles', 'bottle', 'bottle of a beverage', 'bottle of oil', 'bottle of pills', 'box making small noises', 'box of chocolates', 'brown backpack', 'bucket', 'buckle', 'bulky glasses', 'bundle of netting', 'cable', 'calculator', 'carnivorous animal', 'cheap trinket', 'chisel', 'cleaning implement', 'coffin', 'coil of rope', 'communication device', 'complex puzzle', 'container of tea', 'cooling apparatus', 'cortical implant', 'crossbow', 'crowbar', 'crown', 'crystal sphere', 'crystal', 'cudgel', 'curious biological remnant', 'dagger', 'dangling earring', 'decent amount of water', 'deck of cards', 'decorative comb', 'deoderant', 'device with many buttons', 'distance-seeing tool', 'doll', 'domesticated animal', 'dress', 'drinking glass', 'dusting of sulphur', 'energy source', 'exotic plant', 'exotic portal', 'exotic weapon', 'expensive writing implement', 'extra-ordinary shield', 'fainting couch', 'feather', 'fiendish puzzle-box', 'filtering device', 'fine chain', 'fire starter', 'first aid kit', 'fishing gear', 'fishing rod', 'flag', 'flail', 'flare', 'flask of unknown liquid', 'flower', 'flying animal', 'flying craft', 'folding chair', 'folding fan', 'form of hovering transportation', 'form of skin protection', 'fossil', 'gardening tool', 'general-purpose adhesive', 'giant gong', 'glider', 'goblet', 'grappling hook', 'green backpack', 'grooming kit', 'gun', 'hairbrush', 'hammer', 'hammock', 'hankie', 'harpoon', 'hat', 'headscarf', 'heating apparatus', 'heavy chain', 'helmet', 'holy symbol', 'holy text', 'hookah', 'horn', 'huge statue', 'image-capturing device', 'implement of legend', 'important message', 'inner tube', 'intelligent item', 'interesting rock', 'interesting text', 'intriguing lure', 'item of clothing', 'item of fine lace', 'jar of preserves', 'jewelled necklace', 'jewelry box', 'joke item', 'jug', 'jumpsuit', 'key', 'kind of harness', 'kit of art supplies', 'knife', 'ladder', 'large animal', 'large bag', 'large basin', 'large kite', 'light shirt', 'light source', 'lock', 'lockbox', 'locket', 'long pole', 'lucky ticket', 'mace', 'magnifying glass', 'map', 'marble', 'mask', 'maul', 'mechanical spare part', 'metal bucket', 'metal spike', 'minature world', 'mirror', 'moving picture', 'mug', 'multi-function tool', 'musical instrument', 'mysterious paste', 'mysterious spore', 'native artifact', 'navigational aid', 'nut', 'official certificate', 'old memento', 'orb of power', 'other-planar scanner', 'package of spices', 'package of trail rations', 'packet of biscuits', 'packet of jerky', 'painting', 'pair of gloves', 'pair of goggles', 'pair of handcuffs', 'pair of nunchuks', 'pair of pants', 'pair of scissors', 'pair of shoes', 'pair of socks', 'pair of strange glasses', 'pair of sturdy waterproof shoes', 'pair of underwear', 'pair of working boots', 'part of a crumbling wall', 'periscope', 'picnic lunch', 'piece of candy', 'peice of chalk', 'piece of ceremonial clothing', 'piece of climbing equipment', 'piece of cold weather gear', 'piece of equipment for travelling through snow', 'piece of fruit', 'piece of jewelry', 'piece of meat', 'piece of riding equipment', 'piece of rotting food', 'piece of scrap metal', 'piece of traditional art', 'pile of detritus', 'pile of dust', 'pillow', 'pin', 'pipe', 'portable shelter', 'portrait', 'pouch', 'power tool', 'powerful ointment', 'powerful talisman', 'powerful weapon', 'precious statue', 'private journal', 'projectile weapon', 'protective field', 'raft', 'red sphere', 'religious artifact', 'riding animal', 'rift-born sphere', 'ring of power', 'ring', 'robe', 'rocking chair', 'rod', 'rubber ball', 'saber', 'sash', 'scimitar', 'screw', 'seed', 'set of armor', 'set of chimes', 'set of dice', 'shell', 'shimmering sphere', 'shiny coin', 'ship', 'shortsword', 'shovel', 'sickle', 'signaling device', 'simple case', 'skirt', 'sled', 'sleeping bag', 'small animal', 'small bell', 'small bottle of perfume', 'small purse', 'small statue', 'soft toy', 'spatula', 'special soap', 'spigot', 'spool of string', 'sprig of a plant', 'star chart', 'stunning flower', 'sturdy pack', 'stylish hat', 'stylized mask', 'supply of ammunition', 'sword', 'tacky knick-knack', 'thick gel', 'tight spring', 'time-keeping method', 'tin', 'tough rope', 'towel', 'toy weapon', 'tranquilizer', 'travel record', 'tribal artifact', 'trowel', 'two-handed sword', 'type of medicine', 'ugly sweater', 'umbrella', 'unusual hat', 'vermin repellant', 'vial of acid', 'vial of poison', 'vial of solvent', 'vital signs monitor', 'vitamin supplement', 'vizer', 'walking stick', 'wall decoration', 'warm beverage', 'watch', 'whip', 'whistle', 'wide bangle', 'wig', 'wind-up automoton', 'woven basket', 'wrench', 'writing implement']

function genItem() {
 var item = aan(randomPick(items));
 print(item);
}

// Quest

var questTypeList = ['return', 'retrieve', 'destroy', 'steal', 'find and explore', 'explore', 'clear out', 'rescue', 'escort', 'prevent the plans of', 'spy on', 'negotiate with', 'survive', 'escape from', 'investigate', 'discover the fate of', 'expose the secrets of', 'research', 'hunt down', 'protect']
// 'put a stop to'

var questItems = [ "object d'art", 'ancient artifact', 'ancient bone', 'ancient monument', 'ancient tome', 'animal', 'animalistic talisman', 'axe', 'axe', 'badge with a sigil', 'bell', 'belt', 'black powder', 'blanket', 'blue sphere', 'boat', 'bomb', 'book of riddles', 'bottle of pills', 'box making small noises', 'bulky glasses', 'calculator', 'carnivorous animal', 'cheap trinket', 'coffin', 'coil of rope', 'communication device', 'container of tea', 'crown', 'crystal sphere', 'crystal', 'cudgel', 'curious biological remnant', 'dagger', 'dangling earring', 'decent amount of water', 'deck of cards', 'decorative comb', 'device with many buttons', 'distance-seeing tool', 'doll', 'domesticated animal', 'energy source', 'exotic portal', 'exotic weapon', 'expensive writing implement', 'extra-ordinary shield', 'feather', 'fiendish puzzle-box', 'filtering device', 'fine chain', 'fire starter', 'flag', 'flail', 'flask of unknown liquid', 'flying animal', 'flying craft', 'folding fan', 'form of hovering transportation', 'fossil', 'fruit', 'gardening tool', 'giant gong', 'goblet', 'gun', 'hammer', 'harpoon', 'headscarf', 'headscarf', 'heavy chain', 'helmet', 'holy symbol', 'holy text', 'hookah', 'horn', 'huge statue', 'implement of legend', 'important files', 'important message', 'intelligent item', 'interesting text', 'intriguing lure', 'item of clothing', 'item of fine lace', 'jewelled necklace', 'jewelry box', 'key', 'knife', 'large animal', 'large basin', 'lock', 'lockbox', 'locket', 'lucky ticket', 'mace', 'map', 'mask', 'maul', 'minature world', 'mirror', 'moving picture', 'multi-function tool', 'musical instrument', 'mysterious flower', 'mysterious paste', 'mysterious spore', 'native artifact', 'navigational aid', 'official certificate', 'official document', 'old memento', 'orb of power', 'package of spices', 'painting', 'pair of gloves', 'pair of gloves', 'pair of goggles', 'pair of nunchuks', 'pair of strange glasses', 'piece of ceremonial clothing', 'piece of fruit', 'piece of traditional art', 'pillow', 'portrait', 'pouch', 'powerful ointment', 'powerful talisman', 'powerful weapon', 'precious art supplies', 'precious statue', 'private journal', 'projectile weapon', 'protective field', 'red sphere', 'religious artifact', 'riding animal', 'ring of power', 'ring', 'rod', 'saber', 'sash', 'scimitar', 'seed', 'set of armor', 'shell', 'shell', 'shimmering sphere', 'ship', 'shortsword', 'shovel', 'sickle', 'signaling device', 'simple case', 'small animal', 'small bell', 'small bottle of perfume', 'small purse', 'small statue', 'spool of string', 'sprig of a plant', 'star chart', 'stone', 'stunning flower', 'stylized mask', 'sword', 'sword', 'tablet with important writings', 'tacky knick-knack', 'thick gel', 'tranquilizer', 'travel record', 'tribal artifact', 'two-handed sword', 'type of medicine', 'vial of acid', 'vial of poison', 'vial of solvent', 'vizer', 'walking stick', 'wall decoration', 'watch', 'watch', 'weapon', 'whip', 'whistle', 'wide bangle', 'wind-up automoton', 'writing implement']

var questSettings = [ 'a back alley', 'a beach', 'a black market', 'a bountiful kingdom', 'a brothel', 'a bunker', 'a burned building', 'a bustling metropolis', 'a canyon', 'a castle', 'a cave', 'a cemetery', 'a church', 'a city beneath the waves', 'a city', 'a conservatory', 'a crack in the wall', 'a den of dangerous beasts', 'a domed city', 'a dungeon', 'a factory', 'a farm', 'a floating city', 'a forbidden chamber', 'a forsaken wasteland', 'a fortress', 'a garbage dump', 'a great estate', 'a hidden compartment', 'a hunting retreat', 'a lake', 'a land above the clouds', 'a library', 'a lonely outpost', 'a mansion', 'a monastery', 'a morgue', 'a mountaintop', 'a museum of curiosities', 'a mysterious shop', 'a pit', 'a power station', 'a prison', 'a relic in space', 'a research facility', 'a resort', 'a rift in time', 'a ruined ship', 'a sacred spot', 'a sanitarium', 'a school', 'a secluded clearing', 'a seeming utopia', 'a sentient location', 'a sewer', 'a shifting labyrinth', 'a shrine', 'a squalid hovel', 'a sumptuous garden', 'a swamp', 'a swanky hotel', 'a tall building', 'a temperate forest', 'a trading post', 'a volcano', 'a war-torn countryside', 'a waterfall', 'a workshop', 'an abandoned building', 'an abandoned hospital', 'an ancient archive', 'an ancient monument', 'an apothecary', 'an island', 'an observation dome', 'mysterious ruins', 'river rapids', 'stormy seas', 'the arctic', 'the desert', 'the plains', 'the rainforest', 'the savanna', 'the underground']

var survive = ['an icy winter', 'a deadly plague', 'a bandit attack', 'a terrible storm', 'a famine', 'a war', 'a coup', ' a government collapse', 'a volcano', 'a typhoon', 'an invasion', 'a new dark age', 'an assasination attempt', 'a week with your family', 'in a web of deception', 'a trek across the desert', 'a horrific betrayal', 'an uprising', 'in endless night', 'a plague of locusts']

// creature/monster

function quest() {
 var questType = randomPick(questTypeList);
 var questText = '';
 var item = aan(randomPick(questItems))
 var loc = randomPick(questSettings)
 var obstacle = randomPick(survive)
 var age = randomPick(ages)
 var sex = randomPick(sexes)
 var char = ''
 if (age == 'small child' || age == 'child' || age == 'teenager' && sex != 'person of unusual gender'){
   char = aan(randomPick(characteristics)) + ' ' + sex + ' ' + age
 } else {
   char = aan(randomPick(characteristics)) + ' ' + age + ' ' + sex
 }

 switch(true) {
   case (questType == 'return' || questType == 'retrieve' || questType == 'destroy' || questType == 'steal'): // item only quests
     questText = questType + ' ' + item;
     break;
   case (questType == 'find and explore' || questType == 'explore' || questType == 'clear out'): // item only
     questText = questType + ' ' + loc;
     break;
   case (questType == 'rescue' || questType == 'escort' || questType == 'prevent the plans of' || questType == 'spy on' || questType == 'negotiate with'): // char only
     questText = questType + ' ' + char;
     humanYN = Math.random()
     if (humanYN > 0.75) {
       questText += ' of an unusual or monstrous species'
     }
     break;
   case ( questType == 'survive'): // obstacle only
     questText = questType + ' ' + obstacle;
     break;
   case (questType == 'escape from'):
     escape = randomPick([loc, char]);
     questText = questType + ' ' + escape;
     break;
   case (questType == 'investigate' || questType == 'discover the fate of' || questType == 'expose the secrets of' || questType == 'research' || questType == 'protect'):
     anything = randomPick([item, loc, char]);
     questText = questType + ' ' + anything;
     break;
   case (questType == 'hunt down'): // character or item
     charItem = randomPick([char, item]);
     questText = questType + ' ' + charItem;
     break;
 // prevent plans, spy on, negotiate with, escape from, hunt down
 }
 print(questText);
 }

//Color

function colorGet() {
 var R_value = Math.floor(Math.random() * (255));
 var G_value = Math.floor(Math.random() * (255));
 var B_value = Math.floor(Math.random() * (255));
 var rand_color = 'rgb(' + R_value + ", " + G_value + ", " + B_value + ')'
 document.getElementById("colorButton").style.backgroundColor = rand_color;
 print('color: ' + rand_color)
}

//Animal

function animal() {
 var animal = aan(randomPick(animalList));
 print(animal);
}

//Sense

var senseList = ['sound', 'feeling', 'smell'];

var soundList = ['the buzzing of angry bees', 'an echo', 'the clinking of coins', 'a low growl', 'tinkling bells', 'something skittering away', 'a loud whooping noise', 'meowing', 'someone speaking gibberish', 'ominous drums in the distance', 'a train whistle', 'screaming', 'a low hissing noise', 'someone singing out of tune', 'a hideous screetching noise', 'running water', 'paper rustling', 'an angelic choir', 'everything is completely silent', 'pealing laughter', 'a low snickering', 'animal calls', 'whispering', 'clicking', 'clicking and clacking', 'a clattering', 'sloshing liquid', 'marching', 'the rush of a waterfall', 'the babbling of a brook', 'drums', 'a meaty thud', 'shuffling steps', 'a sudden bang', 'a zap', 'thunder', 'grinding', 'gnashing of teeth', 'ranting and raving', 'a distinct click', 'a heartbeat', 'a pale face', 'celebration', 'a sharp demand', 'a wheedling tone', 'begging for mercy', 'running feet', 'something getting closer', 'cheering', 'a crowd', 'slurred speech', 'ringing', 'a calling horn', 'snickering', 'a preacher', 'screetching tires', 'something slithering', 'a beep', 'an accusation', 'frantic squealing', 'the scrape of a blade on something hard', 'whirring', 'purring', 'a haunting melody', 'a child\'s voice', 'giggling', 'a deep thrumming', 'something dripping', 'murmurs of appreciation', 'sounds of assent', 'clanking', 'drumming rain', 'a low hum', 'chattering teeth', ' a bellow', 'a cry of pain', 'wet coughing', 'pained wheezing', 'a bit of music', 'the cry of a bird of prey', 'discordant chanting', 'something grinding', 'splintering wood', 'heavy breathing', 'creaking and groaning', 'moaning', 'smashing china', 'birdsong', 'an explosion', 'rustling', 'splashing', 'murmuring', 'a roar', 'voices chanting', 'a bellow', 'rattling', 'bone snapping', 'a sneeze', 'slurping', 'sirens', 'retching', 'a low hissing', 'a booming voice', 'grinding gears', 'grunting', 'snorting', 'chewing', 'a slamming', 'the crash of waves', 'static', 'a one-sided conversation', 'a dark laugh', 'laughter', 'a sudden hush', 'an engine', 'a boom', 'bubbling', 'chopping', 'a clang', 'clanging', 'commands', 'cracking', 'crying', 'a creak', 'creaking', 'crunching', 'a crunch', 'footsteps', 'scratching', 'tearing', 'the whistling wind', 'whistling', 'the chirping of insects'];
var feelListSense = ['incredible hunger', 'heavy humidity', 'choking', 'ice in the veins', 'tacky stickiness', 'the touch of spectral hands', "can't breathe", 'a crawling sensation like a bug on skin', 'the temperature dropping sharply', "the overpowering urge to lick whatever they're paying attention to", 'a strong craving for a favorites food', 'something trying to escape from their stomach', 'the body burning', 'skin bubbling', 'sharp acceleration', 'a chill down the spine', 'hair standing on end', 'creeping pinpricks', 'heavy, dragging feet', 'aching feet', 'muscles seizing', 'a throbbing headache', 'exhaustion', 'a spasm or cramp', 'the caress of a warm breeze', 'the caress of a cool breeze', 'being inssubstantial', 'coarsely-grained wood', 'something squelching', 'leathery wings', 'a draining of blood', 'going pale', 'an oily substance', 'cold steel', 'nervously sweating', 'a gloomy aura', 'something lumpy', 'a need to sneeze', 'a gossamer-light touch', 'a rush of memories', 'being watched', 'eyes stinging', 'the burning of being too cold', 'humiliation', 'numbness', 'being hit on the head', 'something crumbling', 'something soggy', 'hitting thr ground', 'falling', 'slime', 'something gooey', 'downy feathers', 'something scuttling up a leg', 'warmth', 'fabric', 'hot, dry air', 'dryness', 'something nuzzling you', 'a twisted ankle', 'something rubbery', 'coils around the body', 'barbs catching', 'a sudden push', 'floating', 'being lifted', 'being trapped', 'a sudden stop', 'being poked', 'something in your eye', 'squirming under your skin', 'being crushed', 'crying', 'sharp, stabbing pain', 'dull, throbbing pain', 'something fizzy', 'an electric shock', 'something slippery', 'something tight around your wrists', 'something tight around your waist', 'a runny nose', 'being naked', 'being vulnerable', 'humiliation and shame', 'a splinter', 'hair being pulled', 'a rush of adrenaline', 'an impact', 'clamminess', 'peeling skin', 'being followed', 'someone right behind them', 'bones breaking', 'a passionte kiss', 'being feverish', 'the ground moving', 'dizziness', 'tipsiness', 'being in a dream', 'ears popping', 'mild irritation', 'being too full to move', 'a loss of balance', 'tickling', 'being crowded', 'tingling', 'of having forgotten something', 'crushing something underfoot', 'something smooth', 'something worn with time'];
var smellListSense = ['smoke', 'the seaside', 'rotting flesh', 'a strong scent of lavender', 'fear', 'citrus', 'the sharp scent of peppermint', 'a slight scent of almonds', 'fresh strawberries', 'dirty socks', 'cooking meat', 'vanilla', 'baking cookies', 'burning', 'ozone', 'something sickening sweet', 'wet earth', 'mothballs', 'ink and old paper', 'motor oil', 'a cloying sweetness', 'an exotic, floral aroma', 'zesty citrus', 'cedarwood', 'mould', 'something chemical', 'strong spirits', 'stale air', 'damp', 'flowery perfume', 'burnt plastic', 'hot tar', 'smoked ham', 'pine needles', 'nutmeg and spices', 'mothballs', 'sweat', 'violets', 'burning hair', 'exhaust', 'fried dough', 'soap', 'a barnyard', 'a sweaty animal', 'sausage', 'fruit', 'coconut', 'sulphur', 'death', 'age', 'burning candles', 'thick incense', 'moss and earth', 'paint', 'roses', 'honey', 'a public bathroom', 'dry hay', 'dust', 'sewage', 'clean laundry', 'snow', 'chocolate', 'mulch', 'baking bread', 'greasy food', 'a swamp', 'rain', 'cut grass', 'melted butter', 'clover', 'leather', 'chalk', 'sage', 'tea', 'air freshener', 'something bitter barely masked', 'jasmine', 'something putrid', 'wet fur', 'garlic', 'blood', 'springtime', 'ozone', 'spoiled milk', 'pencil shavings', 'bile', 'burning wood', 'charred flesh', 'cheese', 'damp vegetation', 'fish', 'lye', 'molten metal', 'rotting leaves', 'rotting fruit', 'wood', 'vanilla', 'cake', 'pumpkin', 'mixed berries', 'bamboo', 'marshmallow', 'banana', 'cucumber', 'popcorn', 'oatmeal', 'coffee', 'pina colada', 'sawdust', 'hazelnut', 'gingerbread', 'peaches', 'melon', 'earl grey tea', 'ginger', 'snow', 'apple', 'root beer', 'hibiscus', 'tulips', 'cinnamon', 'watermelon', 'cotton candy', 'fresh-cut grass', 'potpourri', 'bubblegum', 'caramel', 'pepper'];

 var soundModList = ['in the distance', 'nearby', 'from right behind you', 'from right beside you', 'from ahead', 'from behind', 'from under your feet']

function sense(){
	var senseType = randomPick(senseList);
	if (senseType == 'sound'){
		senseSnippet = randomPick(soundList) + ' ' + randomPick(soundModList);
	} else if (senseType == 'feeling'){
		senseSnippet = randomPick(feelListSense);
	} else if (senseType == 'smell'){
		senseSnippet = randomPick(smellListSense);
	}
	print('the ' + senseType + ' of ' + senseSnippet)
}