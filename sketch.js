// variables
let emptyT = "";

////status generale poesie
let veglia = true;
let fratelli = false;
let smcarso = false;
let soldati = false;

let button_veglia;
let button_smcarso;
let button_soldati;
let button_fratelli;

//Veglia
let vegliati = "Veglia";
let veglia01ita = "Un’intera nottata"
let veglia02ita = "buttato vicino";
let veglia03ita = "a un compagno";
let veglia04ita = "massacrato";
let veglia05ita = "con la sua bocca";
let veglia06ita = "digrignata";
let veglia07ita = "volta al plenilunio";
let veglia08ita = "con la congestione";
let veglia09ita = "delle sue mani";
let veglia10ita = "penetrata";
let veglia11ita = "nel mio silenzio";
let veglia12ita = "ho scritto";
let veglia13ita = "lettere piene d’amore";
let veglia15ita = "Non sono mai stato";
let veglia16ita = "tanto";
let veglia17ita = "attaccato alla vita";

let veglia01eng = "A whole night";
let veglia02eng = "thrown near";
let veglia03eng = "to a comrade";
let veglia04eng = "massacred";
let veglia05eng = "With his mouth";
let veglia06eng = "gnashed";
let veglia07eng = "At the hour of full moon";
let veglia08eng = "the cold";
let veglia09eng = "of his hands";
let veglia10eng = "penetrating";
let veglia11eng = "my silence";
let veglia12eng = "I wrote";
let veglia13eng = "letters full of love";
let veglia15eng = "I've never been";
let veglia16eng = "so much";
let veglia17eng = "attached to life";

let veglia1status = false;
let veglia2status = false;
let veglia3status = false;
let veglia4status = false;
let veglia5status = false;
let vegliacounter = 0;


//fratelli
let fratelliti = "Fratelli"
let fratelli01ita = "Di che reggimento siete"
let fratelli02ita = "soldati?"
let fratelli04ita = "Parola tremante"
let fratelli05ita = "nella notte"
let fratelli07ita = "Foglia appena nata"
let fratelli09ita = "Nell'aria spasimante"
let fratelli10ita = "involontaria rivolta"
let fratelli11ita = "dell'uomo presente alla sua"
let fratelli12ita = "fragilità"
let fratelli14ita = "Fratelli."

let fratelli01eng = "What's your regiment"
let fratelli02eng = "brothers?"
let fratelli04eng = "Trembling word"
let fratelli05eng = "in the nigh"
let fratelli07eng = "Leaf that is just born"
let fratelli09eng = "In the spasmodic air"
let fratelli10eng = "involuntary revolt"
let fratelli11eng = "of a man present to his"
let fratelli12eng = "fragility"
let fratelli14eng = "Brothers."

let fratelli1status = false;
let fratelli2status = false;
let fratelli3status = false;


//San Martino del Carso
let smcarsoti = "San Martino del Carso"
let smcarso01ita = "Di queste case";
let smcarso02ita = "non è rimasto"
let smcarso03ita = "che qualche"
let smcarso04ita = "brandello di muro"
let smcarso06ita = "Di tanti"
let smcarso07ita = "che im corrispondevano"
let smcarso08ita = "non è rimasto"
let smcarso09ita = "neppure tanto"
let smcarso11ita = "Ma nel cuore"
let smcarso12ita = "nessuna croce manca"
let smcarso14ita = "È il mio cuore"
let smcarso15ita = "il paese più straziato"

let smcarso01eng = "Of these houses";
let smcarso02eng = "there is nothing left"
let smcarso03eng = "except for some"
let smcarso04eng = "shred of walls"
let smcarso06eng = "Of the many people"
let smcarso07eng = "who loved me back"
let smcarso08eng = "not even that"
let smcarso09eng = "has remained"
let smcarso11eng = "But in my heart"
let smcarso12eng = "no cross is missing"
let smcarso14eng = "It's my heart"
let smcarso15eng = "the most shuttered village"

let smcarso1status = false;
let smcarso2status = false;
let smcarso3status = false;
let smcarso4status = false;


//soldati
let soldatiti = "Soldati"
let soldati01ita = "Si sta come"
let soldati02ita = "d'autunno"
let soldati03ita = "sugli alberi"
let soldati04ita = "le foglie"
let soldati01eng = "It's like being"
let soldati02eng = "in the autumn"
let soldati03eng = "on the trees"
let soldati04eng = "the leaves"
let soldati1status = false;
let soldati2status = false;
let soldati3status = false;
let soldati4status = false;


