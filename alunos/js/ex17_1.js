window.onload = function () {
    window.onclick = function (event) {
        document.getElementById("modal").style.display = "none";
        console.log(event);

        //guardar o valor de X e Y do rato//
        var posX = event.clientX - 40 ;
        var posY = event.clientY - 40 ;

        var ale = parseInt(Math.random()*4 + 1)
        console.log(ale);

        document.body.innerHTML += '<img src="imagens/star' + ale + '.png" style="position: absolute; left:' + posX + 'px; top:' + posY +'px">';

        //falta adicionar um id a cada uma das imagens//
        /*
        document.getElementById("ex17_1").style.position = "absolute";
        document.getElementById("ex17_1").style.left = posX + "px";
        document.getElementById("ex17_1").style.top = posY + "px";
*/

    }
}
