var ages = ['small child', 'child', 'teenager', 'young adult', 'young adult', 'adult', 'adult', 'adult', 'adult', 'middle aged', 'middle aged', 'middle aged', 'middle aged', 'old', 'old', 'ancient']

var sexes = [ 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'male', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'female', 'of unusual gender']

// Name generator

var numS = [1, 1, 1, 1, 2, 2, 2, 3, 3]
var vowels = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'au', 'ea', 'ee', 'ei', 'ey', 'ia', 'ie', 'io', 'oa', 'oi', 'oo', 'ou', 'oy', 'ua', 'ui']
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'bl', 'br', 'ch', 'dr', 'fl', 'fr', 'gh', 'gl', 'gr', 'kl', 'kr', 'pl', 'pr', 'sh', 'shr', 'sl', 'st', 'th', 'vl', 'wr']
var finals = ['b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'ch', 'nd', 'sh', 'st', 'th']

function nameGen() {
 var syllable = [];
 var sLength = randomPick(numS);
 var vOrC = Math.random();

 //First letter
 if (vOrC > 0.66) { // i.e. 33% chance of vowel
   syllable.push(randomPick(vowels));
 } else {
   syllable.push(randomPick(consonants));
 }

 //additional syllables
 for (i = 0; i < sLength; i++) {
   if (inside(syllable[syllable.length - 1], vowels) == true) { // when the last letter was a vowel   inside(syllable[syllable.length], vowels) == true
     syllable.push(randomPick(consonants));
   } else { // when the last letter was not a vowel
     final = Math.random();
     if (final > 0.75) {
       syllable.push(randomPick(vowels) + randomPick(finals))
     } else {
       syllable.push(randomPick(vowels));
     }
   }
 }

 //Last final for single syllables
 if (sLength == 1 && inside(syllable[1], vowels) == true) {
   fFinal = Math.random();
   if (fFinal > 0.25) {
     syllable.push(randomPick(finals))
   }
 }

 //Turning result into string
 result = ''
 for (n = 0; n < syllable.length; n++) {
   result += syllable[n];
 }
 result = result.replace(result.charAt(0), result.charAt(0).toUpperCase())
 print(result);

}

// Character Generator - age, sex, characteristic

function character() {
 var age = randomPick(ages);
 var sex = randomPick(sexes);
 var char = randomPick(characteristics);
 print(age + ', ' + sex + ', ' + char); 
}

// Just Characteristic

function characteristic() {
	var char = randomPick(characteristics);
	print(char);
}

// Role

var roles = ['administrator', 'adventurer', 'advisor', 'agent', 'ambassador', 'alchemist', 'analyst', 'animal trainer', 'antihero', 'apothocary', 'arbiter', 'archeologist', 'archer', 'artisan', 'artist', 'assassin', 'astronaut', 'athlete', 'bandit', 'barbarian', 'barber', 'bard', 'beggar', 'beserker', 'biologist', 'bounty hunter', 'brigand', 'captain', 'carpenter', 'chancellor', 'charlatan', 'cleric', 'clerk', 'counsellor', 'courtesan', 'craftsman', 'criminal', 'dancer', 'detective', 'diplomat', 'doctor', 'duelist', 'empath', 'engineer', 'exile', 'explorer', 'farmer', 'fighter', 'gambler', 'guardian', 'gladiator', 'gunslinger', 'harbringer',  'healer', 'hero', 'hired gun', 'hunter', 'impersonator', 'informant', 'information broker', 'intellectual', 'inventor', 'jester', 'judge', 'knight', 'laborer', 'leader', 'magic user', 'magician', 'maniac', 'marauder', 'marshal', 'mason', 'mastermind', 'mentor', 'mercenary', 'merchant', 'messenger', 'miner', 'monk', 'mystic', 'ninja', 'nomad', 'officer', 'outcast', 'paladin', 'performer', 'philosopher', 'pilot', 'pirate', 'poet', 'police', 'politician', 'priest', 'prostitute', 'psychic', 'ranger', 'rogue', 'sailor', 'salaryman', 'samurai', 'scientist', 'scholar', 'servant', 'settler', 'shaman', 'shopkeep', 'singer', 'smuggler', 'soldier', 'spy', 'strategist', 'surgeon', 'survivor', 'tactician', 'teacher', 'technician', 'thief', 'thrall', 'thug', 'tinkerer', 'tracker', 'trader', 'trickster', 'vigilante', 'wanderer', 'warden', 'warlord', 'warrior', 'writer', 'zealot']

function getRole() {
 var role = randomPick(roles);
 print(role);
}

//Motivation

var motVerb = ['abduct', 'abuse', 'access', 'accompany', 'account', 'achieve', 'acquire', 'administer', 'advance', 'advocate', 'agonize', 'aid', 'assist', 'attempt', 'attend', 'blight', 'burden', 'chronicle', 'collaborate', 'communicate', 'compel', 'complete', 'compose', 'comprehend', 'conquer', 'construct', 'contact', 'convey', 'create', 'damage', 'defile', 'depress', 'destroy', 'detect', 'deter', 'determine', 'develop', 'discourage', 'discover', 'distress', 'drive', 'embrace', 'encourage', 'establish', 'execute', 'explain', 'follow', 'fulfill', 'guard', 'guide', 'hinder', 'implement', 'indulge', 'inform', 'institute', 'interact', 'join', 'learn', 'maintain', 'manage', 'obtain', 'offend', 'operate', 'oppress', 'overthrow', 'patronize', 'persecute', 'plunder', 'possess', 'prepare', 'process', 'proclaim', 'produce', 'progress', 'promote', 'publicize', 'pursue', 'realize', 'record', 'refine', 'relate', 'report', 'review', 'rob', 'secure', 'seek', 'shepherd', 'spoil', 'steal', 'strive', 'suggest', 'support', 'suppress', 'take', 'undermine', 'understand', 'weaken', 'work']
var motNoun = ['academia', 'advice', 'affluence', 'allies', 'animals', 'atrocities', 'beauty', 'charity', 'communications', 'compassion', 'composure', 'contraband', 'cowardice', 'criminals', 'cults', 'deprivation', 'disbelief', 'discretion', 'discrimination', 'dissonance', 'distress', 'dreams', 'enemies', 'enlightenment', 'envy', 'expertise', 'faith', 'family', 'force', 'freedom', 'friends', 'ghosts', 'gluttony', 'greed', 'happiness', 'hardship', 'harmony', 'hate', 'industry', 'inequality', 'intelligence', 'justice', 'knowledge', 'laziness', 'legends', 'lies', 'literature', 'love', 'lust', 'magic', 'medicines', 'military', 'moderation', 'modesty', 'music', 'myths', 'narcissism', 'nature', 'old religions', 'opulence', 'pain', 'patience', 'peace', 'pleasure', 'poverty', 'pride', 'progress', 'propaganda', 'prosperity', 'purity', 'racism', 'religion', 'resources', 'revolution', 'riddles', 'science', 'secret societies', 'sensuality', 'servitude', 'slavery', 'spirits', 'stories', 'strength', 'success', 'technology', 'the church', 'the elite', 'the forsaken', 'the government', 'the law', 'the oppressed', 'the poor', 'the populace', 'the public', 'the wealthy', 'the world', 'valor', 'vigilance', 'wealth', 'wrath', 'zeal']

function motivation(){
	mot = randomPick(motVerb) + ' ' + randomPick(motNoun);
	print(mot);
}


// Quirk

var quirks = ['believe the end is near', 'know a secret', 'can juggle', 'can\'t swim', 'are afraid of the dark', 'collect something as a hobbby', 'love games and jokes', 'get lost easily',  'have unusually keen senses', 'have an unusual form of transportation', 'are afraid of heights', 'have tea every afternoon', 'have an allergy', 'have a big appetite', 'have a great sense of direction', 'don\'t understand sarcasm', 'have a distinct accent', 'give everyone nicknames', 'know a lot of weird trivia', 'like scary stories', 'are a vegetarian', 'laugh a lot', 'are overly friendly', 'have a sensitive stomach', 'are double-jointed', 'are more honest than maybe they should be', 'are extremely passionate about politics', 'carry a lucky charm with them everywhere', 'have a lovely singing voice', 'once dyed their hair an unusual color', 'can hold their breath a really long time', 'have a younger sibling', 'have a lot of siblings', 'know a lot about a particular type of animal', 'can\'t stop talking', 'fret about ethics', 'talk with their hands', 'have an annoying laugh', 'snore loudly', 'tell corny jokes', 'talk to themselves', 'whistle when bored', 'use foreign words gratuitously', 'often forget what they were saying partway through', 'twitch occasionally', 'have a nasal voice', 'speak in a breathy tone', 'have a lisp', 'are always chewing something', 'can\'t sit still', 'won\'t look you in the eye', 'are always asking for confirmation', 'speak in an old-fashioned way', 'get cold easily', 'fuss with their appearance', 'tap their chin when they\'re thinking', 'have a foul mouth', 'stutter when nervous', 'have a big nose', 'are staggeringly beautiful', 'have big ears', 'have unusually-shaped ears', 'wear noticeable earrings', 'have perfect white teeth', 'have a crooked smile', 'have facial piercings', 'wear glasses', 'wear a mask', 'have a large scar across their face', 'wear face paint', 'have a delicate face', 'have flowers in their hair', 'have an unusual hairstyle', 'blush easily', 'can jump really high', 'can hold their breath for a really long time', 'have a large tattoo', 'have six toes on their left foot',  'are surprisingly strong', 'have a prosthetic hand', 'grind their teeth in thier sleep', 'have an embarrassing scar', 'have weatherbeaten skin', 'wear loose, flowing clothing', 'wear clothing all of one color', 'wear clothing unusual for their occupation', 'wear lots of bangles and jewelry', 'wear clothing with a great many pockets', 'prefer the clothing of the opposite sex', 'are possesed', 'are cursed', 'have only two teeth', 'have a gold tooth', 'have only one leg', 'have a limp', 'have a slight hunchback', 'have trouble with back pain', 'have an animal companion', 'are fiercely loyal', 'were an illegitimate child', 'were raised in a cult', 'have an alterior motive', 'are bearing a grudge', 'have a prophecy about them', 'were born under a bad omen', 'are cold an calculating', 'are stupidly brave', 'are blessed by a god', 'have an interesting birthmark', 'come from a well-known family', 'are dangerously curious', 'were once a slave', 'are a natural diplomat', 'are incredibly lucky', 'are an orphan', 'come from a non-traditional family', 'are strangely alluring', 'are devoted to a dead god', 'are impervious to pain', 'are a bit unhinged', 'are adopted', 'are an avid reader', 'are a child of the streets', 'are a natural-born leader', 'have friends in high places', 'have friends in low places', 'never show strong emotion', 'never give up', 'have a twin', 'speak in a stilted, formal way', 'have special dietary needs', 'compulsively interrupt people while they\'re talking', 'tend to take stupid bets or dares',  'have an unlikely addiction', 'habitually wear a strange or unusual accessory', 'speak in the third person', 'speak in a monotone', 'don\'t talk much', 'are easily distracted', 'speak in metaphors', 'were artificially conceived', 'enjoy ancient languages', 'collect swearwords', 'adopt dramatic poses', 'always lean on things', 'are always slouching', 'wear strong perfume or cologne', 'smell bad', 'keep the old ways',  'prefer to rely on their instincts', 'enjoy giving gifts', 'laugh at inappropriate times', 'always have to have the latest newfangled invention', 'never talk about their past', 'are wary of publicity', 'really hate losing', 'hate "roughing it"', 'are extremely disorganized', 'follow a complex code of honor', 'have an unusual obsession', 'have an over-active libido', 'are asexual', 'have an unusual sexual preference', 'are always flirting', 'are an adrenaline junkie', 'have a morbid fascination with death and disease', 'are a bit paranoid', 'struggle with delusions', 'are well-off', 'fret about their health', 'walk with a cane', 'have a disability', 'sing soprano', 'share way too much information', 'never follow the rules']

function quirk() {
 var quirk = randomPick(quirks);
 print ("they " + quirk);
}

// Friendliness

var fof = ['worships', 'loves', 'likes', 'is friendly with', 'is neutral towards', 'isn\'t sure they like', 'dislikes', 'hates', 'truly loathes']

function friend() {
 var friendly = randomPick(fof);
 print (friendly + " the person");
 }