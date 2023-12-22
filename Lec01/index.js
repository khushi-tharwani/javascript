console.log("hi")
let x

// typeof-->variable ka datatype batayegaaaa

console.log(typeof x)
// undefined aayega , kuch hoga hi nhi

let y = null
console.log(typeof y)
// object banega but wo null rahega
let bar=1.5
console.log(typeof bar)

let a=[1,2,3,"foo"]
let obj = {
    name:"John Doe",
    "email":"test@gmail.com",
    address:{
        "buildingname":"XYZ",
        "streetNme":"" ,
        "city":"Mumbai",
        "pincode":"421001"
    },
    1:"hieee"

}
console.log(obj.name)
console.log(obj[1])



let num='1.5'
// let numInt = parseFloat(num)
// let numInt = Number(num)
let numInt = +num
console.log(typeof numInt, numInt)


let flag= 0
if(flag){
    console.log("hi")
}
// falsy value h toh nhi chalegaaaa 


let str1=1
let str2= '1'
console.log(str1===str2)
// triple === strict equal checking
// double wala bol dega true aur code fatt jaayega


console.log('3'+ 3)
console.log(3+ '3')
console.log('3'+ '3')
console.log(3+ 3)

console.log('3'-'3')
console.log(3-3)
console.log('3'-3
)