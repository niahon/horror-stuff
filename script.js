let elBurger = document.getElementById("burger");
let elMenu = document.getElementById("menu");
let elMenuItems = document.querySelectorAll(".dropdown");

elBurger.addEventListener("click", () => {
    elMenu.classList.toggle("invisible");
})


for (let element of elMenuItems) {
    element.addEventListener("click", (e) => {
        e.target.classList.toggle("opened");
        for (let element of e.target.children) {
            if (element.classList.contains("sub-items")) {
                element.classList.toggle("invisible");
            } else {
                element.classList.toggle("expanded-arrow");
            }
        }
    })
}

