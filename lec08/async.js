// const btnElem = document.querySelector('#btn')

// btnElem.addEventListener('click' , ()=>{
//     console.log('clicked')
// })

// console.log("Hello world")
setTimeout(()=>{
    console.log("after 0 seconds")
},0)

// console.log("helloworld!")
// AJX---asyncronous javascript Xml
const xhr = document.querySelector('#xhr')
xhr.addEventListener('click',()=>{
    // console.log("start")

    /**
    1.create
    2. add event
    3. open connection
    4.send/hit
    */

    let xhrRequest = new XMLHttpRequest();

    // asynvhromously run krega
    xhrRequest.addEventListener('loadend',()=>{
        console.log("Ended with request")
    })

    // create the connection with the external url
    xhrRequest.open('GET','https://api.publicapis.org/categories')

    // hit the request
    xhrRequest.send();
    console.log("started with request!!!")


    //asynchromatic 
})

// input>elements(1)show 1
// input 30
// input 15
// sorted array 1 15 30
// comma separted daalu aur array sort ho jaaye

