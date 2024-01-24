var timer;
var posX ;
var posY;
var ale;
var a;
var b;


window.onload = function () {

    window.onclick = function () {

        document.getElementById("modal").style.display = "none";

         timer = setInterval(function (){

              ale = parseInt(Math.random()*4 + 1);

              a = window.innerHeight - 40;
             console.log(a)
              b = window.innerWidth - 40;
             console.log(b)

              posX = parseInt(Math.random()*a + 1) ;
             console.log(posX)
              posY = parseInt(Math.random()*b + 1) ;
             console.log(posY
             )
             document.body.innerHTML += '<img src="imagens/star' + ale + '.png" style="position: absolute; left:' + posX + 'px; top:' + posY +'px">';

             },1000)

        //falta adicionar um id a cada uma das imagens//
        /*
        document.getElementById("ex17_1").style.position = "absolute";
        document.getElementById("ex17_1").style.left = posX + "px";
        document.getElementById("ex17_1").style.top = posY + "px";
*/

    }
}