function preload() {
  //video Veglia
  vidVeglia1 = createVideo("assets/videos/veglia/Veglia_1.mp4");
  vidVeglia2 = createVideo("assets/videos/veglia/Veglia_2.mp4");
  vidVeglia3 = createVideo("assets/videos/veglia/Veglia_3.mp4");
  vidVeglia4 = createVideo("assets/videos/veglia/Veglia_4.mp4");
  vidVeglia5 = createVideo("assets/videos/veglia/Veglia_5.mp4");
  vidVeglia1.position(960, 0);
  vidVeglia2.position(960, 0);
  vidVeglia3.position(960, 0);
  vidVeglia4.position(960, 0);
  vidVeglia5.position(960, 0);
  vidVeglia1.hide();
  vidVeglia2.hide();
  vidVeglia3.hide();
  vidVeglia4.hide();
  vidVeglia5.hide();

  //vdeo Fratelli
  vidFratelli1 = createVideo("assets/videos/fratelli/fratelli_1.mp4");
  vidFratelli2 = createVideo("assets/videos/fratelli/fratelli_2.mp4");
  vidFratelli3 = createVideo("assets/videos/fratelli/fratelli_3.mp4");
  vidFratelli1.position(960, 0);
  vidFratelli2.position(960, 0);
  vidFratelli3.position(960, 0);
  vidFratelli1.hide();
  vidFratelli2.hide();
  vidFratelli3.hide();

  //video San Martino del Carso
  vidSmcarso1 = createVideo("assets/videos/smcarso/Smcarso_1.mp4");
  vidSmcarso2 = createVideo("assets/videos/smcarso/Smcarso_2.mp4");
  vidSmcarso3 = createVideo("assets/videos/smcarso/Smcarso_3.mp4");
  vidSmcarso4 = createVideo("assets/videos/smcarso/Smcarso_4.mp4");
  vidSmcarso1.position(960, 0);
  vidSmcarso2.position(960, 0);
  vidSmcarso3.position(960, 0);
  vidSmcarso4.position(960, 0);
  vidSmcarso1.hide();
  vidSmcarso2.hide();
  vidSmcarso3.hide();
  vidSmcarso4.hide();


  vidSoldati = createVideo("assets/videos/soldati/Soldati.mp4");
  vidSoldati.position(960, 0);
  vidSoldati.hide();


  //myPaper = loadImage("assets/images/myPaper.png");
  //myBackground = loadImage("assets/images/myBackgroundHole.png");

}

