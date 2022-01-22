// == igual
// != diferente
// === igual e do mesmo tipo
// !== diferente, inclusive do tipo

//console.log(5 > 4) // true
//console.log(5 >= 4) // true
//console.log(3 > 4) //false
//console.log(3 <= 4) //true

//Sempre salvar depois de alterar

//console.log(4 == "4") // True
//console.log(4 === "4") // False
//console.log(4 != "5") // True
//console.log(4 !== "5") // True

//Verificar se a pessoa é maior que 18 anos

const pessoa = "Michell"
const idade = 39
const rest = 18

if (idade >= rest) {
    console.log(`A idade do ${pessoa} é ${idade} anos, portanto ele está autorizado 
a entrar, visto que o mesmo é maior de ${rest} anos!`)
} else {
    console.log("Não Autorizado!")
}