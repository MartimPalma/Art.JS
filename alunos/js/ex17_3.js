var on = false;
var timer , ale;
var posX ;
var posY;


window.onload = function () {

    window.onclick = function () {
        if(on === false) {
            on = true;
            timer = setInterval /*Repete-se continuamente ou mais do que uma vez*/ (function () {

                ale = parseInt(Math.random() * 4 + 1);

                document.body.innerHTML += '<img src="imagens/star' + ale + '.png" style="position: absolute; left:' + posX + 'px; top:' + posY + 'px">';

            }, 1000)
        }
        else {
            on = false;
            clearInterval(timer);// parar o loop se não ele torna-se infinito//
        }

        document.getElementById("modal").style.display = "none";
    }

    //guardar posição X e Y do rato
    window.onmousemove = function (event) {
         posX = event.clientX - 40;
         posY = event.clientY - 40;
         console.log(posX);
         console.log(posY);
    }
}