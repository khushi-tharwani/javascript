
const ip1Elem = document.querySelector('#ip1') 
const ip2Elem = document.querySelector('#ip2')
const opElem = document.querySelector('#op') 

const element= document.querySelector('#calculator')
const ansElem =document.querySelector('#ans')

element.addEventListener('click',()=>{
    const ip1= ip1Elem.value;
    const ip2= ip2Elem.value;
    const op= opElem.value;
    // console.log(ip1, ip2 , op)
    let answer=0;
switch (op){
    case '+':
        answer = ip1+ip2;
        break;
        case '-':
            answer = ip1-ip2;
            break;
        case '*':
            answer = ip1*ip2;
            break;
         case '/':
            answer = ip1/ip2;
            break;
}
// answer=eval(ip1+op+ip2)
ansElem.textContent = `Answer is ${answer}`
}
)

