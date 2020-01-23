//Несколь тернарных операторов ?
let age = Number(prompt('Your age?', 18))

let msg = (age == 18) ? 'Your age ise  18' : (age < 18) ? 'You are molodoy' : (age > 18) ? 'Woow' : 'You are very old'
    alert( msg );