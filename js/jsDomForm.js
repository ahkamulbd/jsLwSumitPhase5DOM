function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (x == parseInt(x) || x == parseFloat(x)) {
        alert("Number is not required as a name");
        return false;
    }
}