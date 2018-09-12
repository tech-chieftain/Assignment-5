// FORM firstname [IF LETters],Lastname[same as first], number[number],...

var button = document.getElementById('submit');
button.addEventListener('click', function submit(e) {
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var gender = document.querySelectorAll('input[name="gender"]');
    var consoles = document.getElementById('console');

    var checks = false;

    e.preventDefault();



    if (!validate(fname)) {
        alert("Please insert only letters inside the first name bar");
    }

    if (!validate(lname)) {
        alert("Please insert only letters inside the last name bar");
    }
    if (gender[0].checked === false && gender[1].checked === false) {
        alert("Please select a gender, we don't want people to make rumors about you!");
    }

    if ((!validate(fname)) || (!validate(lname)) || (gender[0].checked === false && gender[1].checked === false)) 
    {
        checks = false;
    } else {
        checks = true;
    }

    if (checks === true) {
        document.querySelector("#fname-data").textContent = fname.value;
        document.querySelector("#lname-data").textContent = lname.value;

        if (gender[0].checked === true) {
            document.querySelector("#gender-data").textContent = gender[0].value;
        } else if (gender[1].checked === true) {
            document.querySelector("#gender-data").textContent = gender[1].value;

        }
        document.querySelector("#console-data").textContent = consoles.value;
        document.querySelector("#result").style.display = 'block';

    }


});




function validate(text) {
    var re = /^[A-Za-z]+$/;

    if (re.test(text.value))
        return true;
    else
        return false;
}