
function validateForm() {
    let vorname = document.forms["checkForm"]["vorname"].value;
    let nachname= document.forms["checkForm"]["nachname"].value;
    if (vorname == "") {
        alert("Vorname  muss eingegeben werden bitte.");
        return false;
    }

    if(nachname == ""){
        alert(" Nachname muss eingegeben werden bitte.");
        return false;
    }
}

class person{
    constructor(){
        
    }

}










/** 

function validateForm() {
    let vorname = document.getElementById("checkForm").elements[0].value;
    document.getElementById("demo").innerHTML = vorname;

    let nachname = document.getElementById("checkForm").elements[0].value;
    document.getElementById("demo").innerHTML = nachname;

    if (vorname == "") {
        alert("Vorname  muss eingegeben werden bitte.");
        return false;
    }

    if(nachname == ""){
        alert(" Nachname muss eingegeben werden bitte.");
        return false;
}
}*/

