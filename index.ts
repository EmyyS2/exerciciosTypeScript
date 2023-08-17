let numero: number = 5
let segundonumero: number = 8
console.log(numero + segundonumero)


let texto: string = "Que bonita a minha roupa"
console.log(texto)


let idade: number = 16
let fala: string = "minha idade é: "
console.log(fala + idade)


let idadeNova: number = 16
let falaNova: string = "minha idade é: " + idadeNova
console.log(falaNova)


let terceironumero: number = 16
let quartonumero: number = 16
let resultado: string = "o resultado desta soma é: "
console.log(resultado + (quartonumero + terceironumero))


let verdadeiro: boolean = true
console.log(verdadeiro)
let falso: boolean = false
console.log(falso)


let arr: number[] = [1, 2, 9, 10, 12, 14, 19, 27]
console.log(arr)
console.log("O tamanho do array é: " + arr.length)
console.log("Acessando a posição do array: " + arr[6])
console.log(arr.indexOf(12))


let ArrayTexto: Array<String>
ArrayTexto = ['lo', 've', 'my', 'bf', 'ee']
console.log(ArrayTexto)
console.log(ArrayTexto.length)
console.log("Acessando a posição do array: " + ArrayTexto.indexOf('bf'))

//*functions//
function exibirTexto() {
    console.log('Exibindo meu Texto')
}
exibirTexto()



function exibirOutroTexto() {
    return "Exibindo outro texto"
}
console.log(exibirOutroTexto())



function retornaNumero(): number {
    return 15
}
console.log(retornaNumero())

function retornaTexto(): string {
    return "retornando string"
}
console.log(retornaTexto())

//*Funções de soma//

function soma(a: number, b: number): number {
    return a + b
}
console.log("valor da soma é: " + soma(11, 11))



//*Exercicios//

function multiplicaçao(a: number, b: number): number {
    return a * b
}
console.log("valor da multiplicação é " + multiplicaçao(11, 11))




function formula(a: number, b: number, c: number): number {
    return (a + b) * c
}
console.log("O valor desta formula é " + formula(10, 10, 2))




function retorne(a:number, b:number): string {
    return "O valor desta multiplicação é " + (a * b)
}
console.log(retorne(2, 2))

