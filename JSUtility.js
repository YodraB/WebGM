// General Functions

function randomPick(array) {
 var randomNumber = Math.floor(Math.random() * (array.length));
 return array[randomNumber];
}

function print(str) {
 if (document.getElementById("display").value == '') {
   document.getElementById("display").value = str;
 } else {
   document.getElementById("display").value = (document.getElementById("display").value + " \n" + str);
}
}

function inside(needle, haystack) {
 var count = haystack.length;
   for(var i = 0; i < count; i++)
   {
       if(haystack[i] === needle){
         return true;
       }
   }
   return false;
}

function aan(string) {
 var firstLetter = string[0]
 if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
   string = 'an ' + string
 } else {
   string = 'a ' + string
 }
 return string
}

// Multiple-use variables

var characteristics = ['abrasive', 'absent-minded', 'adaptable', 'adventurous', 'agreeable', 'agressive', 'aimless', 'airy', 'all-loving', 'aloof', 'amoral', 'ambitous', 'angry', 'anxious', 'apathetic', 'argumentative', 'arrogant', 'artistic', 'articulate', 'aspiring', 'assertive', 'athletic', 'attractive', 'barbaric', 'benevolent', 'bewildered', 'bizarre', 'bland', 'boisterous', 'bold', 'breezy', 'brilliant', 'brutal', 'businesslike', 'busy', 'calculating', 'callous', 'calm', 'cantankerous', 'capable', 'captivating', 'careless', 'caring', 'casual', 'cautious', 'charismatic', 'charming', 'cheerful', 'childish', 'clumsy', 'competitive', 'cold', 'concilliatory', 'conceited', 'confident', 'conformist', 'confused', 'conscientious', 'considerate', 'contemplative', 'cooperative', 'courageous', 'courteous', 'cowardly', 'clever', 'crass', 'creative', 'crippled', 'crude', 'cruel', 'cultured', 'cunning', 'curious', 'cute', 'cynical', 'daring', 'debonair', 'decent', 'deceptive', 'decisive', 'dedicated', 'delicate', 'desperate', 'destructive ', 'determined', 'devious', 'dignified', 'disciplined', 'disconcerting', 'discreet', 'dishonest', 'disrespectful', 'distractible', 'disturbing', 'dogmatic', 'domineering', 'dour', 'down-to-earth', 'dramtic', 'dreamy', 'driven', 'droll', 'dull', 'dutiful', 'dynamic', 'earnest', 'earthy', 'educated', 'egocentric', 'elegant', 'emotional', 'empathetic', 'energetic', 'enigmatic', 'enthusiastic', 'erratic', 'faithful', 'fanatical', 'far-sighted', 'fatalistic', 'fearful', 'feminine', 'fickle', 'flamboyant', 'flexible', 'focused', 'foolish', 'forceful', 'forgetful', 'forgiving', 'formal', 'forthright', 'freethinking', 'friendly', 'frightening', 'frugal', 'fun-loving', 'funny', 'gallant', 'genrous', 'gentle', 'genuine', 'gloomy', 'good-natured', 'gracious', 'greedy', 'grim', 'grumpy', 'guileless', 'gullible', 'hardworking', 'haughty', 'hearty', 'helpful', 'heroic', 'hesitant', 'high-minded', 'high-spirited', 'honest', 'honorable', 'humble', 'hypnotic', 'idealistic', 'ignorant', 'imaginative', 'impatient', 'impersonable', 'imposing', 'impressionable', 'impulsive', 'incisive', 'inconsiderate', 'incorruptable', 'indecisive', 'individualistic', 'innovative', 'inoffensive', 'insane', 'insecure', 'insightful', 'insouciant', 'intelligent', 'intellectual', 'intense', 'intimidating', 'intuitive', 'irreverant', 'irritable', 'jovial', 'kind', 'knowledgeable', 'lazy', 'leaderly', 'logical', 'lonely', 'lovable', 'loyal', 'lucky', 'magnanimous', 'masculine', 'mature', 'meddlesome', 'mellow', 'messy', 'methodical', 'meticulous', 'miserable', 'miserly', 'misguided', 'modest', 'modern', 'moody', 'morbid', 'mystical', 'naive', 'narcissistic', 'narrow-minded', 'neat', 'neurotic', 'noncommittal', 'obnoxious', 'observant', 'obsessive', 'old-fashioned', 'optimistic', 'organized', 'outspoken', 'paranoid', 'parental', 'passionate', 'patient', 'patriotic', 'peaceful', 'perceptive', 'perfectionist', 'personable', 'persuasive', 'petulant', 'placid', 'playful', 'pompous', 'popular', 'practical', 'precise', 'predictable', 'preoccupied', 'prescient', 'pretentious', 'prim', 'principled', 'private', 'progressive', 'protective', 'proud', 'prudent', 'purposeful', 'quiet', 'rational', 'reflective', 'regretful', 'repentant', 'relaxed', 'reliable', 'religious', 'reserved', 'resourceful', 'respectful', 'responsible', 'restrained', 'retiring', 'rowdy', 'sadistic', 'sarcastic', 'secretive', 'self-concious', 'scrupulous', 'selfish', 'selfless', 'self-critical', 'self-denying', 'self-sufficient', 'sensitive', 'sensual', 'simple', 'skeptical', 'skilled', 'sleazy', 'sociable', 'solemn', 'somber', 'sophisticated', 'stern', 'stoic', 'strict', 'strong', 'strong-willed', 'stubborn', 'studious', 'stylish', 'suave', 'superstitious', 'suspicious', 'sympathetic', 'tidy', 'timid', 'tolerant', 'tough', 'tractable', 'trendy', 'trusting', 'twitchy', 'uncomplaining', 'unchanging',  'undemanding', 'unhurried', 'uninhibited','understanding', 'unlucky', 'vacuous', 'vindictive', 'vivacious', 'vulnerable', 'weak', 'well-bred', 'well-meaning', 'well-read', 'well-rounded', 'whimsical', 'wise', 'witty']

