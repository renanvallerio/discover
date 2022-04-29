//MY VERSION
function conversor(type, value) {
    if (type == "F") {
        let C = (value - 32) * 5/9
        console.log(C, "CELSIUS")  
    } else if (type == "C"){
        let F = value * 9/5 + 32
        console.log(F, "FAHRENHEIT")
    } else {
        console.log("DEU RUIM :(")
    }

}

conversor("F", 75.2)
conversor("C", 24)

//ROCKETSEAT CORRECTION

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes("F")

    // error flow
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // ideal flow, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //alternative flow
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('75.2F'))
    console.log(transformDegree('24C'))
} catch (error) {
    console.log(error.message)
}