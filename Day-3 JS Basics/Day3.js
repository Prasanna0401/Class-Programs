//function: it is a block of code and we can reuse the code by calling the function wherever we want
// function resume(){    //syntax for the normal function
//     let v="Hi"
//     console.log(v);
// }
// resume()              //calling the function 
// let p=3948
// hello()                             //we can call normal function before initialization
// function hello(){
//     console.log("I am prasanna");
//     console.log(p);   
// }
// hello()

// let pv="It is arrow function"
// const arrfunc=()=>{                            //arrow function ES6 and we cannot call before initialization
//     console.log("syntax for arrow function")
//     console.log(pv);
// }
// arrfunc()  

// let a=34,b=59
// const anyfunc=function(a,b){   //syntax for anonymous function, In anonymous function we do not declare any name to the function
//     console.log(a,b);
// }
// anyfunc(74,98)
// anyfunc(a,b)

// (function(){})();   //syntax for  Immediately Invoked Function Expression (IIFE) 
// let a=45,b=43;
// (function(a,b){
//     console.log(a,b);  
// })(10,29);
// console.log(a,b);

// function retfunc(a,b){               //using of the return function      
//     console.log("Return function")
//     return a*b
// }
// let rf=retfunc(10,20);
// console.log(rf);

// function hof(){                        //using of the higher order function
//     console.log("It is a function");
//     return function refunc(a,b){
//         console.log("It is an hof");
//         return a/b;
//     }
// }
// let rf=hof()
// console.log(rf(30,60));

// function cbf() {
//     console.log("It is a callbackfunction");
// }
// function hof(callback) {               //syntax for callback function
//     console.log("It is a function");
//     callback()
//     return function rnfunc() {
//         console.log("function type");
//         callback()
//     }
// }
// let returnfun = hof(cbf)   //we can use function as a parameter in a function to declare,This is also known as higher order function
// returnfun()

// if else statement:                       //syntax for if else condition
// let input = 5;
// if (input % 2 == 0) {
//     console.log("It is a even number")
// } else {
//     console.log("It is an odd number")
// }

//if else ladder Statement:          //syntax for if else ladder condition
// let input=86;
// if(input>=90 && input<=100){
//     console.log("Grade O");    
// }else if(input>=80 && input<=89){
//     console.log("Grade A+");
// }else if(input>=70 && input<=79){
//     console.log("Grade A");
// }else{
//     console.log("Grade B+");
// }

//if else nested statement:                       //syntax for if else nested condition
// let a=1,b="2";
// if(a===1){
//     if(b===1){
//         console.log("a is 1 and b is 2");
//     }else{
//         console.log("a is 1 and b is not 2");
//     }
// }else{
//     console.log("a is not 1");
// }

//Ternary operator(if else):
//variable = condition ? true block : false block;         syntax for Ternary operator(if else)
// let grade=86;
// const result = grade>=50 && grade<=100 ? "You have passed" : "you have failed"
// console.log(result);

//switch case statment:                         syntax for switch case statment
// let N=5
// let day;
// switch(N){
//     case 1:
//         day="Monday";
//         break;
//     case 2:
//         day="Tuesday";
//         break;
//     case 3:
//         day="Wednesday";
//         break;
//     case 4:
//         day="Thursday";
//         break;
//     case 5:
//         day="Friday";
//         break;    
//     default:
//         day="Weekend";
// }
// console.log(day);

//while loop:                             //syntax for while loop(entry check)
// let i=3;
// while(i<=7){
//     console.log("Hi,I am prasanna");
//     i++
// }

//Do while loop:                          //syntax for Do while loop(exit check)
// let count=3
// do{
//     console.log("Hi,I am prasanna");
//     count++
// }while(count<=7)

//For loop:
// for(initialization; condition; increment/decrement){       //syntax for (for loop)
// }
// for(let count=4;count<=12;count++){
//     console.log("Hi, I am prasanna");
// }
