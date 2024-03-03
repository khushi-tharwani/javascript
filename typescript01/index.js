// let x = "test"
// let str = x.toLowerCase()
// console.log(str)
// x();
// // now it results in compile time error but it actuslly is runtime error in javascript
// function foo(x){
//     x.flip();
// }
// const obj = {
//     name:"test"
// }
// foo(obj)
// // if flip would not exist , it would give error on runtime
// const user= {
// }
// function flipcoin(){
//     // meant to be math.randon()
//     return Math.random()<0.5
// }
// const value = Math.random()< 0.5 ? "a" : "b";
// if()
// console.log("HIE")
// ANY--super data type of all ,but dont use it usually because js bhi toh wahi
//  krrA thaa , toh typescript kyA
// function check():boolean{
//     // implicitly randomnum will be of type num
//     let randomNumber=Math.random();
//     if(randomNumber<0.5){
//         return true;
//     }
//      return false;
// }
// console.log(check())
// function add(x:any,y:any):number
// {
//     //not implicit any flag means parameters cannot be of datatype any
//     // (implicitly)
//     return x+y;
// }
// let obj=[
// {name:"khushi",marks:12}
// ]
// function avg(obj:{name: string,marks: number}[]):number{
//     let sum=0
//     for(let i=0;i<obj.length;i++)
//     sum+=obj[i].marks;
//     return sum
// }
// agar andar datatype and naam diya toh yaha m marks ki jagah 
// markssss ya kuch aur nhi likh sakti----interface and
var students = [
    {
        fname: "hii",
        lname: "byee"
    },
    {
        fname: "hii1",
        lname: "byee1"
    },
    {
        fname: "hii2",
        lname: "byee2"
    }
];
function prints(students) {
    students.forEach(function (student) {
        var _a;
        console.log(student.fname.toLocaleLowerCase());
        // if(student.lname)
        console.log((_a = student.lname) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase());
    });
}
console.log(prints(students));
// optional propertry h toh obj k andar ? likhna h
// agar koi function call m koi value undefined ho sakti h toh udhar ? likhna h
