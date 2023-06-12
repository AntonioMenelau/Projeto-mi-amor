function verificarSenha() {
    var senhaInserida = document.getElementById("resposta").value;

    if (senhaInserida === "m" || senhaInserida === "M") {
      window.location.href = "../Lvl3/index.html";
    } else {
      alert("letra incorreta. Tente novamente.");
    }
  }