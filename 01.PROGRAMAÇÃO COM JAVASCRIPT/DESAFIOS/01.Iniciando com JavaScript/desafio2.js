// 8. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
// 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// 10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

let nome = prompt("Informe seu nome");
let idade = Number(prompt("Informe sua idade"));

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}