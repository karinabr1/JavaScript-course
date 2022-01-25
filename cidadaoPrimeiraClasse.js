// Funcao em JS e first-class object (citizens)
//high-order function

//criar de forma literal
function fun1 = function() { }

// armazernar em uma variavel
const fun2 = function() { }

// armazenar em um array
const array = [function (a,b) { return a + b }, fun1,fun2]
console.log(array[0] (2,3))

// armazenar em um atributo de objeto
constobj = {}
obj.falar = function () { return "opa"}
console.log(obj.falar())

//passar funcao como param
function run(fun) {
	fun()
}

run(function () { console.log('executando...') })

// uma funcao pode retornar/conter uma funcao
function soma(a,b) {
	return function (c) {
		console.log(a + b + c)
	}
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)