let random = parseInt(Math.random()*10)
console.log(random)


let res = document.querySelector('.result')


if(random < 5)

res.textContent = `you lose - ${random}`



else(random > 5)

res.textContent = "you win"+random


// template strings - backticks
console.log(`Random is ${random} `)



function check(){
    let ans=document.querySelector('#answer')
    let element = document.querySelector('#ip')
    console.log(element.value)
    element.focus()
    let value=element.value

    if (isNaN(parseInt(value))){
        ans.textContent="Enter a valid num!!"
        return
    }


    let flag=true
    
    for(i=2; i<value ;i++)
    {   
        if(value%i==0)
    {flag=false;
        break;
    }
    }
   
    if(flag){
        ans.textContent=`${value} is prime`
    }
    else{
        ans.textContent=`${value} is not prime`
    }
}
