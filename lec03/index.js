// when the function doesnt have a name it is called anonymous function
// declaration function
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 3))

// expression function

let foo = function () {
    console.log("into foo")
}
foo();

// arrow function
let add = (a, b) => a + b
let result = add(4, 5);
console.log(result);



function sum(...args) {
    let sum = 0
    for (let elem of args) {
        sum += elem
    }
    console.log(sum)
}

sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 5)

let sumArrow = (...args) => {
    let sum = 0
    for (let elem of args) {
        sum += elem
    }
    console.log(sum)
}
sumArrow(1, 2, 3)

function test() {
    let flag = true
    let foo = ""
    if (flag) {
        const elem = "test"
        foo = "Hi"
        console.log("hi")
    }
    // create new global variable ideally it should hv given error but elem was block scoped
    elem = "update"
    // console.log("Again "+i)
}

test()
const objj = {
    fname: "test"
    , lname: "bar"

}
// reference is not changed- will allow
objj.fname = "updated"
// reference is changed - wont allow
// objj={
//      email:"test@mskjdxk.cod"
// }
test();


function fooo() {
    // console.log(a)
    // console.log("test")
    // var a = 5;

    // variable hoisting
    var a
    console.log(a)
    console.log("test")
    a = 5
}
fooo()


// const square = (x) => x * x
// // const divide=(x)=> x/2

// // const cube = function (x, callback) {
// //     return x * callback(x)
// // }

// let ans = square(5)
// console.log(ans)
// // let ans2 = cube(5, square)

// const cube = (x,callback )=>x* callback (x)
// let ans2 = cube(5, (x)=>x*x)
// console.log(ans2)


// setTimeout(()=> {
//     console.log("after 3 seconds - Hi")
// },300)

// setInterval(()=> {
//     console.log("helloeee")
// },200)

let Arr = [1,2,3,4,5]

for(let i=0 ; i<Arr.length; i++)
{
    console.log(Arr[i])
}

for (let elem of Arr){
    console.log(elem)
}

for (let ind in Arr){
    console.log(Arr[ind])
}

Arr.forEach((value,index, a)=>{
    console.log(value,index,a)
})
Arr.forEach((value)=>{
    let sum=0
    Arr.forEach((value)=>{
        sum+=value
    })
    console.log(sum)
})

let squares=[]
Arr.forEach((value)=>
{
    squares.push(value*value)
})

console.log(squares)
let newArr = Arr.map((value,index,arr)=>{
    return value*value
})
console.log(newArr)

let even=[]
squares.forEach((value)=>
{
    if(value%2==0)
    even.push(value)
    
})
console.log(even)

let filtered= squares.filter((value)=>value%2==0)
console.log(filtered)

Arr.forEach((value)=>{
    let product=1
    Arr.forEach((value)=>{
        product*=value
    })
    console.log(product)
})

let ans=Arr.reduce((acc,curr)=>{
    return acc*curr
})
console.log(ans)





