console.log("Started");

function valueOnInput(value) {
	document.getElementById('valueSlider').value = value;
	calculate();
}
function valueOnInputSlider(value) {
	document.getElementById('value').value = value;
	calculate();
}

function secondsOnInput(value) {
	document.getElementById('secondsSlider').value = value;
	calculate();
}
function secondsOnInputSlider(value) {
	document.getElementById('seconds').value = value;
	calculate();
}

function gForceOnInput(value) {
	document.getElementById('gForceSlider').value = value;
	calculate();
}
function gForceOnInputSlider(value) {
	document.getElementById('gForce').value = value;
	calculate();
}

function gForceRateOnInput(value) {
	document.getElementById('gForceRateSlider').value = value;
	calculate();
}
function gForceRateOnInputSlider(value) {
	document.getElementById('gForceRate').value = value;
	calculate();
}

function exhaustionOnInput(value) {
	document.getElementById('exhaustionSlider').value = value;
	calculate();
}
function exhaustionOnInputSlider(value) {
	document.getElementById('exhaustion').value = value;
	calculate();
}

function exhaustionRateOnInput(value) {
	document.getElementById('exhaustionRateSlider').value = value;
	calculate();
}
function exhaustionRateOnInputSlider(value) {
	document.getElementById('exhaustionRate').value = value;
	calculate();
}



function customValueOnInput(value) {
	document.getElementById('customValueSlider').value = value;
	calculate();
}
function customValueOnInputSlider(value) {
	document.getElementById('customValue').value = value;
	calculate();
}

function customGForceOnInput(value) {
	document.getElementById('customGForceSlider').value = value;
	calculate();
}
function customGForceOnInputSlider(value) {
	document.getElementById('customGForce').value = value;
	calculate();
}

function customExhaustionOnInput(value) {
	document.getElementById('customExhaustionSlider').value = value;
	calculate();
}
function customExhaustionOnInputSlider(value) {
	document.getElementById('customExhaustion').value = value;
	calculate();
}


function calculate() {  	
		
	//formula based values
	var value = Number(document.getElementById('value').value);
	var seconds = Number(document.getElementById('seconds').value);
	var gForce = Number(document.getElementById('gForce').value);
	var gForceRate = Number(document.getElementById('gForceRate').value);
	var exhaustion = Number(document.getElementById('exhaustion').value);
	var exhaustionRate = Number(document.getElementById('exhaustionRate').value);

	//custom values
	var customValue = Number(document.getElementById('customValue').value);
	var customGForce = Number(document.getElementById('customGForce').value);
	var customExhaustion = Number(document.getElementById('customExhaustion').value);  

	//format (round) and calculate
	let baseRateFormula = (value/seconds);
    let formula = customValue / baseRateFormula * (1/Math.exp(-gForceRate*(gForce-customGForce))) / (1/Math.exp(-exhaustionRate*(exhaustion-customExhaustion)));;
    const result = Number(formula.toFixed(10)); 
	
    // and display
    document.getElementById('result').textContent = `${result} seconds to reach ${customValue} under ${customGForce} Gs and ${customExhaustion} exhaustion: ${baseRateFormula}`;
}


calculate();