function verificarSenha() {
    var senhaInserida = document.getElementById("resposta").value;
    var senhaCorreta = "Linda"; // Insira a senha correta aqui

    if (senhaInserida === senhaCorreta) {
      window.location.href = "../msg/index.html";
    } else {
      alert("letra incorreta. Tente novamente.");
    }
  }