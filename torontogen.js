let chime = document.getElementById("ttc");
const speekSlang = document.getElementById("speech")
const quoteDisplay = document.getElementById("generatedQuote");
const genQuote = document.getElementById("button");
const generateQuote = () => {

    let affections = ["cuzo", 'fam', 'bro', 'sweeterman', 'dimepiece', 'greezy' , 'guy', 'sweeter', 'wifey'];

    let insults = ['waste yute','sus', 'broke boys', 'bozos', 'buck-t', 'waste yute', 'snake', 'cyattie', 'cyat', 'thot', 'are u dumb', 'dumb', 'bean', 'waste mon', 'weak',  'slime', 'mix up', 'gaffer'];

    let intro = ['nyah eh', 'ah ah', 'jheeeez', 'so fam', 'so yoh', 'wagwan', 'HOOOOOOOOOOOLLLLLLLYYYYYY', 'topleft', 'say word', 'yoh guy'];

    let verbs = ['hold a', 'breeze', 'run that', 'reach', 'flex', 'scoop me', 'Llow it', 'link up', 'come thru',  'cut', 'scrap', 'rate', 'link up', 'regulate', 'bout it', 'tun up', 'two twos', 'rinse', 'feel', 'say less', 'light up','yeet' , 'NIZE it'];
    let verbsDif = ['hold a', 'breeze', 'run that', 'reach', 'flex', 'scoop me', 'Llow it', 'link up', 'come thru',  'cut', 'scrap', 'rate', 'link up', 'regulate', 'bout it', 'tun up', 'two twos', 'rinse', 'feel', 'say less', 'light up','yeet' , 'NIZE it'];

    let verbs_pres = ['wheeling','preeing','coolin',"mossin'", 'gwannin', 'pushin', 'marvin'];
    let adjectives = ['extra', 'greezy', 'lit', 'sav', 'cheesed', 'flex', 'wild' , 'waste', 'dry', 'weak', 'bare', 'breeze', 'yute', 'slimy', 'truuuu', 'snake', 'arms','lowkey','mix up', 'deafaz', 'differently', 'merked', 'sus', 'lowe', 'amped', 'blem', 'bless', 'cheesed', 'so beg', ' checking', 'chop', 'dealing', 'deezed' ];
    let verbs_past=[ 'copped', 'yeeted', 'blessed', 'rinsed', 'marved', 'merked'];
    let nouns = ['sludem','tings', 'ting', 'bill', 'fam', 'mandems', 'mans', 'Tdot', 'gyal', 'u', '6ix', 'liqs', 'lick boh', 'bogie', 'bitty', 'gyaldom', 'gyallis', 'mandem', 'backie', 'shawty', 'junior McChicken', 'jabroni'];
    let nounsDif = ['sludem','tings', 'ting', 'bill', 'fam', 'mandems', 'mans', 'Tdot', 'gyal', 'u', '6ix', 'liqs', 'lick boh', 'bogie', 'bitty', 'gyaldom', 'gyallis', 'mandem', 'backie', 'shawty', 'junior McChicken', 'jabroni'];
    let end_phrase = ['styll', 'ahlie', 'fom', 'live', 'boi', 'szeen', 'sketch', 'gyal', 'worldstarrr', 'like damn', 'gheeeeeez!'];
    let weird_prse = ['thats wild',' breeze', "that's beat", "don't cheese me", 'Yeah eh?', 'nahhh', 'scoop me', 'link up', 'truuu', 'dun kno', 'bout it', 'from time', 'run up'];
    let weird_ins = ['finna', 'in a minute', 'from time', 'chat to you',"that's beat"];

    const randomAffection = Math.floor(Math.random() * affections.length);
    const randomInsult = Math.floor(Math.random() * insults.length);
    const randomIntro = Math.floor(Math.random() * intro.length);
    const randomVerb = Math.floor(Math.random() * verbs.length);
    const randVerbOther = Math.floor(Math.random() * verbsDif.length);
    const randomVerbPres = Math.floor(Math.random() * verbs_pres.length);
    const randomAdjectives = Math.floor(Math.random() * adjectives.length);
    const randomVerbPast = Math.floor(Math.random() * verbs_past.length);
    const randomNoun = Math.floor(Math.random() * nouns.length);
    const randNounOther = Math.floor(Math.random() * nounsDif.length);
    const randomEnd = Math.floor(Math.random() * end_phrase.length);
    const randomWeirdPrse = Math.floor(Math.random() * weird_prse.length);
    const randomWeirdIns = Math.floor(Math.random() * weird_ins.length);

    let sentenceFormats = [`${nouns[randomNoun]} ${end_phrase[randomEnd]}`, `${weird_prse[randomWeirdPrse]} ${insults[randomInsult]}`,`${weird_prse[randomWeirdPrse]} ${affections[randomAffection]}`, `${intro[randomIntro]}, are you tryna ${verbs[randomVerb]}?`, `${intro[randomIntro]}, Im ${verbs_pres[randomVerbPres]} all these ${nouns[randomNoun]}, yah ${verbs[randomVerb]} ${affections[randomAffection]}?`, `${intro[randomIntro]} ${nouns[randomNoun]} ${adjectives[randomAdjectives]} ${weird_ins[randomWeirdIns]} ${verbs[randomVerb]} ${end_phrase[randomEnd]}`, `${intro[randomIntro]} my ${affections[randomAffection]}`, `${intro[randomIntro]}, ${nouns[randomNoun]} got ${verbs_past[randomVerbPast]}`, `${intro[randomIntro]}, are you tryna ${verbs[randomVerb]} ${nouns[randomNoun]}, ${insults[randomInsult]}`, `${verbs[randomVerb]} this ${nouns[randomNoun]}`,`${verbs[randomVerb]} this ${insults[randomInsult]}`, `${nouns[randomNoun]} a real ${insults[randomInsult]}, ${end_phrase[randomEnd]}`, `${verbs[randomVerb]} ${verbsDif[randVerbOther]} this ${nouns[randomNoun]}`,`Say less ${affections[randomAffection]}`, `Say less ${insults[randomInsult]}`, `${nouns[randomNoun]} got bare ${nounsDif[randNounOther]}, ${end_phrase[randomEnd]}.`,`${nouns[randomNoun]} is a ${affections[randomAffection]}, ${end_phrase[randomEnd]}.`, `${nouns[randomNoun]} is a ${insults[randomInsult]}, ${end_phrase[randomEnd]}.`,`${nouns[randomNoun]} got themselves a ${affections[randomAffection]}`, `${nouns[randomNoun]} got themselves a ${nounsDif[randNounOther]}`,`${nouns[randomNoun]} got themselves a ${insults[randomInsult]}`,`Are yah ${insults[randomInsult]} ${nouns[randomNoun]}`, `Im ${adjectives[randomAdjectives]} ${verbs_past[randomVerbPast]}`, `Whos ${nouns[randomNoun]} is this?`, `${nouns[randomNoun]} is ${verbs_past[randomVerbPast]}, ${end_phrase[randomEnd]}`,`${nouns[randomNoun]} tryna ${verbs[randomVerb]}`, `Tryna ${verbs[randomVerb]} ${nouns[randomNoun]}`,`Tryna ${verbs[randomVerb]} ${affections[randomAffection]}`,`Tryna ${verbs[randomVerb]}, ${insults[randomInsult]}?`, `${intro[randomIntro]} check this ${insults[randomInsult]}`,`dont reach Jane and Finch, or youre deadass`];
    
const randomFormat = Math.floor(Math.random() * sentenceFormats.length);
// create sentence

let slangSent = sentenceFormats[randomFormat];

// cap first letter

slangSent = slangSent.charAt(0).toUpperCase() + slangSent.slice(1);

chime.play();
quoteDisplay.innerHTML = '\"' + slangSent + '\"';




$(quoteDisplay).fadeIn();










}


      
genQuote.addEventListener("click", generateQuote);

const synthSpeech = () => {
    let readSent= document.getElementById("generatedQuote").innerText;
    var synth = window.speechSynthesis;
    var utterSlang = new SpeechSynthesisUtterance(readSent);
    synth.speak(utterSlang);
}

speekSlang.addEventListener("click", synthSpeech);