function setup() {
  //createCanvas(windowWidth,windowHeight);
  createCanvas(1920, 1080);
  background('#1b1b1b');

  carta = createImg("assets/images/myPaper.png");
  carta.position(-33, -91);
  carta.style('z-index', 10);
  carta.style('width: 1383px');
  carta.style('height: 1205px');

  linea = createImg("assets/images/linea.png");
  linea.position(318, 283);
  linea.style('z-index', 11);

  sfondo = createImg("assets/images/myBackgroundHole.png");
  sfondo.position(0, 0);
  sfondo.style('z-index', 8);
  sfondo.style('width: 1920px');
  sfondo.style('height: 1080px');

  text_ti = createDiv(emptyT);
  text_ti.id("text_ti");
  text_ti.class("maintitle");

  //text ita
  text_01 = createDiv(emptyT);
  text_01.id("text_01");
  text_01.class("poem01ita");

  text_02 = createDiv(emptyT);
  text_02.id("text_02");
  text_02.class("poem02ita");

  text_03 = createDiv(emptyT);
  text_03.id("text_03");
  text_03.class("poem03ita");

  text_04 = createDiv(emptyT);
  text_04.id("text_04");
  text_04.class("poem04ita");

  text_05 = createDiv(emptyT);
  text_05.id("text_05");
  text_05.class("poem05ita");

  text_06 = createDiv(emptyT);
  text_06.id("text_06");
  text_06.class("poem06ita");

  text_07 = createDiv(emptyT);
  text_07.id("text_07");
  text_07.class("poem07ita");

  text_08 = createDiv(emptyT);
  text_08.id("text_08");
  text_08.class("poem08ita");

  text_09 = createDiv(emptyT);
  text_09.id("text_09");
  text_09.class("poem09ita");

  text_10 = createDiv(emptyT);
  text_10.id("text_10");
  text_10.class("poem10ita");

  text_11 = createDiv(emptyT);
  text_11.id("text_11");
  text_11.class("poem11ita");

  text_12 = createDiv(emptyT);
  text_12.id("text_12");
  text_12.class("poem12ita");

  text_13 = createDiv(emptyT);
  text_13.id("text_13");
  text_13.class("poem13ita");

  text_14 = createDiv(emptyT);
  text_14.id("text_14");
  text_14.class("poem14ita");

  text_15 = createDiv(emptyT);
  text_15.id("text_15");
  text_15.class("poem15ita");

  text_16 = createDiv(emptyT);
  text_16.id("text_16");
  text_16.class("poem16ita");

  text_17 = createDiv(emptyT)
  text_17.id("text_17");
  text_17.class("poem17ita");

  //text eng
  text_01e = createDiv(emptyT);
  text_01e.id("text_01e");
  text_01e.class("poem01eng");

  text_02e = createDiv(emptyT);
  text_02e.id("text_02e");
  text_02e.class("poem02eng");

  text_03e = createDiv(emptyT);
  text_03e.id("text_03e");
  text_03e.class("poem03eng");

  text_04e = createDiv(emptyT);
  text_04e.id("text_04e");
  text_04e.class("poem04eng");

  text_04e = createDiv(emptyT);
  text_04e.id("text_04e");
  text_04e.class("poem04eng");

  text_05e = createDiv(emptyT);
  text_05e.id("text_05e");
  text_05e.class("poem05eng");

  text_06e = createDiv(emptyT);
  text_06e.id("text_06e");
  text_06e.class("poem06eng");

  text_07e = createDiv(emptyT);
  text_07e.id("text_07e");
  text_07e.class("poem07eng");

  text_08e = createDiv(emptyT);
  text_08e.id("text_08e");
  text_08e.class("poem08eng");

  text_09e = createDiv(emptyT);
  text_09e.id("text_09e");
  text_09e.class("poem09eng");

  text_10e = createDiv(emptyT);
  text_10e.id("text_10e");
  text_10e.class("poem10eng");

  text_11e = createDiv(emptyT);
  text_11e.id("text_11e");
  text_11e.class("poem11eng");

  text_12e = createDiv(emptyT);
  text_12e.id("text_12e");
  text_12e.class("poem12eng");

  text_13e = createDiv(emptyT);
  text_13e.id("text_13e");
  text_13e.class("poem13eng");

  text_14e = createDiv(emptyT);
  text_14e.id("text_14e");
  text_14e.class("poem14eng");

  text_15e = createDiv(emptyT);
  text_15e.id("text_15e");
  text_15e.class("poem15eng");

  text_16e = createDiv(emptyT);
  text_16e.id("text_16e");
  text_16e.class("poem16eng");

  text_17e = createDiv(emptyT);
  text_17e.id("text_17e");
  text_17e.class("poem17eng");

  data1 = createButton("23 Dicembre 1915")
  data1.class("data1")

  data2 = createButton("15 Luglio 1916");
  data2.class("data2");

  data3 = createButton("27 Agosto 1916");
  data3.class("data3");

  data4 = createButton("13 Luglio 1918");
  data4.class("data4");

  button_veglia = createButton("")
  button_veglia.style('border-radius', '50%');
  button_veglia.style('z-index', 12);

  button_fratelli = createButton("")
  button_fratelli.style('border-radius', '50%');
  button_fratelli.style('z-index', 12);

  button_smcarso = createButton("")
  button_smcarso.style('border-radius', '50%');
  button_smcarso.style('z-index', 12);

  button_soldati = createButton("")
  button_soldati.style('border-radius', '50%')
  button_soldati.style('z-index', 12);

}

/////aggiunta condizione veglia == true
function addveglia1() {
  if (veglia1status == false && veglia == true) {
    document.getElementById('text_ti').innerHTML = vegliati;
    document.getElementById('text_01').innerHTML = veglia01ita;
    document.getElementById('text_02').innerHTML = veglia02ita;
    document.getElementById('text_03').innerHTML = veglia03ita;

    document.getElementById('text_01e').innerHTML = veglia01eng;
    document.getElementById('text_02e').innerHTML = veglia02eng;
    document.getElementById('text_03e').innerHTML = veglia03eng;

    vidVeglia1.show();
    vidVeglia1.play();
    veglia1status = true;
  }
}

