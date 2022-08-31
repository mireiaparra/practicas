let userPoints = 0;
let cpuPoints = 0;
var userPoints_span = document.getElementById("user-points");
var cpuPoints_span = document.getElementById("cpu-points");

var modal = document.querySelector(".modal")

var btn = document.getElementById('rockButton');
var btn2 = document.getElementById('paperButton');
var btn3 = document.getElementById('scissorsButton');

var span = document.getElementsByClassName("close")[0];

var restart = document.getElementById('restartbutton');

btn.onclick = function() {
  modal.style.display = 'block';
}
btn2.onclick = function() {
  modal.style.display = 'block';
}

btn3.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    
  }
}

function play(player) {
    console.log(player)

    var cpu = Math.floor(Math.random() * (4 - 1) + 1);
console.log(cpu);

    if (
        player === 1 && cpu === 2 || 
        player === 2 && cpu === 3 || 
        player === 3 && cpu === 1
        )
        
        {
        modal.innerHTML = "El ordenador eligió " + cpu + ". ¡Has perdido!"
        cpuPoints++
    }

    else if(player===cpu) {
        modal.innerHTML = "El ordenador eligió " + cpu + ". ¡Hay un empate!"
    }

    else 
        {modal.innerHTML = "El ordenador eligió " + cpu + ". ¡Has ganado!"
        userPoints++;
    }
            userPoints_span.innerHTML = userPoints
        cpuPoints_span.innerHTML = cpuPoints
        
    }


    function main() {
        btn.addEventListener('click', function() {
          play(1);
        })
        
        btn2.addEventListener('click', function() {
          play(2);
        })
        
        btn3.addEventListener('click', function() {
          play(3);
        })
      }


      function restartGame(){
        userPoints = 0;
        cpuPoints = 0;
        userPoints_span.innerHTML = userPoints;
        cpuPoints_span.innerHTML = cpuPoints;
      }
      
      restart.addEventListener('click', restartGame);     
   
    main ();