/*----- app's state (variables) -----*/
let sum;

/*----- cached element references -----*/
let display = document.querySelector('span');
let num = document.getElementById('num');

/*----- event listeners -----*/
document.getElementById('plus')
    .addEventListener('click', handleClick);
document.getElementById('minus')
    .addEventListener('click', handleClick);

/*----- functions -----*/
init();

function init() {
    sum = 1;
    let display = 1;
    render();
};

function render() {
    display.value = '';
    display.innerHTML = sum
    if(sum < 0) display.style.color = 'red';
};

function handleClick(evt) {
    let button = evt.target
    let value = parseInt(num.value);
    if(!num.value.length) return;
    button.id === 'plus' ? sum += value : sum -= value;
    render()
};