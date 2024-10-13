const characterCountInput = document.getElementById('characterCount');
const fetchCharactersButton = document.getElementById('fetchCharacters');
const clearCharactersButton = document.getElementById('clearCharacters');
const searchInput = document.getElementById('searchInput');
const characterContainer = document.getElementById('characterContainer');

let characters = [];

// json con datos de personajes
const localCharacters = [
    {
        name: "Walter White",
        nickname: "Heisenberg",
        portrayed: "Bryan Cranston",
        img: "https://th.bing.com/th/id/R.234ad1c3a95411dbc8199eec139e2331?rik=o3EwiuQKGGOSnQ&riu=http%3a%2f%2fscreenrant.com%2fwp-content%2fuploads%2fWalter-White1.jpg&ehk=EFrrI4Met14mvchEhOL5PVAAPhSrPfiPngOV1wdAFbw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Jesse Pinkman",
        nickname: "Cap n' Cook",
        portrayed: "Aaron Paul",
        img: "https://th.bing.com/th/id/R.672c0210aa42dc16050c3a175e304e82?rik=j%2fJJ9VYJML%2b6YQ&riu=http%3a%2f%2fimages.amcnetworks.com%2famc.com%2fwp-content%2fuploads%2f2015%2f04%2fcast_bb_800x600_jesse-pinkman.jpg&ehk=0taCKlDvXloPAYyHGWYuFcGjZMwV6U1%2bpGzGRyP%2ftlQ%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Skyler White",
        nickname: "Sky",
        portrayed: "Anna Gunn",
        img: "https://th.bing.com/th/id/R.969621cad5703fd205e1682460197830?rik=qXIGrCYC%2bPaH%2bA&riu=http%3a%2f%2fwordpress.wbur.org%2fwp-content%2fuploads%2f2012%2f07%2f0711_anna-gunn.jpg&ehk=MBOS79V8McqohhBxeLWxTTQDfXQTvGOgQZA96xC%2bjjA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Hank Schrader",
        nickname: "ASAC Schrader",
        portrayed: "Dean Norris",
        img: "https://th.bing.com/th/id/R.b53a52981ccab3971f92feb31925e55f?rik=mYnSH0hMgZZURQ&pid=ImgRaw&r=0"
    },
    {
        name: "Saul Goodman",
        nickname: "Jimmy McGill",
        portrayed: "Bob Odenkirk",
        img: "https://th.bing.com/th/id/R.61bff1f3aebaa3d4088a3a9080667c2b?rik=dpba2vsA4HH3xw&pid=ImgRaw&r=0"
    },
    {
        name: "Gustavo Fring",
        nickname: "Gus",
        portrayed: "Giancarlo Esposito",
        img: "https://dotcomstories.com/wp-content/uploads/2022/07/IMG_606.jpg"
    },
    {
        name: "Hector Salamanca",
        nickname: "Tio",
        portrayed: "Mark Margolis",
        img: "https://static.toiimg.com/img/102915711/Master.jpg"
    },
    {
        name: "Tuco Salamanca",
        nickname: "Tuco",
        portrayed: "Raymond Cruz",
        img: "https://static.wikia.nocookie.net/breakingbad/images/d/dc/1x06_-_Crazy_Handful_of_Nothin%27_PROMO_5.jpg/revision/latest?cb=20120426164910&path-prefix=es"
    },
    {
        name: "Leonel Salamanca",
        nickname: "Leonel Salamanca",
        portrayed: "Daniel Moncada",
        img: "https://th.bing.com/th/id/R.cb88e3dec71a2f6249d03a2981f6de3b?rik=I%2bTiDVfE63s3OQ&riu=http%3a%2f%2fstatic.tvmaze.com%2fuploads%2fimages%2foriginal_untouched%2f164%2f412470.jpg&ehk=F0DMGOJ6smy3anBpHyxkT3%2fDDUS7nqr81q0Pw37QIag%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Marco Salamanca",
        nickname: "Marco Salamanca",
        portrayed: "Luis Moncada",
        img: "https://i0.wp.com/wiki.rankiing.net/wp-content/uploads/2021/09/Who-killed-Marco-in-breaking-bad.jpeg?resize=600%2C430&ssl=1"
    },
    {
        name: "Michael Ehrmantraut",
        nickname: "Mike",
        portrayed: "Jonathan Banks",
        img: "https://th.bing.com/th/id/R.df41135a1f340206b646d6241e175246?rik=PkFS73I5F2rrug&riu=http%3a%2f%2fimages.amcnetworks.com%2fbreakingbad.amctv.es%2fwp-content%2fuploads%2f2015%2f01%2fMikeM1.jpg&ehk=CqlcKm9QMHmLKGqkh1l5Dre8IKpUbkWLx7Maa8P4rX8%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Domingo Gallardo Molina",
        nickname: "Krazy-8",
        portrayed: "Max Arciniega",
        img: "https://static.wikia.nocookie.net/breakingbad/images/0/05/1x01_-_Pilot_200.png/revision/latest?cb=20120420155043&path-prefix=es"
    },
    {
        name: "Marie Schrader",
        nickname: "Marie",
        portrayed: "Betsy Brandt",
        img: "https://th.bing.com/th/id/R.a3654b0694efe9b172e52a095e4a7b40?rik=FRM3yJ6e%2f0EiUg&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20090621230719%2fbreakingbad%2fimages%2f4%2f43%2fMarie.jpg&ehk=sKcmx%2bpdzfZWGvapH%2bNR9EdiB10RYSnzsMmJaQ%2fOT2k%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Peter",
        nickname: "Skinny Pete",
        portrayed: "Charles Baker",
        img: "https://th.bing.com/th/id/R.6b0d8498a9a6b164457a5503cdd38e85?rik=4T4qmTPFiaFdBQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-LoxZoCTsGYw%2fUhq-pI0zBeI%2fAAAAAAAAFKQ%2f94qJhZZXMDM%2fw1200-h630-p-k-no-nu%2fskinny%2bpete.jpg&ehk=YY%2fMGcKVdvNCEmTCM0NOUavp4u2F%2bq73R6hjnjD%2ftdU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Christian Ortega",
        nickname: "Combo",
        portrayed: "Rodney Rush",
        img: "https://static.wikia.nocookie.net/breakingbad/images/7/7c/2x11_-_Mandala_Combo.png/revision/latest?cb=20120724094730&path-prefix=es"
    },
    {
        name: "Brandon Mayhew",
        nickname: "Badger",
        portrayed: "Matt L. Jones",
        img: "https://th.bing.com/th/id/R.bd7b5c3e32cec84913565b240f6e419e?rik=R8cnBAKldcKSKg&riu=http%3a%2f%2fimages.wikia.com%2fbreakingbad%2fimages%2f5%2f5d%2fBadger2.jpg&ehk=aWSYKEbqWyQOQvZGL8ngDONQW22Z6V2vrzB4Oevw3hA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Todd Alquist",
        nickname: "Todd",
        portrayed: "Jesse Plemons",
        img: "https://th.bing.com/th/id/R.9035a0d5cba8001e77f81035a3d66dd2?rik=c5pP5Hp%2biX9HXA&riu=http%3a%2f%2fimages.amcnetworks.com%2famctv.com%2fwp-content%2fuploads%2f2013%2f07%2fBB-S5B-Todd-590.jpg&ehk=ZYzJNGMuVpmPQdfodTGnpHeVyrBMWOLsE89ZiHZdYbs%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Jack Welker",
        nickname: "Jack Welker",
        portrayed: "Michael Bowen",
        img: "https://th.bing.com/th/id/R.4cfaf0470eb346234def066522ec6798?rik=T9kksWFB1kohLg&riu=http%3a%2f%2fstatic2.wikia.nocookie.net%2f__cb20130912225924%2fbreakingbad%2fimages%2fc%2fce%2fJack5x13.png&ehk=9XPJ1Tvwogo%2fCTbZiM4X2q5OLYyoKog3Z%2bUMnWNs%2b1g%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Theodore Beneke",
        nickname: "Ted",
        portrayed: "Christopher Cousins",
        img: "https://th.bing.com/th/id/R.5bc7e3d257b8c2516cd8f9b94b0026cf?rik=nnhD%2fhuMfjcB3Q&riu=http%3a%2f%2fimages.amcnetworks.com%2famctv.com%2fwp-content%2fuploads%2f2010%2f12%2fted-beneke-s2-590.jpg&ehk=oLkojWHpKeNhcZuubqqpbGqKa88ED3PPZKjQj35cWXY%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Holly White",
        nickname: "Holly",
        portrayed: "Varias",
        img: "https://vignette.wikia.nocookie.net/breakingbad/images/0/08/Tumblr_lqddc79K9S1qc5omm.png/revision/latest?cb=20150406183030&path-prefix=de",
    },
    {
        name: "Huell Babineaux",
        nickname: "Huell",
        portrayed: "Lavell Crawford",
        img: "https://th.bing.com/th/id/R.44f413018d6b4c890b63790526ea4254?rik=h%2fcuDmwCz8KhvQ&riu=http%3a%2f%2fifearbrooklyn.com%2fwp-content%2fuploads%2f2013%2f09%2fHuell.jpg&ehk=jLSdIvdaPSsPxJdT7xus01qzJpDCl%2bOVJlp9bm8Ri3Q%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Jane Margolis",
        nickname: "Jane",
        portrayed: "Krysten Ritter",
        img: "https://www.criticfilm.com/wp-content/uploads/2023/10/breaking-bad-jane.jpg"
    },
    {
        name: "Walter Hartwell White Jr.",
        nickname: "Flynn",
        portrayed: "RJ Mitte",
        img: "https://th.bing.com/th/id/OIP.EuHBopf5gZABh8i_wPPqHgAAAA?rs=1&pid=ImgDetMain"
    },
    {
        name: "Donald Margolis",
        nickname: "Donald",
        portrayed: "John de Lancie",
        img: "https://static.wikia.nocookie.net/breakingbad/images/1/12/Donald_Margolis.png/revision/latest?cb=20120802212442&path-prefix=es"
    },
    {
        name: "Gale Boetticher",
        nickname: "Gale",
        portrayed: "David Costabile",
        img: "https://static.wikia.nocookie.net/breakingbad/images/7/73/4x01_-_Box_Cutter_PROMO_6.jpg/revision/latest?cb=20120712192652&path-prefix=es"
    }
];

fetchCharactersButton.addEventListener('click', fetchCharacters);
clearCharactersButton.addEventListener('click', clearCharacters);
searchInput.addEventListener('input', filterCharacters);

function fetchCharacters() {
    const count = parseInt(characterCountInput.value);
    characters = localCharacters.slice(0, count);
    displayCharacters(characters);
}

function displayCharacters(charactersToDisplay) {
    characterContainer.innerHTML = '';
    charactersToDisplay.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.img}" alt="${character.name}">
            <div class="character-info">
                <h2>${character.name}</h2>
                <p>Apodo: ${character.nickname}</p>
                <p>Interpretado por: ${character.portrayed}</p>
            </div>
        `;
        characterContainer.appendChild(card);
    });
}

function clearCharacters() {
    characterContainer.innerHTML = '';
    characters = [];
    searchInput.value = '';
}

function filterCharacters() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(searchTerm) ||
        character.nickname.toLowerCase().includes(searchTerm) ||
        character.portrayed.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filteredCharacters);
}