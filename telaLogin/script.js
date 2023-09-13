function login(enviar) {
  let emailUsuario = document.getElementById("email").value;
  let senhaUsuario = document.getElementById("senha").value;

  const emailCorreto = "tayslan.iranildo@academico.ifpb.edu.br";
  const senhaCorreta = "123";

  if (emailUsuario == emailCorreto && senhaUsuario == senhaCorreta) {
    alert("Logado  com sucesso...");
  } else {
    alert("E-mail ou senha incorretos.");
  }
}
console.log(enviar);
