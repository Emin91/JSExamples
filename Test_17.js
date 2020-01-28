// this, bind, call, apply
// Как можно вызывать функию.

function hello() {
    console.log("Hello amigo", this)
}

const person = {
    name: "Emin",
    age: 25,
    sayHello: hello,
    sayHelloWin: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info: `)
        console.log(`Name is ${this.name}`)
        console.log(`Name is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const Amigo = {
    name: "Xuan",
    age: 158,
}

// Первый способ вызова функции
// const xuanInfoLog = person.logInfo.bind(Amigo)
// xuanInfoLog('Usta', '(011) 555 23 52')

// Второй способ вызова функции
// const xuanInfoLog = person.logInfo.bind(Amigo, 'Usta', '(011) 555 23 52')
// xuanInfoLog()

// Третий способ вызова функции с помощью Call , в конце () не нужны , функция вызывается сразу
// person.logInfo.call(Amigo, 'Usta', '(011) 555 23 52')

// Четвертый способ вызова функции с помощью Apply , в конце () не нужны , параметры передаються в []
person.logInfo.apply(Amigo, ['Usta', '(011) 555 23 52'])