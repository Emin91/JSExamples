//Discount
var num = Number(prompt('Сколько кепок вы хотите купить? (Примечание: При покупке больще 3-ёх, 10% скидка)'))
var price = 25
var discount = 0.25
var cost

cost = num >= 3 ? num * price * discount : num * price

document.write(`Цена товара: ${cost} manat`)