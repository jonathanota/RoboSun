const matrix = require("@matrix-io/matrix-lite")
var mic = matrix.alsa.mic();

let everloop = new Array(matrix.led.length);
var inputStream = mic.getAudioStream();
console.log(inputStream);

let ledAdjust = 0.0;
if (everloop.length == 35) {
    ledAdjust = 0.51; // MATRIX Creator
} else {
    ledAdjust = 1.01; // MATRIX Voice
}

let frequency = 1.0;
let counter = 0.0;
let tick = everloop.length - 1;

matrix.led.set("blue");

// setInterval(()=>{
//     // Create rainbow
//     for(i = 0; i < everloop.length; i++) {
//         let led = {};
//         led.r = Math.round(Math.max(0, (Math.sin(frequency*counter+(Math.PI/180*240))*155+100)/10));
//         led.g = Math.round(Math.max(0, (Math.sin(frequency*counter+(Math.PI/180*120))*155+100)/10));
//         led.b = Math.round(Math.max(0, (Math.sin(frequency*counter)*155+100)/10));
//
//         counter += ledAdjust;
//
//         everloop[i] = led;
//     };
//
//     // Slowly show rainbow
//     if (tick != 0) {
//         for (i = tick; i > 0; i--) {
//             everloop[i] = {};
//         }
//         tick--;
//     }
//
//     matrix.led.set(everloop);
//
// },35);
