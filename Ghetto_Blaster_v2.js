var player = document.getElementById("monPlayer");
//tableau contenant le nom de mes musiques
var playList = new Array();
playList = [
  "Cream_Blade",
  "Chime_Lifelong",
  "Cartoon_Howling",
  "Futuristik_Like_U_Say",
  "Tsuki_Turn_On_The_Lights",
];
//position initial = premiere musique;
var position = 0;
//=================== GESTION DES ANIMATIONS ===================//
const music_wave = document.getElementById("music_wave");

const speaker_left = document.getElementById("speaker_left");
const speaker_right = document.getElementById("speaker_right");

const el_1 = document.getElementById("el_1");
const el_2 = document.getElementById("el_2");
const el_3 = document.getElementById("el_3");
const el_4 = document.getElementById("el_4");
const el_5 = document.getElementById("el_5");
const el_6 = document.getElementById("el_6");

const er_1 = document.getElementById("er_1");
const er_2 = document.getElementById("er_2");
const er_3 = document.getElementById("er_3");
const er_4 = document.getElementById("er_4");
const er_5 = document.getElementById("er_5");
const er_6 = document.getElementById("er_6");

const sl_1 = document.getElementById("sl_1");
const sl_2 = document.getElementById("sl_2");
const sl_3 = document.getElementById("sl_3");
const sl_4 = document.getElementById("sl_4");

const sr_1 = document.getElementById("sr_1");
const sr_2 = document.getElementById("sr_2");
const sr_3 = document.getElementById("sr_3");
const sr_4 = document.getElementById("sr_4");

//=================== PLAY ===================//
// el = equalizer left er = equalizer right sl= speaker left sr = speaker right
function joue() {
  player.play();
  txt1.innerText = txt[position];
  txt2.innerText = txt[position];
  track_image.src = "Pochette/" + pochette[position] + ".jpg";

  music_wave.style.animationPlayState = "running";
  el_1.style.animationPlayState = "running";
  el_2.style.animationPlayState = "running";
  el_3.style.animationPlayState = "running";
  el_4.style.animationPlayState = "running";
  el_5.style.animationPlayState = "running";
  el_6.style.animationPlayState = "running";

  er_1.style.animationPlayState = "running";
  er_2.style.animationPlayState = "running";
  er_3.style.animationPlayState = "running";
  er_4.style.animationPlayState = "running";
  er_5.style.animationPlayState = "running";
  er_6.style.animationPlayState = "running";

  sl_1.style.animationPlayState = "running";
  sl_2.style.animationPlayState = "running";
  sl_3.style.animationPlayState = "running";
  sl_4.style.animationPlayState = "running";

  sr_1.style.animationPlayState = "running";
  sr_2.style.animationPlayState = "running";
  sr_3.style.animationPlayState = "running";
  sr_4.style.animationPlayState = "running";
}

function arret() {
  player.currentTime = 0;
  player.pause();
}
//=================== PAUSE ===================//
// el = equalizer left er = equalizer right sl= speaker left sr = speaker right
function pause() {
  player.pause();
  music_wave.style.animationPlayState = "paused";

  sl_1.style.animationPlayState = "paused";
  sl_2.style.animationPlayState = "paused";
  sl_3.style.animationPlayState = "paused";
  sl_4.style.animationPlayState = "paused";

  sr_1.style.animationPlayState = "paused";
  sr_2.style.animationPlayState = "paused";
  sr_3.style.animationPlayState = "paused";
  sr_4.style.animationPlayState = "paused";

  el_1.style.animationPlayState = "paused";
  el_2.style.animationPlayState = "paused";
  el_3.style.animationPlayState = "paused";
  el_4.style.animationPlayState = "paused";
  el_5.style.animationPlayState = "paused";
  el_6.style.animationPlayState = "paused";

  er_1.style.animationPlayState = "paused";
  er_2.style.animationPlayState = "paused";
  er_3.style.animationPlayState = "paused";
  er_4.style.animationPlayState = "paused";
  er_5.style.animationPlayState = "paused";
  er_6.style.animationPlayState = "paused";
}
//=================== Suivante ===================//
function next() {
  if (position < playList.length - 1) {
    position++;
  } else {
    position = playList.length - 1;
  }
  let index = position;
  player.src = "Musique/" + playList[index] + ".mp3";
  player.load();
  joue();
}
//=================== Precedente ===================//
function prev() {
  if (position > 0) {
    position--;
  } else {
    position = 0;
  }
  let index = position;
  player.src = "Musique/" + playList[index] + ".mp3";
  player.load();
  joue();
}
//=================== SHUFFLE ===================//

