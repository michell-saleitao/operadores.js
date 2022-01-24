// Testando Arrays
// Calculando Média das notas

const alunos = [{
    nome: "Michell",
    idade: 39,
    nota1: 8.5,
    nota2: 5.5
}, {
    nome: "Nielson",
    idade: 38,
    nota1: 9.5,
    nota2: 2.5
}, ]

const media0 = (alunos[0].nota1 + alunos[0].nota2) / 2
const media1 = (alunos[1].nota1 + alunos[1].nota2) / 2

console.log("Hello World!!!")

if (media0 >= 7) {
    console.log(`${alunos[0].nome}, você de ${alunos[0].idade} anos, obteve média igual a ${media0}, portanto, você foi APROVADO!`)
} else {
    console.log(`${alunos[0].nome}, você de ${alunos[0].idade} anos, obteve média igual a ${media0}, portanto, você foi REPROVADO!`)
}
if (media1 >= 7) {
    console.log(`${alunos[1].nome}, você de ${alunos[1].idade} anos, obteve média igual a ${media1}, portanto, você foi APROVADO!`)
} else {
    console.log(`${alunos[1].nome}, você de ${alunos[1].idade} anos, obteve média igual a ${media1}, portanto, você foi REPROVADO!`)
}