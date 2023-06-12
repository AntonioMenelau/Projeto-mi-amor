function verificarSenha() {
    var senhaInserida = document.getElementById("senha").value;
    var senhaCorreta = "Novembro"; // Insira a senha correta aqui

    if (senhaInserida === senhaCorreta) {
      window.location.href = "IJ\\index.html";
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  }