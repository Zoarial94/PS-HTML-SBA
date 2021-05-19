/* CORS prevents this stuff

var info = document.getElementById("dynamicInformation")

const url='https://xkcd.com/info.0.json';

fetch(url).then(data => {
    return data.json()
}).then(res => {
    console.log(res);
}).catch(error => console.log(error))

*/



let form = document.getElementById("form")
let output = document.getElementById("formOutput")

// Form validation
form.addEventListener("submit", (event) => {
    // Prevent the form from actually submitting
    event.preventDefault();
    let email = form.elements["email"].value;
    let name = form.elements["name"].value;

    // emailregex.com "Email Address Regular Expression That 99.99% Works."
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Test for an email
    if (!emailRegex.test(email)) {
        console.log("Invalid email!");
        output.textContent = "Invalid email: \"" + email + "\". Try again.";
        output.style.color = "red";
    // Test for a name
    } else if (name === "") {
        output.textContent = "Please enter a name."
        output.style.color = "red";
    // Vaild form. Continue
    } else {
        output.textContent = "Thank you " + name + "! You have been signed up!";
        output.style.color = "green";
    }
    // Prevent the form from actually submitting (I think)
    return false;
})