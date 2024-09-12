let elBurger = document.getElementById("burger");
let elMenu = document.getElementById("menu");
let elMenuItems = document.querySelectorAll(".dropdown");

elBurger.addEventListener("click", () => {
    elMenu.classList.toggle("invisible");
})

console.log(elMenuItems)

for (let element of elMenuItems) {
    element.addEventListener("click", (e) => {
        e.target.classList.toggle("opened");
        for (let element of e.target.children) {
            element.classList.toggle("invisible");
            console.log(element.classList);
            console.log(e.target.classList);
        }
    })
}

