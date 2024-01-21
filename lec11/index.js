const btn = document.querySelector('#click')

const dropdown  = document.querySelector('#dropdown')

btn.addEventListener('click',()=>{
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
    dropdown.addEventListener('change',()=>{
        console.log(dropdown.value)
        fetch(`https://api.publicapis.org/entries?category=${dropdown.value}`)
        .then((response)=>response.json())
        .then((value)=>console.log(value))
    })




    const btn2 = document.querySelector('#go')
    const show=document.querySelector('#show')
    btn2.addEventListener('click',()=>{
            console.log(dropdown.value)
            console.log(show.value)
        fetch(`https://api.publicapis.org/entries?title=${show.value}&category=${dropdown.value}`)
        .then((response)=>response.json())
        .then((value)=>console.log(value))
    })
        
})