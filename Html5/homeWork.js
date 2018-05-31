function add_number() {
               
    let first_number = parseInt(document.getElementById("Text1").value);
    let second_number = parseInt(document.getElementById("Text2").value);
    let result = first_number + second_number;

    document.getElementById("txtresult").value = result;
}

//https://www.w3schools.com/jsref/dom_obj_pushbutton.asp
//.value	Sets or returns the value of the value attribute of a button
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_button_value

function calculatorFunction() {
    document.getElementById("CalculatorForm").reset();
}

