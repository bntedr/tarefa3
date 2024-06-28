//Exercício1
let nome = "Bento Eduardo"
let idade = 25
let estado_civil = false
console.log("Nome:",nome)
console.log("Idade:",idade)
console.log("Estado Civil:",estado_civil)

let valor1 = 4
let valor2 = 5
let valor3 = 2
let valor4 = 10

let media = (valor1 + valor2 + valor3 + valor4) / 4
console.log("O valor da média é",media)*/

/*Exemplo
let idade = 15
if (idade >= 18){
    console.log("Você é maior de idade!")
} else{
    console.log("Você é menor de idade!")
}
if (idade >= 18){
    console.log(`Sua idade é ${idade}!`)
} else if (idade === 15) {
    console.log("Sua idade é 15!!")
}*/

//Exerício2
let cargo = "diretor"
switch (cargo) {
    case "gerente":
        console.log(`Você tem permissão de ${cargo}`)
        break
    case "comum":
        console.log(`Você tem permissão de ${cargo}`)
        break
    case "diretor":
        console.log(`Você tem permissão de ${cargo}`)
        break
    default:
        console.log("Permissão Inválida!")
}