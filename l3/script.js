function verificarSenha() {
    var senhaInserida = document.getElementById("resposta").value;

    if (senhaInserida === "s" || senhaInserida === "S") {
      window.location.href = "../l4/index.html";
    } else {
      alert("letra incorreta. Tente novamente.");
    }
  }