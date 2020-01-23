//выбор кофе
var a = prompt('Выберите кофе')
var b = 0
switch(a) {
    case "1":
        b += 1.20
        document.write("<img src='./img/small.png' width='100' height='120'/></br>")
        break;
    case "2":
        b += 1.40
        document.write("<img src='./img/small.png' width='110' height='130'/></br>")
        break;
    case "3":
        b += 1.68
        document.write("<img src='./img/small.png' width='120' height='140'/></br>")
        break;
    case "4":
        b += 2.15
        document.write("<img src='./img/small.png' width='130' height='150'/></br>")
        break;
    default:
        document.write('Вы не выбрали кофе') 
        break;   
}

if (b != 0) {
    document.write(`Цена: ${b}`)
}