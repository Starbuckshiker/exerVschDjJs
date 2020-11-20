
    var sqaure = document.getElementById("square");
    var orginalColor = window.getComputedStyle(sqaure).backgroundColor;
    console.log("this");

    function hoverColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function leftClickColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function defaultColor(color) {
        sqaure.style.backgroundColor = originalColor;
    }
    function scrollColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function upClickColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function doubleColor(color) {
        sqaure.style.backgroundColor = color;
    }
    function defaultColor(color) {
        sqaure.style.backgroundColor = orginalColor;
    }