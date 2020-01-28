//Функия с параметрами и условиями

// function test(){
//     const type = prompt("df")
//     if(type == undefined) {
//             console.log("yes")
//     }
// }
// test()

function whoAreYou(text, msgText) {
    //Открываем конфирм
    const quest = confirm("Who are you?")
    if(quest == true) {
        let nameIs = prompt(`${text}`)
        if(nameIs == 'Emin' || nameIs == "EMIN" || nameIs == "Эмин" ) {
            console.log(`${msgText} ${nameIs}`)
        } else if(nameIs == undefined) {
            console.log(`Cancel`)
        } else if(nameIs != "") {
            console.log(`Your name is ${nameIs}`)
        } else if(nameIs == false) {
            console.log(`Nothing typed`)
        }
    } else if(quest == false) {
        alert('Bye bye')
        console.log('Cancel')
    }
}

whoAreYou('Type your name', 'Hola')