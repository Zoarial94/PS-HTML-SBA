console.log("My Script!")

var reportButton = document.getElementById("report-problems-button")

var redirect = (link) => { 
    window.location.href = link;
}

var redirectToProblemReport = () => {
    redirect("https://youtu.be/dQw4w9WgXcQ");
}

reportButton.addEventListener("click", redirectToProblemReport);