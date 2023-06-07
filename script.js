function verificarSenha() {
    var senhaInserida = document.getElementById("senha").value;
    var senhaCorreta = "senha123"; // Insira a senha correta aqui

    if (senhaInserida === senhaCorreta) {
      window.location.href = "msg\\msg.html";
    } else {
      alert("Senha incorreta. Tente novamente.");
    }
  }