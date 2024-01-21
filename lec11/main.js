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