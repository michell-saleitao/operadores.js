// Iniciação a OO (Orientação a Objetos)

const aluno1 = {
    nome: "Michell",
    nota1: 8.5,
    nota2: 5.0
}

const media = (aluno1.nota1 + aluno1.nota2) / 2

if (media >= 7.0) {
    console.log(`${aluno1.nome}, você obteve média igual a ${media} e foi APROVADO!`)
} else {
    console.log(`${aluno1.nome}, você obteve média igual a ${media} e foi REPROVADO!`)
}