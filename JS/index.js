function pricing_click() {
    var radios = document.getElementsByName("pricing");
    radios.forEach(UpdateCard);
}

function UpdateCard(child) {
    var card = child.parentNode;

    if (child.checked == true) {
        card.classList.add("card-active");
    }
    else {
        card.classList.remove("card-active");
    }
}