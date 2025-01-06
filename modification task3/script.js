const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const trafficLight = document.querySelector('#semaphore');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl3.style.background = ('black');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

trafficLight.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}


function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl2.style.background = ('black');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}
