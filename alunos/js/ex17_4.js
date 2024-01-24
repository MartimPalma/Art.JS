var verti;
var hori;
var timer_vertical;
var timer_horizontal;
var contador;
var num_random;
var height;
var width;

window.onload = function (){
    document.getElementById("criar").onclick = function (){
        vazios();
    }
}

function vazios(){
    contador = 0;
    verti = document.getElementById("vertical").value;
    console.log(verti);
    hori = document.getElementById("horizontal").value;
    console.log(hori);
    if (verti === "" || hori === ""){
        document.getElementById("vazio").innerHTML += '<p>O preenchimento dos' +
            'campos acima é obrigatório.</p>';
        document.getElementById("vazio").style.display = "block";
    } else {
        document.getElementById("modal").style.display = "none";
        document.getElementById("vazio").style.display = "none";
        console.log(contador);

        if (contador >= 0 && contador <= verti){
            timer_vertical = setInterval(function (){
                height = window.innerHeight;
                num_random = parseInt(Math.random()*height + 1);
                document.getElementById("ex17_2").innerHTML += '<div class="linhaVertical" style="position: absolute; left:' + num_random + 'px " >' + verti + '</div>';
                contador ++;
                console.log("Vertical" + contador);
                if (contador > verti){
                    clearInterval(timer_vertical);
                }
            }, 1000);
        }

        if (contador >= 0 && contador <= hori){
            timer_horizontal = setInterval(function (){
                width = window.innerWidth;
                num_random = parseInt(Math.random()*width + 1);
                document.getElementById("ex17_2").innerHTML += '<div class="linhaHorizontal" style="position: absolute; top:' + num_random + 'px " >' + hori + '</div>';
                contador ++;
                console.log("Horizontal" + contador);
                if (contador > hori){
                    clearInterval(timer_horizontal);
                }
            }, 1000);
        }
    }
}