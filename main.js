/*console.log("Hola Mundo");
var sonido   = new Audio();
sonido.src = "sonido.mp3";*/

console.log("Hola Mundo");

var sonidos = [];
var pauseButton = document.getElementById("pauseButton");

function createAudioElement(src) {
    var audio = new Audio();
    audio.src = src;
    sonidos.push(audio);
    return audio;
}

var buttons = document.querySelectorAll(".sound-button");
buttons.forEach(function(button) {
    button.addEventListener("mousedown", function() {
        var soundSrc = button.getAttribute("data-sound");
        var sound = createAudioElement(soundSrc);
        sound.play();
    });
});

pauseButton.addEventListener("click", function() {
    sonidos.forEach(function(sound) {
        sound.pause();
    });
});
