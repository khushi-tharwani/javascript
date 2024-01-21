const hit = document.querySelector('#hit')

// hit.addEventListener('click', () => {
//     const promise = fetch('https://api.publicapis.org/categories')
//     promise.then((response) => {
//         // returning you a promise
//         const promise2 = response.json()
//         console.log(promise2)
//         // the answer you are going to recieve eventually is passed in then then handler
//         promise2.then((value) => {
//             console.log(value)
//         })

//     })
// })


// hit.addEventListener('click', () =>
//  {
//     fetch('https://api.publicapis.org/categories')
//         .then((response) =>
//      {
//         response.json()
//                 .then((value) =>
//         {
//             console.log(value)
//         })

//     })
// })


// promise chaining
hit.addEventListener('click', () =>{
//     fetch('https://api.publicapis.org/categories')
//         .then((response) =>{
//             return response.json()})
//                 .then((value) =>
//         {
//             console.log(value)
//         })

//  } )


fetch('https://api.publicapis.org/categories')
.then((response)=>response.json())
.then((value)=>console.log(value))
})
    