function addveglia2() {
  if (veglia2status == false && veglia == true) {
    document.getElementById('text_04').innerHTML = veglia04ita;
    document.getElementById('text_05').innerHTML = veglia05ita;
    document.getElementById('text_06').innerHTML = veglia06ita;
    document.getElementById('text_07').innerHTML = veglia07ita;

    document.getElementById('text_04e').innerHTML = veglia04eng;
    document.getElementById('text_05e').innerHTML = veglia05eng;
    document.getElementById('text_06e').innerHTML = veglia06eng;
    document.getElementById('text_07e').innerHTML = veglia07eng;

    vidVeglia1.hide();
    vidVeglia2.show();
    vidVeglia2.play();

    veglia1status = false;
    veglia2status = true;
  }
}

function addveglia3() {
  if (veglia3status == false && veglia == true) {
    document.getElementById('text_08').innerHTML = veglia08ita;
    document.getElementById('text_09').innerHTML = veglia09ita;
    document.getElementById('text_10').innerHTML = veglia10ita;

    document.getElementById('text_08e').innerHTML = veglia08eng;
    document.getElementById('text_09e').innerHTML = veglia09eng;
    document.getElementById('text_10e').innerHTML = veglia10eng;

    vidVeglia2.hide();
    vidVeglia3.show();
    vidVeglia3.play();
    veglia2status = false;
    veglia3status = true;
  }
}

function addveglia4() {
  if (veglia4status == false && veglia == true) {
    document.getElementById('text_11').innerHTML = veglia11ita;
    document.getElementById('text_12').innerHTML = veglia12ita;
    document.getElementById('text_13').innerHTML = veglia13ita;

    document.getElementById('text_11e').innerHTML = veglia11eng;
    document.getElementById('text_12e').innerHTML = veglia12eng;
    document.getElementById('text_13e').innerHTML = veglia13eng;

    vidVeglia3.hide();
    vidVeglia4.show();
    vidVeglia4.play();
    veglia3status = false;
    veglia4status = true;
  }
}

function addveglia5() {
  if (veglia5status == false && veglia == true) {
    document.getElementById('text_15').innerHTML = veglia15ita;
    document.getElementById('text_16').innerHTML = veglia16ita;
    document.getElementById('text_17').innerHTML = veglia17ita;

    document.getElementById('text_15e').innerHTML = veglia15eng;
    document.getElementById('text_16e').innerHTML = veglia16eng;
    document.getElementById('text_17e').innerHTML = veglia17eng;

    vidVeglia4.hide();
    vidVeglia5.show();
    vidVeglia5.play();
    veglia4status = false;
    veglia5status = true;
  }
}

function addveglia6() {
  erasePoem();
  veglia5status = false;
  vidVeglia5.hide();
}

/////////////////ADD FRATELLI//////

function addfratelli1() {
  if (fratelli1status == false && fratelli == true) {
    document.getElementById('text_ti').innerHTML = fratelliti;
    document.getElementById('text_01').innerHTML = fratelli01ita;
    document.getElementById('text_02').innerHTML = fratelli02ita;
    document.getElementById('text_04').innerHTML = fratelli04ita;
    document.getElementById('text_05').innerHTML = fratelli05ita;
    //
    document.getElementById('text_01e').innerHTML = fratelli01eng;
    document.getElementById('text_02e').innerHTML = fratelli02eng;
    document.getElementById('text_04e').innerHTML = fratelli04eng;
    document.getElementById('text_05e').innerHTML = fratelli05eng;
    //
    //
    vidFratelli1.show();
    vidFratelli1.play();
    fratelli1status = true;
  }
}

function addfratelli2() {
  if (fratelli2status == false && fratelli == true) {
    document.getElementById('text_07').innerHTML = fratelli07ita;
    document.getElementById('text_09').innerHTML = fratelli09ita;
    //
    document.getElementById('text_07e').innerHTML = fratelli07eng;
    document.getElementById('text_09e').innerHTML = fratelli09eng;
    //
    vidFratelli2.show();
    vidFratelli2.play();
    vidFratelli1.hide();
    fratelli2status = true;
    fratelli1status = false;
  }
}

