// Calculo de Aposentadoria
// Homem: contrib = 35 ... idade = 61 ... total 96
// Mulher: contrib = 30 ... idade = 56 ... total 86

const nome = "Arnoso"
const idade = 63
const tempo = 30
const sexo = "M"

const apo = idade + tempo

if (sexo == "M" && apo >= 96) {
    console.log(`${nome} você tem um tempo total de ${apo} anos, logo, você já pode se aposentar`)
} else
if (sexo == "F" && apo >= 86) {
    console.log(`${nome} você tem um tempo total de ${apo} anos, logo, você já pode se aposentar`)
} else {
    console.log(`${nome} você tem um tempo total de ${apo} anos, logo, você ainda não pode se aposentar`)
}