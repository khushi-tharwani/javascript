// if true toh x warna o
let turnX = true;

// maintaining number of turns to deternmine if draw
let count = 0;

let buttons = document.querySelectorAll('.board button')
console.log(buttons)
buttons.forEach(button => {

    button.addEventListener('click', () => {
        {
            if (count % 2 === 0) {
                button.textContent = "X"
                button.disabled = true
            }
            else {
                button.textContent = "O"
                button.disabled = true
            }
        }
        count++;
        checkDraw();
        checkWinner();
    });

})

let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
function checkWinner(){
        winningPatterns.forEach((pattern)=>
        {
            // console.log(pattern)
            // console.log(buttons[pattern[0]],pattern[0])
            // console.log(buttons[pattern[1]],pattern[1])
            // console.log(buttons[pattern[2]],pattern[2])
            let fvalue = buttons[pattern[0]].textContent
            let svalue = buttons[pattern[1]].textContent
            let tvalue = buttons[pattern[2]].textContent

            if(fvalue!=='' && fvalue===svalue && svalue===tvalue){
                displayWinner(fvalue);
            }
        })
}
function displayWinner(fvalue){
    console.log("winner is "+fvalue)
    let msg = document.querySelector('#msg')
    msg.textContent= `winner is ${fvalue}`
    let msgContainer = document.querySelector('.msg-container');
    msgContainer.classList.remove('d-none')
    disableButtons()
}
function disableButtons()
{
    disableButtons.forEach((button)=>{
        button.disabled= true;
     })
}

function checkDraw(){
    if(count===9){
        let msg = document.querySelector('#msg')
        msg.textContent = `Draw!!!`
        let msgContainer=document.querySelector('.msg-container')
        msgContainer.classList.remove('d-none')
    }
}
