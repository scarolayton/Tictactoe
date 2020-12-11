let bandera = false; //indica si ya inicio
let turno = 0; //Determina el turno
let tab = new Array(); //Arreglo de botones
tab[0] = document.getElementById("b0");
tab[1] = document.getElementById("b1");
tab[2] = document.getElementById("b2");
tab[3] = document.getElementById("b3");
tab[4] = document.getElementById("b4");
tab[5] = document.getElementById("b5");
tab[6] = document.getElementById("b6");
tab[7] = document.getElementById("b7");
tab[8] = document.getElementById("b8");
const login = document.getElementById("login");
const init = () => {
  let iniciar = document.getElementById("iniciar");
  iniciar.addEventListener("click", () => {
    bandera = true;

    let jugador1 = document.getElementById("jugador1").value;
    let jugador2 = document.getElementById("jugador2").value;
    if (jugador1 == "" || jugador2 == "") {
      swal("Triqui", "Debes ingresar todos los jugadores", "error");
    } else {
      for (let i = 0; i < tab.length; i++) {
        tab[i].className = "botonInitial";
        tab[i].value = "";
      }
      turno = 1;

      login.querySelector(".turno").innerHTML = `Adeltante jugador ${jugador1}`;
    }
  });
  const buttons = document.querySelectorAll(".button");
  console.log(buttons[0]);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let jugador1 = document.getElementById("jugador1").value;
      let jugador2 = document.getElementById("jugador2").value;
      const jugar = () => {
        if (bandera == true) {
          if (
            turno == 1 &&
            button.value == "" &&
            button.className == "botonInitial"
          ) {
            button.className = "botonJugador1";
            button.value = "X";
            turno = 2;
            login.querySelector(
              ".turno"
            ).innerHTML = `Adeltante jugador ${jugador2}`;
          } else if (
            turno == 2 &&
            button.value == "" &&
            button.className == "botonInitial"
          ) {
            button.value = "O";
            button.className = "botonJugador2";
            login.querySelector(
              ".turno"
            ).innerHTML = `Adeltante jugador ${jugador1}`;
            turno = 1;
          }
        } else {
          swal("Triqui", "Debes iniciar el juego", "error");
        }
        validar();
      };
      const validar = () => {
        if (
          (buttons[0].className === "botonJugador1" &&
            buttons[1].className === "botonJugador1" &&
            buttons[2].className === "botonJugador1") ||
          (buttons[3].className === "botonJugador1" &&
            buttons[4].className === "botonJugador1" &&
            buttons[5].className === "botonJugador1") ||
          (buttons[6].className === "botonJugador1" &&
            buttons[7].className === "botonJugador1" &&
            buttons[8].className === "botonJugador1") ||
          (buttons[0].className === "botonJugador1" &&
            buttons[3].className === "botonJugador1" &&
            buttons[6].className === "botonJugador1") ||
          (buttons[1].className === "botonJugador1" &&
            buttons[4].className === "botonJugador1" &&
            buttons[7].className === "botonJugador1") ||
          (buttons[2].className === "botonJugador1" &&
            buttons[5].className === "botonJugador1" &&
            buttons[8].className === "botonJugador1") ||
          (buttons[0].className === "botonJugador1" &&
            buttons[4].className === "botonJugador1" &&
            buttons[8].className === "botonJugador1") ||
          (buttons[2].className === "botonJugador1" &&
            buttons[4].className === "botonJugador1" &&
            buttons[6].className === "botonJugador1")
        ) {
          swal("Triqui", "Gano el jugador 1", "success");
          reiniciar();
        } else if (
          (buttons[0].className === "botonJugador2" &&
            buttons[1].className === "botonJugador2" &&
            buttons[2].className === "botonJugador2") ||
          (buttons[3].className === "botonJugador2" &&
            buttons[4].className === "botonJugador2" &&
            buttons[5].className === "botonJugador2") ||
          (buttons[6].className === "botonJugador2" &&
            buttons[7].className === "botonJugador2" &&
            buttons[8].className === "botonJugador2") ||
          (buttons[0].className === "botonJugador2" &&
            buttons[3].className === "botonJugador2" &&
            buttons[6].className === "botonJugador2") ||
          (buttons[1].className === "botonJugador2" &&
            buttons[4].className === "botonJugador2" &&
            buttons[7].className === "botonJugador2") ||
          (buttons[2].className === "botonJugador2" &&
            buttons[5].className === "botonJugador2" &&
            buttons[8].className === "botonJugador2") ||
          (buttons[0].className === "botonJugador2" &&
            buttons[4].className === "botonJugador2" &&
            buttons[8].className === "botonJugador2") ||
          (buttons[2].className === "botonJugador2" &&
            buttons[4].className === "botonJugador2" &&
            buttons[6].className === "botonJugador2")
        ) {
          swal("Triqui", "Gano el jugador 2", "success");
          reiniciar();
        } else if (
          buttons[0].className !== "botonInitial" &&
          buttons[0].className !== "button" &&
          buttons[1].className !== "botonInitial" &&
          buttons[1].className !== "button" &&
          buttons[2].className !== "botonInitial" &&
          buttons[2].className !== "button" &&
          buttons[3].className !== "botonInitial" &&
          buttons[3].className !== "button" &&
          buttons[4].className !== "botonInitial" &&
          buttons[5].className !== "button" &&
          buttons[5].className !== "botonInitial" &&
          buttons[5].className !== "button" &&
          buttons[6].className !== "botonInitial" &&
          buttons[6].className !== "button" &&
          buttons[7].className !== "botonInitial" &&
          buttons[7].className !== "button" &&
          buttons[8].className !== "botonInitial" &&
          buttons[8].className !== "button"
        ) {
          swal("Triqui", "Ha habido un empate", "info");
          reiniciar();
        }
      };
      jugar();
    });
    const reiniciar = () => {
      jugador1 = "";
      jugador2 = "";
      document.getElementById("jugador1").value = "";
      document.getElementById("jugador2").value = "";
      bandera = false;
      for (let i = 0; i < tab.length; i++) {
        tab[i].className = "button";
        tab[i].value = "";
      }
      login.querySelector(".turno").innerHTML = ``;
    };
  });
};
init();
