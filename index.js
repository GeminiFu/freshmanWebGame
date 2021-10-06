const main = document.getElementsByClassName("main-body")[0];

console.dir(main)

window.addEventListener("orientationchange", function () {
    console.log("the orientation of the device is now " + screen.orientation.angle);
    if (window.outerWidth > window.outerHeight) {
        console.log("HEEH");
        main.classList.remove("main-landscape");
    } else {
        console.log("LALA")
        main.classList.add("main-landscape");
    }
});