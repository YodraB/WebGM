//Copy text to Clipboard - this function is basically copied from w3schools.com

function toClipboard() {
 /* Get the text field */
 var copyText = document.getElementById("display");

 /* Select the text field */
 copyText.select();

 /* Copy the text inside the text field */
 document.execCommand("Copy");

 /* Alert the copied text */
 alert("Copied all notes");
}

// Y/N

function yesno() {
 var yn = Math.random();
 var answer = '';
 var ynAnd = [', and...', ', but...', ', because...'];
 var ynAndChance = Math.random();
 var chance = document.getElementById("ynSlider").value / 20;
 yn = yn + chance;
 if (yn > 1) {
   answer = 'yes';
 } else {
   answer = 'no';
 }
 if (ynAndChance > 0.5) {
   answer = answer + randomPick(ynAnd);
 }
 print(answer);
}

function ynShowValue(newValue) {
 newValue = newValue * 5;
 document.getElementById("chance").innerHTML=newValue + '% yes';
}

// Draw a card - Poker

var pokerValues = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
var pokerSuites = ['spades', 'diamonds', 'clubs', 'hearts'];
var pokerJokers = ['red joker', 'black joker'];

function poker(){
	var joker = Math.floor(Math.random() * 54);
	var pokerCard = randomPick(pokerValues) + ' of ' + randomPick(pokerSuites)
	if (joker > 52){
		pokerCard = randomPick(pokerJokers);
	}
	print(pokerCard);
}

// Draw a card - tarot

var majorArcana = ['the fool', 'the magician', 'the high priestess', 'the empress', 'the emperor', 'the hierophant', 'the lovers', 'the chariot', 'strength', 'the hermit', 'wheel of fortune', 'justice', 'the hanged man', 'death', 'temperance', 'the devil', 'the tower', 'the star', 'the moon', 'the sun', 'judgement', 'the world'];
var minorValues = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'page', 'knight', 'queen', 'king'];
var minorSuites = ['wands', 'cups', 'swords', 'pentacles'];

function tarot(){
	var arcana = Math.floor(Math.random() * 78);
	var tarotCard = randomPick(minorValues) + ' of ' + randomPick(minorSuites);
	if (arcana < 23){
		tarotCard = randomPick(majorArcana);
	}
	print(tarotCard);
}

// Glyph

var prefix = "Glyphs/"
var glyphs = ['acid', 'ages', 'alien-bug', 'alien-stare', 'all-seeing-eye', 'amphora', 'android-mask', 'angel-wings', 'aquarium',  'architect-mask',  'awareness', 'barbed-coil', 'battery-pack-alt', 'beard', 'beech', 'bestial-fangs', 'big-wave', 'bindle', 'bird-mask', 'black-cat', 'black-hole-bolas', 'blindfold', 'body-swapping', 'boiling-bubbles', 'bolt-eye', 'bowen-knot', 'branch-arrow', 'breaking-chain', 'bubbling-bowl', 'bubbling-flask', 'burning-book', 'burning-meteor', 'burning-passion', 'calavera', 'card-joker', 'carnyx', 'cauldron', 'chained-heart', 'chalice-drops', 'chameleon-glyph', 'clover', 'cobweb', 'coma', 'concrete-bag', 'convince', 'coronation', 'crown-coin', 'crowned-heart', 'crowned-skull', 'crystalize', 'cultist', 'cursed-star', 'cyber-eye', 'cyborg-face', 'cycle', 'dagger-rose', 'dark-squad', 'deathcap', 'defibrilate', 'delighted', 'desert-skull', 'despair', 'direwolf', 'disintegrate', 'distraction', 'double-face-mask', 'dove', 'dozen', 'drakkar', 'dread', 'drink-me', 'dripping-star', 'ecology', 'egg-clutch', 'egyptian-pyramids', 'energy-shield', 'enlightenment', 'entangled-typhoon', 'evil-bat', 'evil-moon', 'evil-wings', 'eye-of-horus', 'eye-target', 'fangs-circle', 'fire-ace', 'fire-bottle', 'fire-dash', 'fire-silhouette', 'fishing-hook', 'fleshy-mass', 'forest', 'fox-head', 'freedom-dove', 'frontal-lobe', 'frostfire', 'fruiting', 'fuji', 'gas-mask', 'gem-chain', 'ghost-ally', 'gift-of-knowledge', 'gluttonous-smile', 'gooey-sword', 'gorilla', 'guarded-tower', 'hair-strands', 'halt', 'harpy', 'heart-bottle', 'heart-drop', 'heptagram', 'hole-ladder', 'holy-grail', 'holy-oak', 'ice-bolt', 'iceberg', 'id-card', 'ink-swirl', 'inner-self', 'invisible', 'ivory-tusks', 'juggler', 'keyring', 'knot', 'lamprey-mouth', 'life-in-the-balance', 'love-mystery', 'mad-scientist', 'magic-gate', 'marrow-drain', 'medieval-pavilion', 'minerals', 'moebius-star', 'mute', 'nothing-to-say', 'octoman', 'oily-spiral', 'one-eyed', 'ouroboros', 'overmind', 'paw-heart', 'pegasus', 'pierced-heart', 'piercing-sword', 'pirate-flag', 'pirate-grave', 'plague-doctor-profile', 'plants-and-animals', 'plesiosaurus', 'poison', 'poker-hand', 'prayer', 'processor', 'pyromaniac', 'radial-balance', 'rainbow-star', 'raise-skeleton', 'revolt', 'ringing-bell', 'river', 'roman-shield', 'rupee', 'scythe', 'secret-door', 'serrated-slash', 'shaking-hands', 'shark-fin', 'shield-echoes', 'shiny-purse', 'shouting', 'shuriken', 'sickle', 'sinking-ship', 'sinking-trap', 'skeleton-key', 'slalom', 'slashed-shield', 'sleepy', 'sly', 'smoke-bomb', 'sound-waves', 'spatter', 'spiked-armor', 'spiky-eclipse', 'spiral-arrow', 'spiral-tentacle', 'sprout', 'spy', 'star-sattelites', 'stars-stack', 'stigmata', 'stork-delivery', 'striped-sun', 'stump-regrowth', 'suits', 'sun-radiations', 'sun', 'surprised-skull', 'surrounded-eye', 'swamp', 'swan-breeze', 'swiss-army-knife', 'sword-break', 'tear-tracks', 'telepathy', 'temptation', 'tesla-coil', 'thor-fist', 'totem-head', 'totem', 'trojan-horse', 'two-shadows', 'vine-flower', 'volcano', 'voodoo-doll', 'wave-strike', 'winged-emblem', 'wingfoot', 'yin-yang']

