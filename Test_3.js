//Quiz with if else
var a = prompt('Сколько планет в солнечной системе?')
var res = a;

if(res == 8 || res == 'Восемь' || res == 'восемь' ) {
    alert('Это правильно')
} else if(res < 8){
    alert('Это мало')
} else if(res > 8) {
    alert('Много')
} else {
    alert('Ответ нам не знаком')
}