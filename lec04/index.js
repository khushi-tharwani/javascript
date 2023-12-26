// let products = 
//     [
//         {
//           "name" : "baked beans",
//           "price" : 0.40,
//           "image" : "beans.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "hot dogs",
//           "price" : 1.99,
//           "image" : "hotdogs.jpg",
//           "type" : "meat"
//         },
//         {
//           "name" : "spam",
//           "price" : 2.85,
//           "image" : "spam.jpg",
//           "type" : "meat"
//         },
//         {
//           "name" : "refried beans",
//           "price" : 0.99,
//           "image" : "refried.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "kidney beans",
//           "price" : 0.58,
//           "image" : "kidney.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "garden peas",
//           "price" : 0.52,
//           "image" : "gardenpeas.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "mushy peas",
//           "price" : 0.58,
//           "image" : "mushypeas.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "corned beef",
//           "price" : 2.39,
//           "image" : "cornedbeef.jpg",
//           "type" : "meat"
//         },
//         {
//           "name" : "tomato soup",
//           "price" : 1.40,
//           "image" : "tomatosoup.jpg",
//           "type" : "soup"
//         },
//         {
//           "name" : "chopped tomatoes",
//           "price" : 0.45,
//           "image" : "tomato.jpg",
//           "type" : "vegetables"
//         },
//         {
//           "name" : "chicken noodle soup",
//           "price" : 1.89,
//           "image" : "chickennoodle.jpg",
//           "type" : "soup"
//         },
//         {
//           "name" : "carrot and coriander soup",
//           "price" : 1.49,
//           "image" : "carrotcoriander.jpg",
//           "type" : "soup"
//         }
//       ]
      


// //implementing search feature
// // includes->str.includes("bak")=> return true if exists else returns false


// let searchString=prompt("enter the product to be searched:")
// products.forEach((elem)=>{
//   // console.log(elem.name)
//   if(elem.name.includes(searchString)){
//     console.log(elem.name)
//   }
// })


// let filterProducts =products.filter((elem)=>elem.name.includes(searchString))
// console.log(filterProducts)

// // khudse tried
// // function search(string ){


// products.forEach( things=> {
//   if (things.includes("bak")){
//     console.log (elem);

//   }
// });

// }
// search(bak);

const header = document.getElementById('header')
console.log(header)
setTimeout(()=>{
  header.style.backgroundColor = 'red'
}, 3000)


const para = document.getElementsByClassName('.para');
console.log(para)

setTimeout(()=>{
   headerByQuery.className= 'red'
   para.id= 'p1'

  // headerByQuery.setAttribute('class','red')
  // para.setAttribute('id', 'p1'
  // )
},3000)

const headerByQuery = document.querySelector('#header')
console.log(headerByQuery)

let content = para.textContent
console.log(content)

let dynamicElem = document.querySelector('.dynamic')
console.log(dynamicElem)
// works same
// dynamicElem.textContent ="hello"
// dynamicElem.innerHTML="hello"

// h1 as it is print krega
// dynamicElem.textContent="<h1>Hello</h1>"
// // parse it and render
// dynamicElem.innerHTML="<h1>Hello</h1>"

let v = prompt("Enter")
console.log(v)
dynamicElem.textContent = v


















