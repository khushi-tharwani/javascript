const btn= document.querySelector('#btn')
btn.addEventListener('click', ()=>{
    const promise = fetch('https://dog-api.kinduff.com/api/facts')
    console.log(promise)
    // loadend k similar h
    promise.then(()=>{
        console.log("Done!!!")
    })
    console.log("Helolloo")
})