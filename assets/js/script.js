const pageviews = [
    "10K",
    "50K",
    "100K",
    "500K",
    "1M"
];

const value = [
    "$8.00",
    "$12.00",
    "$16.00",
    "$24.00",
    "$36.00"
];


const  slider = document.getElementById('slider');

const pageviewsNumber = document.getElementById('pageviews-number');

const valueMonth = document.getElementById('value-month');

const selector = document.getElementById('selector');

const selectorBackground = document.getElementsByClassName('billing-select')[0];



document.addEventListener('DOMContentLoaded', function () {
    pageviewsNumber.innerHTML = pageviews[slider.value];
    valueMonth.innerHTML = value[slider.value];

    selector.addEventListener('change', activateSelector);
    slider.oninput = sliderMove;
})


//Functions

function sliderMove() {
    pageviewsNumber.innerHTML = pageviews[this.value];
    valueMonth.innerHTML = value[this.value];

    let x = slider.value * 25;

    let color = `linear-gradient(90DEG, rgb(162,243,235) ${x}%, rgb(233, 241, 250) ${x}%)`;

    slider.style.background = color;
}



function activateSelector() {
    if(selector.checked) {
        selectorBackground.style.background = 'rgb(122,234,219)';
    }
    else {
        selectorBackground.style.background = '#ccc';
    }
}
