//Arrows with for
for (; ;) {
    var a = prompt('Type U (Up) D (Down) L (Left) R (Right)')
    switch (a) {
        case 'u':
            document.write('Up </br>')
            continue
        case 'd':
            document.write('Down </br>')
            continue
        case 'l':
            document.write('Left </br>')
            continue
        case 'r':
            document.write('Right </br>')
            continue
        default:
            var b = confirm('Do you want to exit?')
            if(b == true){
                break
            } else {
                continue
            }
    }
    break
}