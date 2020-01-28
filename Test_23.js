//Свойства объектов


var menu = {
  w: 200,
  h: 252,
  title: 'Menu',
  name: 'Main menu',
  phone: '(011) 532 14 25'
}

//инициализация
var count = 0

for (var key in menu) {
  //Инкремент счетчика
  count++
  //Вывод всех свойств объкта
  console.log(`Key: ${key}, Value: ${menu[key]}`)

}
//Вывод длина свойств объкта
console.log(`Value: ${count}` )