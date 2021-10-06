const main = document.querySelector(".main-body"),
    card = document.querySelectorAll(".card");


if (screen.orientation.angle === 90) {
    main.classList.add("main-landscape");
    changeCardSize(25);
}

window.addEventListener("orientationchange", function () {
    let i = 0;

    if (screen.orientation.angle === 0) {
        main.classList.remove("main-landscape");
        changeCardSize(75);
    } else {
        main.classList.add("main-landscape");
        changeCardSize(25);
    }
});

function changeCardSize(width) {
    let i = 0;
    while (i < 2) {
        card[i].style.width = `${width}vw`;
        card[i].style.height = `${100 - width}vh`;
        i++;
    }
}