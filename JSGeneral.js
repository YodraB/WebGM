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