function displayImage(){
 glyphA = prefix + randomPick(glyphs) + ".png";
 glyphB = prefix + randomPick(glyphs) + ".png";
 glyphC = prefix + randomPick(glyphs) + ".png";
 document.getElementById('canvasA').src = glyphA;
 document.getElementById('canvasB').src = glyphB;
 document.getElementById('canvasC').src = glyphC;
 }

// Roll custom dice

function customDice(){
 var diceSides = document.getElementById("diceSides").value;
 var numDice = document.getElementById("numDice").value;
 var results = [];
 var diceTotal = 0;
 switch(true) {
   case (numDice <= 0):
    print("Error - you can't roll " + numDice + " dice.")
    break;
  case (diceSides < 2):
    print("Error - dice can't have " + diceSides + ' sides.')
    break;
   case (numDice == 1):
    results = (Math.floor(Math.random() * (diceSides))) + 1;
    print(results);
    break;
  default:
    for (i = 0; i < numDice; i++){
      var randomNumber = (Math.floor(Math.random() * (diceSides))) + 1;
      diceTotal += randomNumber;
      results += randomNumber + ", ";
    }
    print(results + 'total: ' + diceTotal);
    break;
  }
}

// Fudge/Fate dice

function fudgefate() {
 ffValues = ['-', '0', '+'];
 dieA = randomPick(ffValues);
 dieB = randomPick(ffValues);
 dieC = randomPick(ffValues);
 dieD = randomPick(ffValues);
 ffDice = [dieA, dieB, dieC, dieD];
 ffTotal = 0;
 for (i = 0; i < 4; i++) {
   if (ffDice[i] == '+') {
     ffTotal = ffTotal + 1;
   } else if (ffDice[i] == '-') {
     ffTotal = ffTotal - 1;
   }
 }
 print(dieA + ', ' + dieB + ', ' + dieC + ', ' + dieD + ' total: ' + ffTotal);
}

// Damage

var severity = ['life-threatening', 'life-threatening', 'critical', 'critical', 'severe', 'severe', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'moderate', 'minor', 'minor', 'minor', 'minor', 'minor', 'minor', 'negligible', 'negligible', 'negligible']

var area = ['head', 'torso', 'left arm', 'right arm', 'left leg', 'right leg']

function damageShowValue(newValue) {
 newValue = newValue;
 document.getElementById("danger").innerHTML='danger level ' + newValue;
}

function damage() {
 var hit = randomPick(area);
 var damageNumber = Math.floor(Math.random() * (severity.length));
 var danger = document.getElementById("damageSlider").value - 10;
 var change = damageNumber - danger;
 if (change < 0) {
   change = 0;
 } else if ( change > 20) {
   change = 20;
 }
 var mod = severity[change];
 print(mod + ' hit to the ' + hit);
 }