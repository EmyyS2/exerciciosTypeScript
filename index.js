"use strict";
let numero = 5;
let segundonumero = 8;
console.log(numero + segundonumero);
let texto = "Que bonita a minha roupa";
console.log(texto);
let idade = 16;
let fala = "minha idade é: ";
console.log(fala + idade);
let idadeNova = 16;
let falaNova = "minha idade é: " + idadeNova;
console.log(falaNova);
let terceironumero = 16;
let quartonumero = 16;
let resultado = "o resultado desta soma é: ";
console.log(resultado + (quartonumero + terceironumero));
let verdadeiro = true;
console.log(verdadeiro);
let falso = false;
console.log(falso);
let arr = [1, 2, 9, 10, 12, 14, 19, 27];
console.log(arr);
console.log("O tamanho do array é: " + arr.length);
console.log("Acessando a posição do array: " + arr[6]);
console.log(arr.indexOf(12));
let ArrayTexto;
ArrayTexto = ['lo', 've', 'my', 'bf', 'ee'];
console.log(ArrayTexto);
console.log(ArrayTexto.length);
console.log("Acessando a posição do array: " + ArrayTexto.indexOf('bf'));
//*functions//
function exibirTexto() {
    console.log('Exibindo meu Texto');
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro texto";
}
console.log(exibirOutroTexto());
function retornaNumero() {
    return 15;
}
console.log(retornaNumero());
function retornaTexto() {
    return "retornando string";
}
console.log(retornaTexto());
//*Funções de soma//
function soma(a, b) {
    return a + b;
}
console.log("valor da soma é: " + soma(11, 11));
//*Exercicios//
function multiplicaçao(a, b) {
    return a * b;
}
console.log("valor da multiplicação é " + multiplicaçao(11, 11));
function formula(a, b, c) {
    return (a + b) * c;
}
console.log("O valor desta formula é " + formula(10, 10, 2));
function retorne(a, b) {
    return "O valor desta multiplicação é " + (a * b);
}
console.log(retorne(2, 2));