var animalList = [ 'albatross', 'alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo','baboon', 'badger', 'bat', 'bear', 'beaver', 'beetle', 'buffalo', 'butterfly', 'camel', 'cat', 'chameleon', 'cheetah', 'chicken', 'chimp', 'chinchilla', 'cobra', 'cow', 'crab', 'crane', 'crow', 'deer', 'dog', 'dolphin', 'donkey', 'dragon', 'dragonfly', 'duck', 'eagle', 'eel', 'elephant', 'emu', 'falcon', 'fish', 'flamingo', 'fox', 'frog', 'giraffe', 'goat', 'goose', 'hamster', 'hedgehog', 'heron', 'hippo', 'hornet', 'horse', 'hummingbird', 'hyena', 'jackal', 'jaguar', 'jellyfish', 'kangaroo mouse', 'kangaroo', 'koala', 'lark', 'lemur', 'lion', 'lizard', 'llama', 'lobster', 'magpie', 'mole', 'mongoose', 'monkey', 'mouse', 'narwhal', 'newt', 'octopus', 'opossum', 'otter', 'owl', 'panda', 'parrot', 'pelican', 'penguin', 'pheasant', 'pig', 'platypus', 'porcupine', 'rabbit', 'raccoon', 'raptor', 'rat', 'rhino', 'sardine', 'scorpion', 'sea horse', 'sea lion', 'seal', 'shark', 'sheep', 'shrew', 'skink', 'skunk', 'sloth', 'slug', 'snail', 'snake', 'songbird', 'spider', 'squid', 'squirrel', 'starfish', 'stingray', 'swan', 'tapir', 'tiger', 'turtle', 'weasel', 'whale', 'wolf', 'wombat', 'worm', 'zebra']
