var button = document.getElementById('submit');

// A class of objects to keep all the data.
class results {
    constructor(fname, lname, gender, consoles) {
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.consoles = consoles;
    }
}

window.onload = function () {
    if (button) {
        button.addEventListener('click', function submit(e) {
            // Variables for fields.
            var fname = document.getElementById('fname');
            var lname = document.getElementById('lname');
            var gender = document.querySelectorAll('input[name="gender"]');
            var consoles = document.getElementById('console');

            var checks = false;
            //Prevent default action (i.e go to next page.)
            e.preventDefault();


            //Values validation.
            if (!validate(fname)) {
                alert("Please insert only letters inside the first name bar");
            }
            if (!validate(lname)) {
                alert("Please insert only letters inside the last name bar");
            }
            if (gender[0].checked === false && gender[1].checked === false) {
                alert("Please select a gender, we don't want people to make rumors about you!");
            }

            //Check if all values were inserted correctly.
            if ((!validate(fname)) || (!validate(lname)) || (gender[0].checked === false && gender[1].checked === false)) {
                checks = false;
            } else {
                checks = true;
            }
            if (checks === true) {
                var value;
                if (gender[0].checked === true) {
                    value = gender[0].value;
                } else if (gender[1].checked === true) {
                    value = gender[1].value;
                }
                //Put all values in localStorage to easily retrieve them in the next page.
                localStorage.setItem("fname", fname.value);
                localStorage.setItem("lname", lname.value);
                localStorage.setItem("gender", value);
                localStorage.setItem("consoles", consoles.value);
            }
            //Go to next page.
            window.location.href = "data.html";
        });
    }
}


//Only call when the right page is loaded.
if (document.title === "Document1") {
    var res = document.querySelector("#result");
    loadAndPopulate();
}


//Validating text with Regex.
function validate(text) {
    var re = /^[A-Za-z]+$/;

    if (re.test(text.value))
        return true;
    else
        return false;
}

//Load values into the next page and retrieve data from localStorage.
function loadAndPopulate() {
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var gender = localStorage.getItem("gender");
    var consoles = localStorage.getItem("consoles");

    document.querySelector("#fname-data").textContent = fname;

    document.querySelector("#lname-data").textContent = lname;
    document.querySelector("#gender-data").textContent = gender;
    document.querySelector("#console-data").textContent = consoles;
    document.querySelector("#result").style.display = 'block';

}