function addfratelli3() {
  if (fratelli3status == false && fratelli == true) {
    document.getElementById('text_10').innerHTML = fratelli10ita;
    document.getElementById('text_11').innerHTML = fratelli11ita;
    document.getElementById('text_12').innerHTML = fratelli12ita;
    document.getElementById('text_14').innerHTML = fratelli14ita;
    //
    document.getElementById('text_10e').innerHTML = fratelli10eng;
    document.getElementById('text_11e').innerHTML = fratelli11eng;
    document.getElementById('text_12e').innerHTML = fratelli12eng;
    document.getElementById('text_14e').innerHTML = fratelli14eng;
    //
     vidFratelli3.show();
     vidFratelli3.play();
     vidFratelli2.hide();
    fratelli3status = true;
    fratelli2status = false;
  }
}

function addfratelli4() {
  erasePoem();
  fratelli3status = false;
  vidFratelli3.hide();
}



/////////////////ADD SAN MARTINO DEL CARSO//////

function addsmcarso1() {
  if (smcarso1status == false && smcarso == true) {
    document.getElementById('text_ti').innerHTML = smcarsoti;
    document.getElementById('text_01').innerHTML = smcarso01ita;
    document.getElementById('text_02').innerHTML = smcarso02ita;
    document.getElementById('text_03').innerHTML = smcarso03ita;
    document.getElementById('text_04').innerHTML = smcarso04ita;
    //
    document.getElementById('text_01e').innerHTML = smcarso01eng;
    document.getElementById('text_02e').innerHTML = smcarso02eng;
    document.getElementById('text_03e').innerHTML = smcarso03eng;
    document.getElementById('text_04e').innerHTML = smcarso04eng;
    //
    vidSmcarso1.show();
    vidSmcarso1.play();
    smcarso1status = true;
  }
}

function addsmcarso2() {
  if (smcarso2status == false && smcarso == true) {
    document.getElementById('text_06').innerHTML = smcarso06ita;
    document.getElementById('text_07').innerHTML = smcarso07ita;
    document.getElementById('text_08').innerHTML = smcarso08ita;
    document.getElementById('text_09').innerHTML = smcarso09ita;

    document.getElementById('text_06e').innerHTML = smcarso06eng;
    document.getElementById('text_07e').innerHTML = smcarso07eng;
    document.getElementById('text_08e').innerHTML = smcarso08eng;
    document.getElementById('text_09e').innerHTML = smcarso09eng;

    vidSmcarso1.hide();
    vidSmcarso2.show();
    vidSmcarso2.play();

    smcarso1status = false;
    smcarso2status = true;
  }
}

function addsmcarso3() {
  if (smcarso3status == false && smcarso == true) {
    document.getElementById('text_11').innerHTML = smcarso11ita;
    document.getElementById('text_12').innerHTML = smcarso12ita;

    document.getElementById('text_11e').innerHTML = smcarso11eng;
    document.getElementById('text_12e').innerHTML = smcarso12eng;

    vidSmcarso2.hide();
    vidSmcarso3.show();
    vidSmcarso3.play();

    smcarso2status = false;
    smcarso3status = true;
  }
}

function addsmcarso4() {
  if (smcarso4status == false && smcarso == true) {
    document.getElementById('text_14').innerHTML = smcarso14ita;
    document.getElementById('text_15').innerHTML = smcarso15ita;

    document.getElementById('text_14e').innerHTML = smcarso14eng;
    document.getElementById('text_15e').innerHTML = smcarso15eng;

    vidSmcarso3.hide();
    vidSmcarso4.show();
    vidSmcarso4.play();
    smcarso3status = false;
    smcarso4status = true;
  }
}

function addsmcarso5() {
  erasePoem();
  smcarso4status = false;
  vidSmcarso4.hide();
}

/////////////////ADD SOLDATI//////


function addsoldati1() {
  if (soldati1status == false && soldati == true) {
    document.getElementById('text_ti').innerHTML = soldatiti;
    document.getElementById('text_01').innerHTML = soldati01ita;
        //
    document.getElementById('text_01e').innerHTML = soldati01eng;

    vidSoldati.show();
    vidSoldati.play();
    soldati1status = true;

  }
}

