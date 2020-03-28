//this function is able to capture the first values
function captureFirstValue(num1) {
    console.log(num1);
    document.getElementById("output").value += num1;
}

//Function to evaluate the calculation
function solve() {

    console.log("called");

    let x = document.getElementById("output").value;

    if (count == 0) {
        document.getElementById("message").innerHTML = "Please Enter Two values";
    }
    else if (count == 1) {
        
        document.getElementById("message").innerHTML = "Only one value is not allowed";
    }
    else if (undefined == eval(x)) {
        console.log(calledfunction.count);
        document.getElementById("message").innerHTML = "Only digits are allowed";
    }
    else {
        let y = eval(x);
        document.getElementById("output").value = y;
        document.getElementById("message").innerHTML = "";
    }
}

//function to clear the result
function clearMe() {
    document.getElementById("output").value = "";
    document.getElementById("message").innerHTML = "";
    count = 0;
}
var count = 0;

//Checked FUnction
function calledfunction(num1) {
    captureFirstValue(num1);
    countFunction();
}

function countFunction() {
    count++;
}