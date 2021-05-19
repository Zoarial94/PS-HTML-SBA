console.log("My Script!")


/* Higher order function nonsense. Learned from a React tutorial.
 * On second glance, it's not quite the same thing, but same idea. 
**/
var redirect = (link) => { 
    window.location.href = link;
}
var redirectToProblemReport = () => {
    redirect("https://youtu.be/dQw4w9WgXcQ");
}

// Make button redirect to link
var reportButton = document.getElementById("report-problems-button")
reportButton.addEventListener("click", redirectToProblemReport);