// Проход по элементам массива и умножение на число 15

// const array = [1, 2, 3, 4, 5]
// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

// console.log(multBy(array, 15))




//Prototype
const array = [1, 2, 3, 4, 5]
Array.prototype.multyBy = function(n) { 
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multyBy(15))