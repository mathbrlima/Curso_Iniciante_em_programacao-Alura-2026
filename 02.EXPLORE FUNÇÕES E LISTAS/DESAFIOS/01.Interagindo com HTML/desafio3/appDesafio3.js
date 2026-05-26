// 6.Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function comeceSoma() {
    let num1 = Number(prompt("Informe o 1° número inteiro: "));
    let num2 = Number(prompt("Informe o 2° número inteiro: "));
    soma = num1 + num2;
    alert(`${num1} + ${num2} = ${soma}`);
}
