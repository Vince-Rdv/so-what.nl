const mobileButton = document.getElementById("mobileButton");
const mobileMenu = document.getElementById("mobileMenu");
const navBar = document.getElementById("navContainer");

console.log("TEST")

var open = false;

mobileButton.addEventListener("click", () => {
    if (open) {
        mobileMenu.style.left = "100vw";
        navBar.classList.remove("navContainerOpen");
    } else {
        mobileMenu.style.left = "0vw";
        navBar.classList.add("navContainerOpen");
    }
    open = !open;

    console.log("TEST")
});
