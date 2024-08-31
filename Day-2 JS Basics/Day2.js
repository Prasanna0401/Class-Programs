// alert("Hi,I am prasanna venkatesh")   //Using of alert method 

// let N =prompt("How are you?")   //Using of prompt method and prompt always consider the input as string
// console.log(N);

// let x=238,y=57;        //using of arithmetic operators
// console.log(x + y);    //Addition
// console.log(x - y);    //Subtraction
// console.log(x * y);    //Multiplication
// console.log(x / y);    //Division
// console.log(x % y);    //Modulus it means the remainder of the division
// console.log(x ** y);   //to the power of the second number

// let x=300,y=500;                 //using of logical operators
// console.log(x==500 && y==500);   //AND 
// console.log(x==300 || y==300);   //OR
// console.log(!x==500);            //NOT
// console.log(!y==300);            //NOT

// var a=32523;                       //using of var variables
// let b=93232;                       //using of let variables
// const Name="Prasanna venkatesh";   //using of const variables
// console.log(a);
// console.log(b);
// console.log(Name);

//Difference between Let and Var
//1. Scope: var is function-scoped or globally scoped and let is block-scoped
//2. Hoisting: var variables are hoisted and initialized with undefined, whereas let variables are hoisted but not initialized
//Example for var:
// console.log(z);
// var z=450         //here vaule is intialized but connot define in the coding
//Example for let:
// console.log(z);
// let z=497         //here value is not intialized and cannot define in the coding
//3. Re-declaration: var allows re-declaration and let does not allow re-declaration within the same scope
//Example for var:
// var x=349
// var x=405
// var x=948
// console.log(x);   //var allows redeclaration
//Example for let:
// let y=367
// let y=394
// console.log(y);   //let does not redeclaration
//So, after ES5 we do not use var in the javascript coding

//Types of datatypes:
// let v=16;
// let g=7.5;   //Number datatype
// let color="Blue";
// let LastName="venkatesh";   //String datatype
// let x=true;
// let y=false;   //boolean datatype
// let j=null;
// console.log(j);   //null datatype
// let b:
// console.log(b);   //undefined datatype
// let p=[393,3039,32594,5703,6069];   //array datatype
// const person={firstName:"Prasanna", lastName:"venkatesh"};   //object datatype
// const Cars=["Benz", "Volvo", "BMW"];   //array object datatype