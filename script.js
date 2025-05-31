console.log("Started");

//formula based values
let value = Number(document.getElementById('value').value);
let seconds = Number(document.getElementById('seconds').value);
let gForce = Number(document.getElementById('gForce').value);
let gForceRate = Number(document.getElementById('gForceRate').value);
let exhaustion = Number(document.getElementById('exhaustion').value);

function valueOnInput(value) {
	this.value = value;
	calculate();
}

function secondsOnInput(value) {
	seconds = value;
	calculate();
}

function gForceOnInput(value) {
	gForce = value;
	calculate();
}

function gForceRateOnInput(value) {
	gForceRate = value;
	calculate();
}

function exhaustionOnInput(value) {
	exhaustion = value;
	calculate();
}


//custom values
let customValue = Number(document.getElementById('customValue').value);
let customGForce = Number(document.getElementById('customGForce').value);
let customExhaustion = Number(document.getElementById('customExhaustion').value);  

function customValueOnInput(value) {
	customValue = value;
	calculate();
}

function customGForceOnInput(value) {
	customGForce = value;
	calculate();
}

function customExhaustionOnInput(value) {
	customExhaustion = value;
	calculate();
}



function calculate() {

    //format (round) and calculate
    let formula = customValue/(value/seconds*1/exhaustion)*((customGForce+gForceRate)/(gForce+gForceRate))/customExhaustion;
    const result = Number(formula.toFixed(10)); 

    // and display
    document.getElementById('result').textContent = `${result} seconds to reach ${customValue} under ${customGForce} Gs and ${customExhaustion} exhaustion`;
}


calculate();