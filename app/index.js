var someArray = [
    {
        name:"Jacob",
        age: 20
    },
    {
        name:"Josh",
        age:20
    },
    {
        name:"Tommy",
        age:21
    }
]

const array = [1,2,3,4,5]

function addArray(array) {

    //With Forloop
    // var sum;
    // for(var i = 0; i<array.length; i++){
    //     sum+=array[i]
    // }

    //with reduce
    return array.reduce((sum, num) => {
        sum+=num
        return sum
    })

    //with foreach
    // var sum;
    // array.forEach(num => {
    //     sum+=num
    // })

    return array.reduce()
}
console.log(addArray(array))