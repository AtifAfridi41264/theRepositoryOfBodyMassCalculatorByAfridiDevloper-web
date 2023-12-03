function bmi(){
    var h = document.getElementById("height").value;
    var w = document.getElementById("wieght").value;
    var bmi = w / (h/100 * h/100);
    var total = bmi.toFixed(2);
    document.getElementById("result").innerHTML = "your bmi is" + total;

    
        if (bmi <= 18.4) {
        document.getElementById("info").innerHTML = "You are UnderWeight";
        } else if (bmi >= 18.5) {
            document.getElementById("info").innerHTML = "You are Normal";
        } else if (bmi >= 25.0) {
            document.getElementById("info").innerHTML = "You are OverWeight";
        } else
        document.getElementById("info").innerHTML = "Obese";
     }

 