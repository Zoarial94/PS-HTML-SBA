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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = form.elements["email"].value;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailRegex.test(email)) {
        console.log("Invalid email!");
        output.textContent = "Invalid email: \"" + email + "\". Try again.";
        return false;
    } else {
        console.log("Valid email!");
        output.textContent = "Submitted!";
    }
    return false;
})