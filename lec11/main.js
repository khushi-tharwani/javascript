const hit = document.querySelector('#hit')

hit.addEventListener('click',()=>{
    hitURL()
    console.log("Hitt sentt!")
})
async function hitURL(){
    const response = await fetch('https://api.publicapis.org/entries')
    // console.log("Fetched")
    const value = await response.json()
    console.log(value)
}
// important
// var functionscoped
// let , const -- blockscoped
// hoisting in js::: declaration to the top of the current scope(initialization doesnt matter)
 // (to the top of the current script or the current function).
//  initialization uper nhi jaayegaaa
// NULL: object create hua h
// undefined is always undefined
// falsy values: not a string, null, nan,undefined
// for of--array object
// for in--index k liye , indexes print honge(object keys)
// callback is asynchronous
// DOM::Document object model
// every element in html is represented as an object in java script
// Events in js: input-> input m jo likha wo likhta jaayega
// change event :: change hoga click k baad
// sync->top to bottom,line by line
// async-> unresponsive rokne k liye, beech m kahi help krega agar data k liye time lagra ho toh
// callback k liye xml,ajax
// promises 
// async await