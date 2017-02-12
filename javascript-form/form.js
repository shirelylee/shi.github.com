document.form.name.onfocus = function() {
    document.getElementById("namehint").innerHTML = "Last name, than First name";
}
document.form.name.onblur = function() {
    document.getElementById('namehint').innerHTML = "";
}

/*   alternative way equals to modernizer  */
var validationinfo = {
    name: {
        "required": true
    },
    password: {
        "pattern": "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$",
        "placeholder": "UpperCase, LowerCase, Number/SpecialChar and min 8 Chars",
        "required": true
    },
    telephone: {
        "pattern": "\\d{3}[\\-]\\d{3}[\\-]\\d{4}",
        "placeholder": "xxx-xxx-xxxx",
        "required": true
    }


};



/*   snippet start */
var inputField = document.getElementsByTagName('input');
for (key in inputField) {
    var myField = inputField[key];
    var myError = document.getElementById('errortop');
    myField.onchange = function() {
        if (modernizr.input.pattern) { /*   also add here company with alternativeinfo*/
            var myPattern = this.pattern;
            var myPlaceholder = this.placeholder;
        } else {
            var myPattern = validationinfo[this.name].pattern;
            var myPlaceholder = validationinfo[this.name].placeholder;
        }

        var isValid = this.value.search(myPattern) >= 0;
        if (!(isValid)) {
            myError.innerHTML = "Please input the correct format" + this.placeholder;
        } else {

            myError.innerHTML = " ";
        }
    }

}
/*   snippet end  */
document.form.website.onchange = function() {
    var theURL = document.form.website.value;
    if (theURL.indexOf("http://")) {
        document.getElementById('error').innerHTML = "Please input http:// at start.";
        document.form.website.value = "http://" + document.form.website.value;
    }
}

document.form.onsubmit = function() {
    for (key in validationinfo) {
        var myFarming = document.getElementById(key);
        if ((validationinfo[key].required) && (myFarming.value == "")) {
            myError.innerHTML = "Required Field " + key + " not filled";
            myFarming.select(); /*  cursor junmped to the input field*/
            return false;
        }
    }
    return true;
}
