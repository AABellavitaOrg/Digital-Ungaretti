// variables
let emptyT = "";

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

function preload(){
  //video Veglia
  vidVeglia1 = createVideo("assets/videos/Veglia1.mp4");
  vidVeglia2 = createVideo("assets/videos/Veglia2.mp4");
  vidVeglia3 = createVideo("assets/videos/Veglia3.mp4");
  vidVeglia4 = createVideo("assets/videos/Veglia4.mp4");
  vidVeglia5 = createVideo("assets/videos/Veglia5.mp4");
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

  myPaper = loadImage("assets/images/myPaper.png");
  myBackground = loadImage("assets/images/myBackground.jpg");

}

function setup() {
  //createCanvas(windowWidth,windowHeight);
  createCanvas(1920,1080);
  background(0);
  /*
  image(myBackground, 0, 0, width, height);
  image(myPaper, 0, 0, width-(width/3.5), height);
  */
  image(myBackground, 0, 0, 1920, 1080);
  image(myPaper, -35, -97, 1383, 1205);

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
}

function addveglia1() {
  if (veglia1status == false) {
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
  if (veglia2status == false) {
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
  if (veglia3status == false) {
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
  if (veglia4status == false) {
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
  if (veglia5status == false) {
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

function draw() {
  if (veglia1status == true && vidVeglia1.time()/vidVeglia1.duration() == 1) {
    addveglia2();
  }
  if (veglia2status == true && vidVeglia2.time()/vidVeglia2.duration() == 1) {
    addveglia3();
  }
  if (veglia3status == true && vidVeglia3.time()/vidVeglia3.duration() == 1) {
    addveglia4();
  }
  if (veglia4status == true && vidVeglia4.time()/vidVeglia4.duration() == 1) {
    addveglia5();
  }
  if (veglia5status == true && vidVeglia5.time()/vidVeglia5.duration() == 1) {
    addveglia6();
  }
}

function mousePressed() {
  console.log(vidVeglia1.time());
  if (veglia1status == false && vidVeglia1.time()/vidVeglia1.duration() != 1) {
    addveglia1();
  }
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
  /*
  vidVeglia1.play();
  vidVeglia1.pause();

  vidVeglia1.currentTime = 0;
  vidVeglia2.currentTime = 0;
  vidVeglia3.currentTime = 0;
  vidVeglia4.currentTime = 0;
  vidVeglia5.currentTime = 0;
  */
}
