let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segudo número')

let sum = (Number(numberOne) + Number(numberTwo))
let sub = (Number(numberOne) - Number(numberTwo))
let div = (Number(numberOne) / Number(numberTwo))
let mult = (Number(numberOne) * Number(numberTwo))
let rest = (Number(numberOne) % Number(numberTwo))

alert('Soma: '+ sum)
alert('Subtração: ' + sub)
alert('Divisão: ' + div)
alert('Multiplicação: ' + mult)
alert('Resto: ' + rest)

let par = (Number(numberOne) + Number(numberTwo)) % Number(2)

let result = par == 0 

if(result){
    alert('A soma dos dois números é par: ' + sum)
} else {
    alert('A soma dos dois números é ímpar: ' + sum)
}

let diference = numberOne == numberTwo

if(diference){
    alert('Os dois números são iguais')
} else {
    alert('Os dois números são diferentes')
}