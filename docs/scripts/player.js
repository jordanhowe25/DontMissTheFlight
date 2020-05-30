var gameView = (function () {

    function gameCarTest() {
        $("#title-screen").append("<img id='image' src='Images/playerCar.png'/>")
            .attr("width", 100);
    }
    function gameCar(src, w, h, alt) {
        alert("hi");
        var img = document.createElement("img");
        img.src = src;
        img.w = w;
        img.h = h;
        img.alt = alt;

        document.appendChild('img');
    }
    return {
        gameCar: gameCar,
        gameCarTest: gameCarTest
    }

})();

