const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

button.addEventListener("click", function(event) {
    popup.classList.add("d-block");
});

popup.addEventListener("click", function(event) {
    const classOfClickElement = event.target.classList[0];
    const ClassNameListArray = ["popup-close", "popup-link", "popup-wrapper"]

    console.log(ClassNameListArray.includes(classOfClickElement));

    if(ClassNameListArray.includes(classOfClickElement)) {
        popup.classList.remove("d-block")
    };
});