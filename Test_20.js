//Функия с параметрами

function whoAreYou(text) {
    const quest = confirm("Who are you?")
    if(quest == true) {
        let nameIs = prompt(`${text}`)
        console.log(`Name is ${nameIs}`)
    } else if(quest == false) {
        alert('Bye bye')
        console.log('Cancel')
    }
}

whoAreYou('Type your name')