let numbers = [];


document.getElementById("sortButton").addEventListener("click", function() {
    let inputElement = document.getElementById("inputNumber");
    let inputValue = Number(inputElement.value);
    numbers.push(inputValue);



    for (let i = 0; i < numbers.length; i++) 
    {
        for (let j = i + 1; j < numbers.length; j++) 
        {
            if (numbers[i] > numbers[j])
             {
            
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    // +ve swap krna h
    // -ve swap krna h
    // 0 return jab dono equal hai
    // numbers.sort((a,b)=>a-b)

    

    let resultElement = document.getElementById("sortedResult");
    resultElement.textContent = `Sorted Numbers: ${numbers.join(', ')}`;

    
});