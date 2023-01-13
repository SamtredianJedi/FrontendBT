function handleSubmit() {
    let hexNumbers = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "F",
    ];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexColorCode += hexNumbers[randomIndex];
    }
    document.getElementById("colorCode").innerHTML = hexColorCode;
    document.getElementsByTagName("body")[0].style.background =
        "#" + hexColorCode;
}