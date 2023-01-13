/* Program To show random colors everytime the user clicks */

const htmlBody = document.querySelector('body');

htmlBody

const randomClickFunction = function() {
    const colors = ["#7ee23b", "#8444ff",
        "#ffa616", "#c1141a", "#ff8007", "#9fa365",
        "#10aded", "#1555bd", "#cbbeb5"
    ];


    const randomIndex = Math.floor(Math.random() * colors.length);

    const randomColor = colors[randomIndex];

    htmlBody.style.backgroundColor = randomColor;

    console.log("The user clicked and set the color" + randomColor);

    function randomClickFunction();

    htmlBody.onclick = randomClickFunction;

}

// function randomClickFunction();

// htmlBody.onclick = randomClickFunction;