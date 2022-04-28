let nota = 90

switch (true) {
    case (nota > 100 || nota < 0):
        console.log('NOTA INVÁLIDA!')
        break
    case (nota >= 90):
        letra = "A"
        console.log(`Você recebeu um ${letra}`)
        break
    case (nota >= 80):
        letra = "B"
        console.log(`Você recebeu um ${letra}`)
        break
    case (nota >= 70):
        letra = "C"
        console.log(`Você recebeu um ${letra}`)
        break
    case (nota >= 60):
        letra = "D"
        console.log(`Você recebeu um ${letra}`)
        break
    case (nota >= 50):
        letra = "E"
        console.log(`Você recebeu um ${letra}`)
        break
    case (nota < 50):
        letra = "F"
        console.log(`Você recebeu um ${letra}`)
        break
    default:
        console.log("VOCÊ NÃO FEZ A PROVA!")
} 