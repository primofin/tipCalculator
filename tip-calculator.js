'use strict';

// Calculate tip
const cal_btn = document.getElementById('calculate');

const calculate = () => {
    const billamt = document.getElementById('billamt').value;
    const serviceQual = document.getElementById('serviceQual').value;
    let peopleamt = document.getElementById('peopleamt').value;
    const tip = document.getElementById('tip');

    //validate input
    if (billamt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (peopleamt === "" || peopleamt < 1) {
        alert("Please enter valid values");
    }else if(peopleamt = 1){
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    //next line allows us to always have two digits after decimal point
    const total = (parseFloat(billamt) * parseFloat(serviceQual) / parseFloat(peopleamt)).toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    tip.innerHTML = total;


};

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

cal_btn.addEventListener('click', calculate);


