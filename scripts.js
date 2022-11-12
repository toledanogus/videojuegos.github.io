const videojuegos = [
    {n: 1, nombre: "Casper", consola: "Playstation 1", año: "1996", horas: "3", genero: "Puzzle"},
    {n: 2, nombre: "Vagrant Story", consola: "Playstation 1", año: "2000", horas: "24", genero: "RPG"},
    {n: 3, nombre: "Metal Gear Solid I", consola: "Playstation 1", año: "1998", horas: "7", genero: "Espionaje"},
    {n: 4, nombre: "Final Fantasy Tactics", consola: "Playstation 1", año: "1997", horas: "40", genero: "RPG"},
    {n: 5, nombre: "Final Fantasy VII", consola: "Playstation 1", año: "1997", horas: "37", genero: "RPG"},
    {n: 6, nombre: "Mickeys Wild Adventure", consola: "Playstation 1", año: "1994", horas: "2", genero: "Plataforma"},
    {n: 7, nombre: "Gradious III & VI", consola: "PS2", año: "2000", horas: "2", genero: "Naves"},
    {n: 8, nombre: "Final Fantasy IX", consola: "Playstation 1", año: "2000", horas: "39", genero: "RPG"},
    {n: 9, nombre: "Street Fighter Alpha 3", consola: "Playstation 1", año: "1998", horas: "9", genero: "Peleas"},
    {n: 10, nombre: "Hot Shots Golf", consola: "Playstation 1", año: "1997", horas: "6", genero: "Deportes"},
    {n: 11, nombre: "Final Fantasy VI", consola: "Playstation 1", año: "1994", horas: "35", genero: "RPG"},
    {n: 12, nombre: "ISS Pro Evolution", consola: "Playstation 1", año: "1999", horas: "44", genero: "Deportes"},
    {n: 13, nombre: "The King of Fighters '98", consola: "Playstation 1", año: "1998", horas: "1", genero: "Peleas"},
    {n: 14, nombre: "THe King of Fighters '99", consola: "Playstation 1", año: "1999", horas: "1", genero: "Peleas"},
    {n: 15, nombre: "Buster Bros Collection", consola: "Playstation 1", año: "1997", horas: "5", genero: "Acción"},
    {n: 16, nombre: "Incredible Crisis", consola: "Playstation 1", año: "1999", horas: "2", genero: "Acción"},
    {n: 17, nombre: "Sydney 2000", consola: "Playstation 1", año: "2000", horas: "2", genero: "Deportes"},
    {n: 18, nombre: "Resident Evil II", consola: "Playstation 1", año: "1998", horas: "6", genero: "Terror"},
    {n: 19, nombre: "Gran Turismo 4", consola: "Playstation 2", año: "2005", horas: "79", genero: "Carreras"},
    {n: 20, nombre: "Klonoa 2", consola: "Playstation 2", año: "2001", horas: "8", genero: "Plataforma"},
    {n: 21, nombre: "SSX", consola: "Playstation 2", año: "2000", horas: "10", genero: "Deportes"},
    {n: 22, nombre: "SSX Tricky", consola: "Playstation 2", año: "2001", horas: "12", genero: "Deportes"},
    {n: 23, nombre: "Tarzan Untamed", consola: "Playstation 2", año: "2001", horas: "4", genero: "Plataforma"},
    {n: 24, nombre: "Dragon Quest VIII", consola: "Playstation 2", año: "2005", horas: "61", genero: "RPG"},
    {n: 25, nombre: "Hot Shots Golf Fore", consola: "Playstation 2", año: "2003", horas: "60", genero: "Deportes"},
    {n: 26, nombre: "Metal Gear Solid III", consola: "Playstation 2", año: "2004", horas: "16", genero: "Espionaje"},
    {n: 27, nombre: "Tekken Tag Tournament", consola: "Playstation 2", año: "2000", horas: "2", genero: "Peleas"},
    {n: 28, nombre: "Final Fantasy X", consola: "Playstation 2", año: "2001", horas: "46", genero: "RPG"},
    {n: 29, nombre: "God of War II", consola: "Playstation 2", año: "2007", horas: "12", genero: "Acción"},
    {n: 30, nombre: "Final Fantasy XII", consola: "Playstation 2", año: "2006", horas: "61", genero: "RPG"},
    {n: 31, nombre: "Capcom vs SNK 2", consola: "Playstation 2", año: "2001", horas: "4", genero: "Peleas"},
    {n: 32, nombre: "Gran Turismo 3", consola: "Playstation 2", año: "2001", horas: "36", genero: "Carreras"},
    {n: 33, nombre: "THe King of Fighters 2001", consola: "Playstation 2", año: "2001", horas: "3", genero: "Peleas"},
    {n: 34, nombre: "Metal Gear Solid II", consola: "Playstation 2", año: "2001", horas: "13", genero: "Espionaje"},
    {n: 35, nombre: "Uncharted 2", consola: "Playstation 3", año: "2009", horas: "11", genero: "Acción"},
    {n: 36, nombre: "Metal Gear Solid IV", consola: "Playstation 3", año: "2008", horas: "20", genero: "Espionaje"},
    {n: 37, nombre: "Okami", consola: "Playstation 3", año: "2006", horas: "34", genero: "Acción"},
    {n: 38, nombre: "Eternal Sonata", consola: "Playstation 3", año: "2007", horas: "30", genero: "RPG"},
    {n: 39, nombre: "God of War III", consola: "Playstation 3", año: "2010", horas: "10", genero: "Acción"},
    {n: 40, nombre: "Gran Turismo 5", consola: "Playstation 3", año: "2010", horas: "46", genero: "Carreras"},
    {n: 41, nombre: "Gran Turismo 6", consola: "Playstation 3", año: "2013", horas: "45", genero: "Carreras"},
    {n: 42, nombre: "The Last of Us", consola: "Playstation 3", año: "2013", horas: "15", genero: "Terror"},
    {n: 43, nombre: "Shadow of the Colossus", consola: "Playstation 3", año: "2005", horas: "10", genero: "Puzzle"},
    {n: 44, nombre: "Resident Evil 4", consola: "Playstation 3", año: "2005", horas: "16", genero: "Terror"},
    {n: 45, nombre: "Castlevania Harmony of Despair", consola: "Playstation 3", año: "2010", horas: "9", genero: "Plataforma"},
    {n: 46, nombre: "Demon Souls", consola: "Playstation 3", año: "2009", horas: "29", genero: "Acción"},
    {n: 47, nombre: "Plants vs Zombies", consola: "Playstation 3", año: "2009", horas: "8", genero: "Defensa de Torre"},
    {n: 48, nombre: "Angry Birds", consola: "Playstation 3", año: "2009", horas: "7", genero: "Puzzle"},
    {n: 49, nombre: "Tetris", consola: "Playstation 3", año: "2006", horas: "2", genero: "Puzzle"},
    {n: 50, nombre: "Tekken Tag Tournament 2", consola: "Playstation 3", año: "2012", horas: "2", genero: "Peleas"},
    {n: 51, nombre: "Street Fighter IV", consola: "Playstation 3", año: "2008", horas: "3", genero: "Peleas"},
    {n: 52, nombre: "Uncharted 4", consola: "Playstation 4", año: "2016", horas: "15", genero: "Acción"},
    {n: 53, nombre: "Metal Gear Solid V", consola: "Playstation 4", año: "2015", horas: "46", genero: "Espionaje"},
    {n: 54, nombre: "God of War", consola: "Playstation 4", año: "2018", horas: "21", genero: "Acción"},
    {n: 55, nombre: "Horizon Zero Down", consola: "Playstation 4", año: "2017", horas: "30", genero: "Acción"},
    {n: 56, nombre: "Ratchet & Clank 1", consola: "Playstation 4", año: "2016", horas: "10", genero: "Plataforma"},
    {n: 57, nombre: "Bloodborne", consola: "Playstation 4", año: "2015", horas: "34", genero: "Acción"},
    {n: 58, nombre: "Pang Adventures", consola: "Playstation 4", año: "2016", horas: "3", genero: "Acción"},
    {n: 59, nombre: "Gran Turismo Sport", consola: "Playstation 4", año: "2017", horas: "23", genero: "Carreras"},
    {n: 60, nombre: "Toki", consola: "Playstation 4", año: "2018", horas: "2", genero: "Plataforma"},
    {n: 61, nombre: "Castlevania Collection", consola: "Playstation 4", año: "1987", horas: "3", genero: "Plataforma"},
    {n: 62, nombre: "Need for Speed Rivals", consola: "Playstation 4", año: "2013", horas: "13", genero: "Carreras"},
    {n: 63, nombre: "Castlevania Rondo of Blood", consola: "Playstation 4", año: "2010", horas: "4", genero: "Plataforma"},
    {n: 64, nombre: "Street Fighter 30 Anniversary", consola: "Playstation 4", año: "2018", horas: "8", genero: "Peleas"},
    {n: 65, nombre: "Puyo Puyo Tetris", consola: "Playstation 4", año: "2017", horas: "8", genero: "Puzzle"},
    {n: 66, nombre: "Final Fantasy VII Remake", consola: "Playstation 5", año: "2020", horas: "33", genero: "RPG"},
    {n: 67, nombre: "Ratchet & Clank: Rift Apart", consola: "Playstation 5", año: "2021", horas: "11", genero: "Plataforma"},
    {n: 68, nombre: "Astro's Playroom", consola: "Playstation 5", año: "2020", horas: "3", genero: "Plataforma"},
    {n: 69, nombre: "Octopath Traveler", consola: "Nintendo Switch", año: "2018", horas: "61", genero: "RPG"},
    {n: 70, nombre: "Zelda Breath of the Wild", consola: "Nintendo Switch", año: "2017", horas: "50", genero: "Aventura"},
    {n: 71, nombre: "Mario Kart 8", consola: "Nintendo Switch", año: "2017", horas: "6", genero: "Carreras"},
    {n: 72, nombre: "Limbo", consola: "Nintendo Switch", año: "2010", horas: "4", genero: "Plataforma"},
    {n: 73, nombre: "Zelda: A Link to the Past", consola: "Super Nintendo", año: "1992", horas: "15", genero: "Aventura"},
    {n: 74, nombre: "Super Metroid", consola: "Super Nintendo", año: "1994", horas: "8", genero: "Plataforma"},
    {n: 75, nombre: "Chrono Trigger", consola: "Super Nintendo", año: "1995", horas: "23", genero: "RPG"},
    {n: 76, nombre: "Contra III", consola: "Super Nintendo", año: "1992", horas: "3", genero: "Shooter"},
    {n: 77, nombre: "Donkey Kong Country 2: Diddys Kong Quest", consola: "Super Nintendo", año: "1995", horas: "5", genero: "Plataforma"},
    {n: 78, nombre: "Super Mario World", consola: "Super Nintendo", año: "1991", horas: "5", genero: "Plataforma"},
    {n: 79, nombre: "Final Fantasy VI", consola: "Super Nintendo", año: "1994", horas: "35", genero: "RPG"},
    {n: 80, nombre: "Bomberman", consola: "Super Nintendo", año: "1993", horas: "2", genero: "Acción"},
    {n: 81, nombre: "Megaman X", consola: "Super Nintendo", año: "1994", horas: "4", genero: "Plataforma"},
    {n: 82, nombre: "Super Castlevania IV", consola: "Super Nintendo", año: "1991", horas: "5", genero: "Plataforma"},
    {n: 83, nombre: "Super Mario Kart", consola: "Super Nintendo", año: "1992", horas: "3", genero: "Carreras"},
    {n: 84, nombre: "Demosn Crest", consola: "Super Nintendo", año: "1994", horas: "4", genero: "Plataforma"},
    {n: 85, nombre: "Yoshis Island", consola: "Super Nintendo", año: "1995", horas: "8", genero: "Plataforma"},
    {n: 86, nombre: "Super Street Fighter II", consola: "Super Nintendo", año: "1993", horas: "1", genero: "Peleas"},
    {n: 87, nombre: "The Legend of Zelda", consola: "Nintendo Nes", año: "1987", horas: "8", genero: "Aventura"},
    {n: 88, nombre: "Teenage Mutant Ninja Tourtles", consola: "Nintendo Nes", año: "1989", horas: "3", genero: "Plataforma"},
    {n: 89, nombre: "Kirby's Adventure", consola: "Nintendo Nes", año: "1993", horas: "4", genero: "Plataforma"},
    {n: 90, nombre: "Castlevania 1", consola: "Nintendo Nes", año: "1986", horas: "3", genero: "Plataforma"},
    {n: 91, nombre: "Castlevania Order of Eclesia", consola: "Nintendo 3ds", año: "2008", horas: "11", genero: "Plataforma"},
    {n: 92, nombre: "New Super Mario DS", consola: "Nintendo 3ds", año: "2006", horas: "7", genero: "Plataforma"},
    {n: 93, nombre: "Pokemon Heart Gold", consola: "Nintendo 3ds", año: "2009", horas: "38", genero: "RPG"},
    {n: 94, nombre: "Mario Kart DS", consola: "Nintendo 3ds", año: "2005", horas: "5", genero: "Carreras"},
    {n: 95, nombre: "Mario Kart 7", consola: "Nintendo 3ds", año: "2011", horas: "8", genero: "Carreras"},
    {n: 96, nombre: "Metroid Samus Returns", consola: "Nintendo 3ds", año: "2017", horas: "11", genero: "Plataforma"},
    {n: 97, nombre: "Metroid Fusion", consola: "Nintendo 3ds", año: "2002", horas: "5", genero: "Plataforma"},
    {n: 98, nombre: "Donkey Kong Country Returns 3D", consola: "Nintendo 3ds", año: "2013", horas: "11", genero: "Plataforma"},
    {n: 99, nombre: "Fire Emblem Awakening", consola: "Nintendo 3ds", año: "2013", horas: "31", genero: "RPG"},
    {n: 100, nombre: "Luigi's Mansion: Dark Moon", consola: "Nintendo 3ds", año: "2013", horas: "14", genero: "Acción"},
    {n: 101, nombre: "Super Mario 3D Land", consola: "Nintendo 3ds", año: "2011", horas: "7", genero: "Plataforma"},
    {n: 102, nombre: "New Super Mario Bros. 2", consola: "Nintendo 3ds", año: "2012", horas: "6", genero: "Plataforma"},
    {n: 103, nombre: "Pokemon Omega Ruby", consola: "Nintendo 3ds", año: "2014", horas: "26", genero: "RPG"},
    {n: 104, nombre: "Zelda: A Link Between Worlds", consola: "Nintendo 3ds", año: "2013", horas: "16", genero: "Aventura"},
    {n: 105, nombre: "Gran Turismo 7", consola: "Playstation 5", año: "2022", horas: "30", genero: "Carreras"},
]