function addsoldati2() {
  if (soldati2status == false && soldati == true) {
    document.getElementById('text_02').innerHTML = soldati02ita;
        //
    document.getElementById('text_02e').innerHTML = soldati02eng;
   console.log("hello!");
    soldati2status = true;
   soldati1status = false;
  }
}

function addsoldati3() {
  if (soldati3status == false && soldati == true) {
    document.getElementById('text_03').innerHTML = soldati03ita;
        //
    document.getElementById('text_03e').innerHTML = soldati03eng;

    soldati3status = true;
    soldati2status = false;
  }
}

function addsoldati4() {
  if (soldati4status == false && soldati == true) {
    document.getElementById('text_04').innerHTML = soldati04ita;
        //
    document.getElementById('text_04e').innerHTML = soldati04eng;

    soldati4status = true;
    soldati3status = false;
  }
}

function addsoldati5() {
  erasePoem();
  soldati4status = false;
  vidSoldati.hide();
}


function draw() {

let dur = vidSoldati.time() / vidSoldati.duration()
console.log(dur);

  if (veglia == false) {
    button_veglia.mousePressed(switchToVeglia);
    data1.mousePressed(switchToVeglia);
  }
  if (veglia == true) {
    button_veglia.style('background-color', '#FFFFFF');
    button_veglia.style('padding', '10px');
    button_veglia.position(310-3, 273-3);

    button_fratelli.style('background-color', '#000000');
    button_fratelli.style('padding', '7px');
    button_fratelli.position(310, 407);

    button_smcarso.style('background-color', '#000000');
    button_smcarso.style('padding', '7px');
    button_smcarso.position(310, 544);

    button_soldati.style('background-color', '#000000');
    button_soldati.style('padding', '7px');
    button_soldati.position(310, 681);

    data1.style('color', '#000000');
    data2.style('color', '#656565');
    data3.style('color', '#656565');
    data4.style('color', '#656565');
  }


  if (fratelli == false) {
    button_fratelli.mousePressed(switchToFratelli);
    data2.mousePressed(switchToFratelli);
  }
  if (fratelli == true) {
    button_veglia.style('background-color', '#000000');
    button_veglia.style('padding', '7px');
    button_veglia.position(310, 273);

    button_fratelli.style('background-color', '#FFFFFF');
    button_fratelli.style('padding', '10px');
    button_fratelli.position(310-3, 407-3);

    button_smcarso.style('background-color', '#000000');
    button_smcarso.style('padding', '7px');
    button_smcarso.position(310, 544);

    button_soldati.style('background-color', '#000000');
    button_soldati.style('padding', '7px');
    button_soldati.position(310, 681);

    data1.style('color', '#656565');
    data2.style('color', '#000000');
    data3.style('color', '#656565');
    data4.style('color', '#656565');
  }


  if (smcarso == false) {
    button_smcarso.mousePressed(switchToSmcarso);
    data3.mousePressed(switchToSmcarso);
  }
  if (smcarso == true) {
    button_veglia.style('background-color', '#000000');
    button_veglia.style('padding', '7px');
    button_veglia.position(310, 273);

    button_fratelli.style('background-color', '#000000');
    button_fratelli.style('padding', '7px');
    button_fratelli.position(310, 407);

    button_smcarso.style('background-color', '#FFFFFF');
    button_smcarso.style('padding', '10px');
    button_smcarso.position(310-3, 544-3);

    button_soldati.style('background-color', '#000000');
    button_soldati.style('padding', '7px');
    button_soldati.position(310, 681);

    data1.style('color', '#656565');
    data2.style('color', '#656565');
    data3.style('color', '#000000');
    data4.style('color', '#656565');
  }


  if (soldati == false) {
    button_soldati.mousePressed(switchToSoldati);
    data4.mousePressed(switchToSoldati);
  }
  if (soldati == true) {
    button_veglia.style('background-color', '#000000');
    button_veglia.style('padding', '7px');
    button_veglia.position(310, 273);

    button_smcarso.style('background-color', '#000000');
    button_smcarso.style('padding', '7px');
    button_smcarso.position(310, 544);

    button_fratelli.style('background-color', '#000000');
    button_fratelli.style('padding', '7px');
    button_fratelli.position(310, 407);

    button_soldati.style('background-color', '#ffffff');
    button_soldati.style('padding', '10px');
    button_soldati.position(310-3, 681-3);

    data1.style('color', '#656565');
    data2.style('color', '#656565');
    data3.style('color', '#656565');
    data4.style('color', '#000000');
  }
  if (soldati1status == false && vidSoldati.time() / vidSoldati.duration() != 0.1) {
    addsoldati1();
  } else if (soldati1status == true && vidSoldati.time() / vidSoldati.duration() >= 0.25 && vidSoldati.time() / vidSoldati.duration() <0.5) {
    addsoldati2();
  } else if (soldati2status == true && vidSoldati.time() / vidSoldati.duration() >= 0.5  && vidSoldati.time() / vidSoldati.duration() < 0.75) {
    addsoldati3();
  } else if (soldati3status == true && vidSoldati.time() / vidSoldati.duration() >= 0.75  && vidSoldati.time() / vidSoldati.duration() < 1) {
    addsoldati4();
  }

}

