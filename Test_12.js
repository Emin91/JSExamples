//factorial of number
var num = prompt("Type num")
var factorial = 1

document.write(`factorial ${num}! is: `)

do{
    if(num == 0){
        factorial = 1
        break
    }
    factorial = factorial * num
    num = num - 1
}
while (num > 0)
document.write(factorial)