let selectorMaster;
let selin;
let form2 = document.getElementById('consol2');
const iniciar = document.querySelector('#inicio');
const consola1 = [
    {short: "PS1", long: "Playstation 1"}, {short: "PS2", long: "Playstation 2"}, {short: "PS3", long: "Playstation 3"}, {short: "PS4", long: "Playstation 4"}, {short: "PS5", long: "Playstation 5"}, {short: "switch", long: "Nintendo Switch"}, {short: "snes", long: "Super Nintendo"}, {short: "nes", long: "Nintendo Nes"}, {short: "3ds", long: "Nintendo 3ds"}
];
const genero = ['Puzzle', 'RPG', 'Espionaje', 'Plataforma', 'Naves', 'Peleas', 'Deportes', 'Acción', 'Terror', 'Carreras', 'Defensa de Torre', 'Aventura', 'Shooter'];

let dibujar2 = () => {
    const myNode2 = document.getElementById("inicio");
    myNode2.innerHTML = '';
    selin = document.querySelector('input[name="selinicial"]:checked').value;
    console.log(selin);

    if (selin=="consola2") {
        selectorMaster="consola";
        porconsola();
    }
    else if (selin=="genero"){
        selectorMaster="genero";
        porgenero();
    }
    else if (selin=="horas"){
        selectorMaster="horas";
        dibujar();
    }
}

