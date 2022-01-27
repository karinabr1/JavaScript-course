/* Funcao 
* ->bloco de codigo
* ->recebe nome
* ->recebe parametros de entrada
* ->executa
* ->retorna
* ->varias possibilidades*/

//Funcao sem retorno
function imprimirSoma(a, b) {
	console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)// Not a Number
imprimirSoma(2, 10, 4, 5, 6, 7, 8)//ele ignora o resto
imprimirSoma()// Not a Number

//Funcao com retorno
function soma(a, b = 1) {
	return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma(0))// Not a Number

