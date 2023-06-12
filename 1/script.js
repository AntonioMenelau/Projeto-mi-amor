function verificarSenha() {
    var senhaInserida = document.getElementById("resposta").value;

    if (senhaInserida === "w" || senhaInserida === "W") {
      window.location.href = "../2/index.html";
    } else {
      alert("letra incorreta. Tente novamente.");
    }
  }