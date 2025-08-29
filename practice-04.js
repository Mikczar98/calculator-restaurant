function calculateTip(tips, price) {
    return (price / 100) * tips;
}

function calculatePrice(price, totalTips) {
    return price + totalTips;
}

function amountPerPerson(people, totalPrice) {
    return totalPrice / people;
}

let button = document.getElementById("btn")
button.addEventListener("click", function () {
    let price = parseInt(document.getElementById("billInput").value);
    let tips = parseInt(document.getElementById("tipsInput").value);
    let people = parseInt(document.getElementById("countPeople").value);

    if (isNaN(price) || isNaN(tips) || isNaN(people) || price <= 0 || tips < 1 || people < 1) {
        alert("Введите корректные данные");
        return;
    }

    let totalTips = calculateTip(tips, price);
    let totalPrice = calculatePrice(price, totalTips);
    let perPerson = amountPerPerson(people, totalPrice);

    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    document.getElementById("totalTips").innerText = totalTips.toFixed(2);
    document.getElementById("perPerson").innerText = perPerson.toFixed(2);
})