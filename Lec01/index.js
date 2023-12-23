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
// falsy value h toh nhi chalegaaaa : undefined,0,empty space


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
console.log('3'-3)


let arr=[1,2,3,4,5]
// traditional for loop
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

// for-of loop
for(let elem of arr){
    console.log(elem)
}

let objc = {
    name:"Foo",
    email:"test@gmail.com",
    number:"12345"
}
// for in loop
for(let key in objc)
{
    console.log(key,"-",objc[key])
}
// while loop
let i=0;
while(i<arr.length)
{
    console.log(arr[i]);
    i++;
}


let n = prompt("enter number:")
console.log(n)  

// for(let i=2; i<=value; i++)
// {
//     if(value%i==0)
//     {
//         return 0;
//     }
// }
// return console.log(value);




  let count = 0
  while (count <= n) {
    for (let num = 2; count<= n; num++) { 
      flag=true;
      for(let i=2; i < num/2; i++)
      if (num % i === 0) {
        flag = false;
        
      }
    }

    
    if (flag) {
      console.log(num);
      count++;
    }

 }

//  declaration function

function addTwoNums(x,y){
    console.log(x,y)
    return x+y;
}
console.log(addTwoNums(3,4))