function mousePressed() {
  //veglia
  if (veglia1status == false && vidVeglia1.time() / vidVeglia1.duration() != 1) {
    addveglia1();
  } else if (veglia1status == true && vidVeglia1.time() / vidVeglia1.duration() == 1) {
    addveglia2();
  } else if (veglia2status == true && vidVeglia2.time() / vidVeglia2.duration() == 1) {
    addveglia3();
  } else if (veglia3status == true && vidVeglia3.time() / vidVeglia3.duration() == 1) {
    addveglia4();
  } else if (veglia4status == true && vidVeglia4.time() / vidVeglia4.duration() == 1) {
    addveglia5();
  } else if (veglia5status == true && vidVeglia5.time() / vidVeglia5.duration() == 1) {
    addveglia6();
  }

  //fratelli
  if (fratelli1status == false && vidFratelli1.time() / vidFratelli1.duration() != 1) {
    addfratelli1();
  } else if (fratelli1status == true && vidFratelli1.time() / vidFratelli1.duration() == 1) {
    addfratelli2();
  } else if (fratelli2status == true && vidFratelli2.time() / vidFratelli2.duration() == 1) {
    addfratelli3();
  } else if (fratelli3status == true && vidFratelli3.time() / vidFratelli3.duration() == 1) {
    addfratelli4();
  }

  //san martino del carso
  if (smcarso1status == false && vidSmcarso1.time() / vidSmcarso1.duration() != 1) {
    addsmcarso1();
  } else if (smcarso1status == true && vidSmcarso1.time() / vidSmcarso1.duration() == 1) {
    addsmcarso2();
  } else if (smcarso2status == true && vidSmcarso2.time() / vidSmcarso2.duration() == 1) {
    addsmcarso3();
  } else if (smcarso3status == true && vidSmcarso3.time() / vidSmcarso3.duration() == 1) {
    addsmcarso4();
  } else if (smcarso4status == true && vidSmcarso4.time() / vidSmcarso4.duration() == 1) {
    addsmcarso5();
  }
}

if (soldati4status == true && vidSoldati.time() / vidSoldati.duration() == 1) {
  addsoldati5();
}


function erasePoem() {
  document.getElementById('text_ti').innerHTML = "";
  document.getElementById('text_01').innerHTML = "";
  document.getElementById('text_02').innerHTML = "";
  document.getElementById('text_03').innerHTML = "";
  document.getElementById('text_04').innerHTML = "";
  document.getElementById('text_05').innerHTML = "";
  document.getElementById('text_06').innerHTML = "";
  document.getElementById('text_07').innerHTML = "";
  document.getElementById('text_08').innerHTML = "";
  document.getElementById('text_09').innerHTML = "";
  document.getElementById('text_10').innerHTML = "";
  document.getElementById('text_11').innerHTML = "";
  document.getElementById('text_12').innerHTML = "";
  document.getElementById('text_13').innerHTML = "";
  document.getElementById('text_14').innerHTML = "";
  document.getElementById('text_15').innerHTML = "";
  document.getElementById('text_16').innerHTML = "";
  document.getElementById('text_17').innerHTML = "";

  document.getElementById('text_01e').innerHTML = "";
  document.getElementById('text_02e').innerHTML = "";
  document.getElementById('text_03e').innerHTML = "";
  document.getElementById('text_04e').innerHTML = "";
  document.getElementById('text_05e').innerHTML = "";
  document.getElementById('text_06e').innerHTML = "";
  document.getElementById('text_07e').innerHTML = "";
  document.getElementById('text_08e').innerHTML = "";
  document.getElementById('text_09e').innerHTML = "";
  document.getElementById('text_10e').innerHTML = "";
  document.getElementById('text_11e').innerHTML = "";
  document.getElementById('text_12e').innerHTML = "";
  document.getElementById('text_13e').innerHTML = "";
  document.getElementById('text_14e').innerHTML = "";
  document.getElementById('text_15e').innerHTML = "";
  document.getElementById('text_16e').innerHTML = "";
  document.getElementById('text_17e').innerHTML = "";

  vidVeglia1.time(0);
  vidFratelli1.time(0);
  vidSmcarso1.time(0);

}

