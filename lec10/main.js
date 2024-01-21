// const hit = document.querySelector('#hit')
//  const categorySelect = document.getElementById('categorySelect');


//  fetch('https://api.publicapis.org/categories')
//      .then(response => response.json())
//     .then( (value)=>{
//         console.log(value)
//         value.categorySelect.forEach(elem => {
//            Select.innerHTML+=`<option value="${value}>${value}</option>`
//          });
//     })
// Select.addEventListner('change',()=>{
//     console.log(Select.value)
// })


// // const hit = document.querySelector('#hit')
// hit.addEventListener('click',()=>{
//     fetch('https://cat-fact.herokuapp.com/facts')
//         .then((response)=>response.json())
//         .then((value)=>{
//             console.log(value);
//             value.categories.forEach(element => {
                
//             });
//             return fetch('https://dog-api.kinduff.com/api/facts')
//           })
//  .then((parameter)value: ())
//  .then((response)=>response.json())
//  })
    
const btn = document.querySelector('#click')
const dropdown  = document.querySelector('#dropdown')
btn.addEventListener('click',()=>{
        // const promise = fetch("https://api.publicapis.org/categories")
        // console.log(promise)
        // // Here response is something that our link will pass to the promise object 
        // promise.then((response)=>{
        //     // const promise2 = response.json() ,will Returning u a promise because the response have a everything related to it like status link etc{aka META DATA}.. But if we want the data then we have to convert it to json that is a promise collected through json function and when we aplly .then to it will have the main answer of json data

        //     // console.log(response) , this will show  everything that  has been passed to it by promise
        //     const promise2 = response.json()
        
        //     // The answer u are going to receive eventually is passed in the THEN handler
        //     promise2.then((value)=>{
        //         console.log(value)
        //     })
        // })

        // MUCH EASIER VERSION ALSO CALLED AS PROMISE CHAINING
        // It will first fetch the promise in start which we don't have to store in a variable and can directly apply then because promise is passed through fetch then after applying the then it has the response which is then converted to a json then is again passed to the then which called it now the THEN also has a promise to solve that apply the then again to it and now that THEN function actually has the data in "value" 
        
        fetch("https://api.publicapis.org/categories")
        .then((response)=>{
            return response.json()
        })
        .then((value)=>{
                value.categories.forEach(value1 => {
                console.log(value1)
                dropdown.innerHTML += '<option>'+value1+'</option'
                // This helps in making a dropdown that have all the categories
            });       
        })
        Select.addEventListener('change',()=>{
            console.log(Select.value)
            fetch(`https://api.publicapis.org/entries?category=${dropdown.value}`)
            .then((response)=>response.json())
            .then((value)=>console.log(value))
        })

        // DOGS AND CATS DATA IS TO BE PRINTED USING PROMISE CHAINING
        // fetch("https://dog-api.kinduff.com/api/facts")
        // .then((response)=>response.json())
        // .then((value)=>{
        //     console.log(value)
        //     return fetch("https://cat-fact.herokuapp.com/facts")
        //      })
        // .then((response)=>response.json())
        // .then((value)=>console.log(value))
         
    })