const porconsola = () => {
    const titulo = document.createElement('p');
    titulo.textContent='Selecciona por consola';
    iniciar.append(titulo);

    consola1.map(function(x){

        let inp1 = document.createElement('input');
        inp1.type="radio";
        inp1.id=x.short;
        inp1.name=selectorMaster;
        inp1.value=x.long;
        const label = document.createElement('label');
        label.for=x.short;
        label.textContent=x.long;
        const espacio1 = document.createElement('br');
        iniciar.append(inp1, label, espacio1);
    });
    const boton = document.createElement('button');
    boton.id="consol";
    boton.type="submit";
    boton.textContent="Clasificar";
    const espacio2 = document.createElement('br');
    iniciar.append(boton, espacio2);

    let sel, seleccion;
    let form = document.getElementById('consol');
    form.addEventListener('click', () => {
        const myNode = document.getElementById("juegos");
        myNode.innerHTML = '';
        dibujar();
});
}

const porgenero = () => {
    const titulo = document.createElement('p');
    titulo.textContent='Selecciona por género';
    iniciar.append(titulo);

    genero.map(function(x){

        let inp1 = document.createElement('input');
        inp1.type="radio";
        inp1.id=x;
        inp1.name="genero";
        inp1.value=x;
        const label = document.createElement('label');
        label.for=x;
        label.textContent=x;
        const espacio1 = document.createElement('br');
        iniciar.append(inp1, label, espacio1);
    });
    const boton = document.createElement('button');
    boton.id="generox";
    boton.type="submit";
    boton.textContent="Clasificar";
    const espacio2 = document.createElement('br');
    iniciar.append(boton, espacio2);

    let sel, seleccion;
    let form = document.getElementById('generox');
    form.addEventListener('click', () => {
        const myNode = document.getElementById("juegos");
        myNode.innerHTML = '';
        dibujar();
});
}

