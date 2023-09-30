// // 1. var,let,const **********************************

// // var a="pawan";
// // var a="sharma";
// // console.log(a);

// // let a="pawan";
// // a="sharma";
// // console.log(a);

// // const a="pawan";
// // // a="sharma";
// // console.log(a);

// //2. Arrow Functions **************************************

// // function sum(){
// //     console.log("hello world");
// // }
// // sum();


// // let fun = (num) => num*3;

// // console.log(fun(3));

// // let sum2=(a,b)=>{
// //     return a+b;
// // }
// // console.log(sum2(3,9));

// // let str=()=>console.log("pawan iit ism");

// // str();

// //3. Export and Import (modules)   *******************************

// // import {fun, num as da} from "./sell.js";
// // import {num} from "./sell.js";

// import * as bundle from "./sell.js";


// // console.log(fun());
// // console.log(da);

// console.log(bundle.fun());
// console.log(bundle.num);

// import hell from "./customer.js";
// console.log(hell());


//4 Class and Object and Inheritance *********************

class Customer{


    constructor(n){
        this.name=n;
    }

    age=21;

    buy =() => {
        console.log("class and object in js");
    }
}

// let customer1 = new Customer("react js");
// console.log(customer1)

// customer1.buy()

class GuestCustomer extends Customer{

    hello(){
        console.log("hello coding");
    }
}

let customer2=new GuestCustomer("iit-ism");
console.log(customer2);
customer2.buy();
customer2.hello();