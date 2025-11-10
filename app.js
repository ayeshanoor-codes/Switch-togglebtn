let toggleBtn = document.getElementById("toggleBtn"); // target html btn
let isDarkMode = false;
let heading = document.querySelector("h1");

toggleBtn.addEventListener("click", () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        toggleBtn.textContent = "Switch to Dark Mode";
        heading.style.textShadow ="3px 2px 3px black"
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggleBtn.textContent = "Switch to Light Mode";
        heading.style.textShadow = "3px 2px 3px white"
    }
    isDarkMode = !isDarkMode;
});