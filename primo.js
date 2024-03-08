let numero = parseInt(prompt("Digite um número:"))
let primo = true

if (numero <= 1) {
    primo = false
} else {
    for (let i = 2; i <= Math.sqrt(numero); i = i + 1) {
        if (numero % i === 0) {
            primo = false
            break
        }
    }
}

if (primo) {
    console.log(numero + " é primo")
} else {
    console.log(numero + " não é primo")
}