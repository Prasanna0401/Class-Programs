//Hoisting:
//Hoisting support in variable and function where we can declare in top of code before executing the code
//Hoisting is created in a compiler phase 
//We can use hoisting in var and normal function
//Variables
// console.log(a);
// var a=265,b=685
// console.log(b);
//only var will support hoisting and let and const will not support hoisting
//function
// ex()
// function ex(){
//     console.log("It is a function");
// }
// ex()
//we can call normal function even before defining the function by using hoisting.So for that we use arrow function after es5 

//scope:
// let e=33,f=34;            //example for global scope
// console.log(e+f);
// function scope(){
//     console.log(e+f);
// }
// scope()
// console.log(e+f);
// function display1(){
//     let x=60                 //example for function scope
//     console.log(x);
//     function display2(){
//         let y=70
//         console.log(x);
//         console.log(y);
//     }
//     display2()
// }
// display1()
// function local(){
//     let z=393           //example for local scope
//     console.log(z);
// }
// local()
// console.log(z);

//array:
// let a=[554,55465,45235,46646];     //syntax for array
// console.log(a[2]);
// console.log(a.length);
//index always starts with 0 and length with 1
//We can use array or object only by loop method

// let a=["How","are","you","?"];
// console.log(a);
// a.push("Fine")                     //push method used to add elements at the end of an array
// console.log(a);
// a.pop()                            //pop method used to remove elements at the end of an array
// console.log(a);

// let a=["How","are","you","?"];
// console.log(a);
// a.unshift("Fine")                     //unshift method used to add elements at the beginning of an array
// console.log(a);
// a.shift()                            //shift method used to remove elements at the beginning of an array
// console.log(a);

// let a=["How","are","you","?"];
// console.log(a);
// const as=a.slice(0,3)         //slice method used to extract part of elements from a array and works with index (start,end-1)->to display
// console.log(as);
// console.log(a);               //it does not add or remove elements from array

//splice method:
//splice method used to add/remove/delete/replace in a array
//In splice method array are added or removed in a original array

// let arr=[100,200,300,400,500];
// arr.splice(3)                    //single parameter format(no of loops taken as variables)
// console.log(arr);

// let arr=[100,200,300,400,500];
// const as=a.splice(2,3)           //2 parameter method format(index,no of loops) to remove elements
// console.log(as);
// console.log(arr);

// let arr=[1,2,3,4,5]
// arr.splice(4,0,7)       //3 to many parameters method format(index,no of loops to delete,new variables to add)
// console.log(arr);
// arr.splice(4,1,90)
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9]
// arr.splice(5,2,100,200,300,400)  (index,no of loops to delete,adding new variables)
// console.log(arr);

//foreach method:
// variable name.forEach((item,index)=>{})     //syntax for forEach method
// console.log(`${}= ${}`);       //syntax for string template
// let loop=["HI",",","How","are","YOu","?"];
// loop.forEach((item,index)=>{
//     console.log(index);
//     console.log(item);
//     console.log(`${index}= ${item}`);
// })

//map method:
// variable name.map((item,index)=>{})     //syntax for map method
//Main difference between forEach and map is that map can create a new array by applying function
// let loop=["HI",",","How","are","YOu","?"];
// let result=loop.map((item,index)=>{
//     console.log(index);
//     console.log(item);
//     console.log(`${index}= ${item}`);
//     return loop.length
// })
// console.log(result);

//filter method:
// let loops=[96,455.45,235,535.335,765,"HI","Bye"];
// const FilRetArr=loops.filter(i => i>324)              //using of filter method
// console.log(FilRetArr);

//for of loop: (For array)
// let ForLoop=[19,23,495,536,345,100.01,"Hi","?"]
// for(let Sample of ForLoop){
//     console.log(Sample);
//     if(Sample>100){
//         console.log(Sample);
//     }else{
//         console.log("None");
//     }
// }

//Object:
// let object={key:value,key:value,...}     //Syntax for object
// let Obj={FirstName:"Prasanna",LastName:"venkatesh",Age:22,Designation:"Student"};
// console.log(Obj);
// console.log(Obj.FirstName);
// console.log(Obj.Designation);
// console.log(Object.keys(Obj));
// console.log(Object.values(Obj));

//for in loop: (For object) 
// let Obj={FirstName:"Prasanna",LastName:"venkatesh",Age:22,Designation:"Student"};
// for(let key in Obj){
//     console.log(Obj);                       //interation(looping) based on keys in object
//     console.log(key);                       //to get keys from object
//     console.log(Obj[key]);                  //to get values from object       
//     console.log(`${key}= ${Obj[key]}`);     //using string template
// }

//JSON:
// let JSON=[{},{},{},{},...];     //syntax for JSON

// let json=[{Name:"Prasanna",Age:22,Designation:"Student"},
//     {Name:"Venkatesh",Age:23,Designation:"Student"},
//     {Name:"Shyama",Age:26,Designation:"Business"},
//     {Name:"Sundar",Age:27,Designation:"Business"}];
// console.log(json);

// json.forEach((item,index)=>{       //using forEach method
//     console.log(item.Name);
//     console.log(item.Age);
//     console.log(item.Designation);
// })

// let jsMap=json.map((item,index)=>{     //using map method
//     if(item.Age>22){
//         return item;
//     }
//     return console.log("Age is less than 23");  
// })
// console.log(jsMap);

// let jsFil=json.map((item,index)=>{     //using filter method
//     if(item.Age>22){
//         return item;
//     }
//     return null;
// }).filter(item => item !== null)
// console.log(jsFil);

                //    (or)
                
// let jsFil2=json.filter(item => item.Age>23);     //using filter method
// console.log(jsFil2);


//Interview Question:
// function top()
//     console.log("Top function");
//     return function buttom(){
//         console.log("Buttom function"); 
//     }
// }
// let result=top();
// result()
//Solution: By using higher order function we can return function in this program.