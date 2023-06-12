function verificarSenha() {
    var senhaInserida = document.getElementById("resposta").value;

    if (senhaInserida === "s" || senhaInserida === "S") {
      window.location.href = "../lvl4/index.html";
    } else {
      alert("letra incorreta. Tente novamente.");
    }
  }