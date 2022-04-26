//function scope 
let subject

function createThink() {
    let subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink())
console.log(subject)