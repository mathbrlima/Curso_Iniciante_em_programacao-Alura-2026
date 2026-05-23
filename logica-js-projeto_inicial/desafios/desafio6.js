//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 1548.75;
let mensagem = `Olá! O saldo da sua conta é de R$ ${saldo.toFixed(2)}.`;

console.log(mensagem);
