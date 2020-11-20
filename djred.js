
    var sqaure = document.getElementById("square");
    var orginalColor = window.getComputedStyle(sqaure).backgroundColor;
    console.log("the");

    function hoverColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function defaultColor(color) {
        sqaure.style.backgroundColor = orginalColor;
    }
    console.log("mouse")

    function leftClickColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function rightColor(color) {
        sqaure.style.backgroundColor = color;
    }
    console.log("is")

    function doubleColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function upClickColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function defaultColor(color) {
        sqaure.style.backgroundColor = orginalColor;
    }
    console.log("HAPPY")