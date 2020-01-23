//Do while
var input
var input2 = Number(prompt('Type first num'))
do {
    input = Number(prompt('Type num'))
    document.write(`num is ${input} </br>`)
} while (input != input2) {
    document.write(`Your num is: ${input2}`)
}