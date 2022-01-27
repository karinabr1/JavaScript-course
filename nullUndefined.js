let valor // nao inicializada
console.log(valor) // = Undefined
console.log(valor2) // is not defined

valor = null // ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = Undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)


produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)