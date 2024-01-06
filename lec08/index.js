// let number = document.querySelector('.prime')
const generateBtn = document.querySelector('#generate')
const ip= document.querySelector('#ip')
const answer = document.querySelector('#answer')

    
  
    // function Prime(num) {
    //   if (num <= 1)
    //    return 0;
    //   for (let i = 2; i <= num; i++) {
    //     if (num % i === 0) {
    //       return 0;
    //     }
    //   }
    //   return 1;
    // }
  
    // function Cprime(n) {
    //   let count = 0;
    //   let num = 2;
  
    //   while (count < n) {
    //     if (Prime(num))
    //      {
    //       console.log(num);
    //       count++;
    //     }
    //     num++;
    //   }
    // }
  
    generateBtn.addEventListener('click', () => {
        // console.log("clicked")
        // console.log("ip.value")
        const range = ip.value
    
        let count = 0
        let currentNumber = 2
        while (count<range) {
            let flag = true
            for (let i = 2; i < currentNumber; i++) {
                if (currentNumber % i == 0) {
                    flag = false;
                }
    
            }
            if (flag){
                answer.textContent += ` ${currentNumber}`
                count++;
            }
            currentNumber++;
        }
    })