let dibujar = () => {
    if (selectorMaster=="consola" || selectorMaster=="genero"){
        sel = document.querySelector(`input[name="${selectorMaster}"]:checked`).value;
        seleccion = videojuegos.filter(filtro=>filtro[selectorMaster]==sel);
        console.log(seleccion);
        seleccion.sort(function(a,b){
        if (a.nombre<b.nombre){return -1};
        if (a.nombre>b.nombre){return 1};
        return 0;
});
    }
    else if (selectorMaster=="horas"){
        const myNode = document.getElementById("juegos");
        myNode.innerHTML = '';
        sel="horas";
        seleccion = videojuegos;
        seleccion.sort((a,b)=>a.horas-b.horas);
        };


    
    

    seleccion.map(function(x){
        let imagen = document.createElement("img");
        let salto = document.createElement('br');
        let salto1 = document.createElement('br');
        let salto2 = document.createElement('br');
        let salto3 = document.createElement('br');
        let salto4 = document.createElement('br');
        let an = document.createElement("text");
        let horas = document.createElement("text");
        let genero = document.createElement("text");
        let consola = document.createElement("text");
        let a = document.createElement("h3");
        let b = document.querySelector('#juegos');
        imagen.src=`img/${x.n}.jpg`
        imagen.width=`200`
        b.append(imagen, a, consola, salto, an, salto1, horas, salto2, genero, salto3, salto4);
        a.textContent = x.nombre;
        an.textContent = "Año: " + x.año;
        consola.textContent="Consola: " + x.consola;
        horas.textContent="Horas: " + x.horas;
        genero.textContent= `Género: ${x.genero}`;
    })
}

form2.addEventListener('click', () => {
    dibujar2();
    });
