//2. Verificação de Acesso a um Sistema
//Escreva um programa que verifique se um usuário tem acesso a um sistema
//  com base em seu nome de usuário e senha.

function Verificação () {
const usuarioCorreto = "admin";
const senhaCorreta  = "4567";

let usuario = prompt("Qual o nome de usuário?");
let senha = prompt(" Qual é a senha ?");
 if (usuario === usuarioCorreto && senha === senhaCorreta){
    alert("Bem vindo ao sistema") 
 }else {
    alert("Usuário ou senha incorreto")
}
}
Verificação ();
