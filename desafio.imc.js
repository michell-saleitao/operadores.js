// Cálculo de IMC

const nome1 = "Michell"
const altura = 1.68
const peso = 81
const calcimc = peso / (altura * altura)


if (calcimc >= 30) {
    console.log(`${nome1} seu IMC é ${calcimc}, logo, você está acima do Peso`)
} else
if (calcimc > 25 && calcimc < 29.9) {
    console.log(`${nome1} seu IMC é ${calcimc}, logo, você está com sobrepeso`)
} else
if (calcimc < 25) {
    console.log(`${nome1} seu IMC é ${calcimc}, logo, você está com peso normal`)
}