function switchToVeglia() {
  erasePoem();
  veglia = true;
  veglia1status = false;

  if (fratelli == true) {
    fratelli = false;
    fratelli1status = false;
    fratelli2status = false;
    fratelli3status = false;

    vidFratelli1.hide();
    vidFratelli2.hide();
    vidFratelli3.hide();
  }

  if (smcarso == true) {
    smcarso = false;
    smcarso1status = false;
    smcarso2status = false;
    smcarso3status = false;
    smcarso4status = false;

    vidSmcarso1.hide();
    vidSmcarso2.hide();
    vidSmcarso3.hide();
    vidSmcarso4.hide();
  }

  if (soldati == true) {
    soldati = false;
    soldati1status = false;
    soldati2status = false;
    soldati3status = false;
    soldati4status = false;

    vidSoldati.hide();
  }
  addveglia1();
}


function switchToFratelli() {
  erasePoem();
  fratelli = true;
  fratelli1status = false;

  if (veglia == true) {
    veglia = false;
    veglia1status = false;
    veglia2status = false;
    veglia3status = false;
    veglia4status = false;
    veglia5status = false;

    vidVeglia1.hide();
    vidVeglia2.hide();
    vidVeglia3.hide();
    vidVeglia4.hide();
    vidVeglia5.hide();
  }

  if (smcarso == true) {
    smcarso = false;
    smcarso1status = false;
    smcarso2status = false;
    smcarso3status = false;
    smcarso4status = false;

    vidSmcarso1.hide();
    vidSmcarso2.hide();
    vidSmcarso3.hide();
    vidSmcarso4.hide();
  }

  if (soldati == true) {
    soldati = false;
    soldati1status = false;
    soldati2status = false;
    soldati3status = false;
    soldati4status = false;

    vidSoldati.hide();
  }
  addfratelli1();
}



function switchToSmcarso() {
  erasePoem();
  smcarso = true;
  smcarso1status = false;

  if (veglia == true) {
    veglia = false;
    veglia1status = false;
    veglia2status = false;
    veglia3status = false;
    veglia4status = false;
    veglia5status = false;

    vidVeglia1.hide();
    vidVeglia2.hide();
    vidVeglia3.hide();
    vidVeglia4.hide();
    vidVeglia5.hide();
  }

  if (fratelli == true) {
    fratelli = false;
    fratelli1status == false;
    fratelli2status == false;
    fratelli3status == false;

    vidFratelli1.hide();
    vidFratelli2.hide();
    vidFratelli3.hide();
  }

  if (soldati == true) {
    soldati = false;
    soldati1status = false;
    soldati2status = false;
    soldati3status = false;
    soldati4status = false;

    vidSoldati.hide();
  }
  addsmcarso1();
}


function switchToSoldati() {
  erasePoem();
  soldati = true;
  soldati1status = false;

  if (veglia == true) {
    veglia = false;
    veglia1status = false;
    veglia2status = false;
    veglia3status = false;
    veglia4status = false;
    veglia5status = false;

    vidVeglia1.hide();
    vidVeglia2.hide();
    vidVeglia3.hide();
    vidVeglia4.hide();
    vidVeglia5.hide();
  }

  if (fratelli == true) {
    fratelli = false;
    fratelli1status == false;
    fratelli2status == false;
    fratelli3status == false;

    vidFratelli1.hide();
    vidFratelli2.hide();
    vidFratelli3.hide();
  }

  if (smcarso == true) {
    smcarso = false;
    smcarso1status = false;
    smcarso2status = false;
    smcarso3status = false;
    smcarso4status = false;

    vidSmcarso1.hide();
    vidSmcarso2.hide();
    vidSmcarso3.hide();
    vidSmcarso4.hide();
  }
  addsoldati1();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