function shuffle() {
  var index = Math.floor(Math.random() * playList.length);
  player.src = "Musique/" + playList[index] + ".mp3";
  player.load();
  joue();
}
//=================== GESTION TITRE DES CHANSONS ===================//
var txt1 = document.getElementById("txt1");
var txt = new Array();
txt = [
  "- Cream Blade - Heavenly ",
  "- Chime - Lifelong ",
  "- Cartoon - Howling ft. Asena(Andromedik Remix ",
  "- Futuristik - Like U Say ",
  "- Tsuki - Turn Up the Lights",
];
var txt2 = document.getElementById("txt2");
var txt = new Array();
txt = [
  "- Cream Blade - Heavenly  ",
  "- Chime - Lifelong",
  "- Cartoon - Howling ft. Asena(Andromedik Remix)",
  "- Futuristik - Like U Say",
  "- Tsuki - Turn Up the Lights",
];
//=================== GESTION DES POCHETTES ALBUMS ===================//
var track_image = document.getElementById("images");
var pochette = new Array();
pochette = [
  "Cream_Blade_Heavenly",
  "Life_Long",
  "Cartoon_Howling",
  "Like_U_Say",
  "Tsuki",
];

//=================== VOLUME ===================//
const sound_20 = document.getElementById("sound_20");
const sound_40 = document.getElementById("sound_40");
const sound_60 = document.getElementById("sound_60");
const sound_80 = document.getElementById("sound_80");
const sound_100 = document.getElementById("sound_100");

function changevolume(val) {
  player.volume = val;
  if (val == 0.2) {
    sound_20.style.backgroundColor = "#fca104";
    sound_40.style.backgroundColor = "#bbb";
    sound_60.style.backgroundColor = "#bbb";
    sound_80.style.backgroundColor = "#bbb";
    sound_100.style.backgroundColor = "#bbb";
  }
  if (val == 0.4) {
    sound_20.style.backgroundColor = "#fca104";
    sound_40.style.backgroundColor = "#fca104";
    sound_60.style.backgroundColor = "#bbb";
    sound_80.style.backgroundColor = "#bbb";
    sound_100.style.backgroundColor = "#bbb";
  }
  if (val == 0.6) {
    sound_20.style.backgroundColor = "#fca104";
    sound_40.style.backgroundColor = "#fca104";
    sound_60.style.backgroundColor = "#fca104";
    sound_80.style.backgroundColor = "#bbb";
    sound_100.style.backgroundColor = "#bbb";
  }
  if (val == 0.8) {
    sound_20.style.backgroundColor = "#fca104";
    sound_40.style.backgroundColor = "#fca104";
    sound_60.style.backgroundColor = "#fca104";
    sound_80.style.backgroundColor = "#fca104";
    sound_100.style.backgroundColor = "#bbb";
  }
  if (val == 1) {
    sound_20.style.backgroundColor = "#fca104";
    sound_40.style.backgroundColor = "#fca104";
    sound_60.style.backgroundColor = "#fca104";
    sound_80.style.backgroundColor = "#fca104";
    sound_100.style.backgroundColor = "#fca104";
  }
}

//=================== TEMPS DE LA CHANSON ===================//
//=================== INTERACTION MICRO ===================//

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; // on selection une api selon le navigateur
var recognition = new SpeechRecognition(); // on crée l'objet par instantiation
recognition.continuous = false; // le navigateur n'écoutera pas en continu et c'est une action de notre part qui lancera la reconnaissance
recognition.lang = "fr-FR"; // on définit la langue, surtout pour l'accent
recognition.interimResults = false; //on ne souhaite pas avoir les résultats de l'interprétation en cours d'écoute
recognition.maxAlternatives = 1;

var lancer = document.querySelector("#go"); // on sélectionne un élément de la page

lancer.addEventListener("click", fctLance); // on lui attribue une action
function fctLance() {
  //et un evenement
  recognition.start();
}

// notre base de données de question et de réponse
var question = [
  "où est montpellier",
  "dans quel pays est montpellier",
  "j'ai faim",
  "j'ai soif",
];
var reponse = [
  "dans le département de l'hérault",
  "en France",
  "va manger",
  "va boire de l'eau",
];

// si un événement de reconnaissance fonctionne, on récupère le résultat
recognition.onresult = function (event) {
  var textReconnu = event.results[0][0].transcript;
  console.log("entendu: " + textReconnu);

  for (key in question) {
    //on cherche la similitude dans la base pour afficher le résultat
    if (question[key] == textReconnu.toLowerCase()) {
      console.log(reponse[key]);
    }
    if (textReconnu.toLowerCase() == "play") {
      player.play();
      console.log("lance le son");
    }
    if (textReconnu.toLowerCase() == "pause") {
      player.pause();
      console.log("arret du son");
    }
    if (textReconnu.toLowerCase() == "suivante") {
      next();
      console.log("chanson suivante");
    }
  }
};
