let family = {
    incomes: [2500, 3200, 250.43, 360.45, 43200],
    expenses: [320.34, 128.45, 176.87, 1400.00, 9000]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpanses = sum(family.expenses)

    const total = calculateIncomes - calculateExpanses

    itsOk = total >= 0

    let balanceText = "NEGATIVO"

    if (itsOk) {
        balanceText = "POSITIVO"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()