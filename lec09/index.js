const req = document.querySelector('#req')
req.addEventListener('click',()=>{

    let reqRequest = new XMLHttpRequest();
        reqRequest.addEventListener('loadend',()=>{
        console.log(reqRequest.response)

        let req2= new XMLHttpRequest();
        req2.addEventListener('loadend',()=>
       { console.log(req2.response)
       })
       req2.open('GET','https://cat-fact.herokuapp.com/facts')
       req2.send();
 })

reqRequest.open('GET','https://dog-api.kinduff.com/api/facts')
reqRequest.send();



})


function doStep1(init, callback){
    const result = init+1;
    callback(result);

}

function doStep2(init, callback){
    const result = init +2;
    callback(result);
}

function doStep3(init, callback){
    const result = init +3;
    callback(result);
}

function doOperation(){
    doStep1(0,(result1)=>{
        doStep2(result1,(result2)=>{
            doStep3(result2, (result3)=>
            {
                console.log(`result : ${result3}`);
            })
        })
    })
}

doOperation();


