//Skip number in for
var count = prompt('Num of iteration')
var stop = prompt('Which number you want to skip?')

for(var i = 1; i <= count; i++){
    if(i == stop) {
        document.write('</br>')
        //break
        continue
    } else {
        document.write(`${i} </br>`)
    }
}