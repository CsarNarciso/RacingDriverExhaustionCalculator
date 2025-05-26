console.log("Started");

document.getElementById('calculateBtn').onclick = function(){

    //formula based values
    let value = Number(document.getElementById('value').value);
    let seconds = Number(document.getElementById('seconds').value);
    let gForce = Number(document.getElementById('gForce').value);
    let gForceRate = Number(document.getElementById('gForceRate').value);
    let exhaustion = Number(document.getElementById('exhaustion').value);
    
    //custom values
    let customValue = Number(document.getElementById('customValue').value);
    let customGForce = Number(document.getElementById('customGForce').value);
    let customExhaustion = Number(document.getElementById('customExhaustion').value);  

    //format (round) and calculate
    let formula = customValue/(value/seconds*1*exhaustion)*((customGForce+gForceRate)/(gForce+gForceRate))*customExhaustion;
    const result = Number(formula.toFixed(10)); 

    // and display
    document.getElementById('result').textContent = `${result} seconds to reach ${customValue} under -> ${customGForce} Gs and ${customExhaustion} exhaustion`;
}


