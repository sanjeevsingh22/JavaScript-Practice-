// let modeBtn= document.querySelector("#mode");
// let currMode="light";//dark
// let body =document.querySelector("body");
// modeBtn.addEventListener("click", ()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
// else{
//     currMode="light";
//     body.classList.add("light");
//     body.classList.remove("dark");
// }
// console.log(currMode);
// });

// const employee={
//    calcTax(){
//        console.log("tax rate is 10%");
//    },

// };
// const karanArjun = {
//     salary:40000,
// calcTax(){
//     console.log("tax rate 20%");
// }

// };
// karanArjun.__proto__=employee;

   
// class Car{
//     constructor(brand, mileage){
//         console.log("creating new object");
//          this.brand=brand;
//          this.mileage=mileage;
    
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
    
// }
// let audi=new Car("Audi", 10);
// console.log(audi);
// let mercedes=new Car("mercedes", 12); 
// console.log(mercedes);

// class Person{
//     constructor(){
//         this.species="homo sapiens";
//     }
//     eat(){
//         console.log("eat");

//     }
//     sleep(){
//         console.log("sleep");

//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log("solve problems,build something");
//     }

// }
// class Doctor extends Person{
//     work(){
//         console.log("treat patient");

//     }
// }
// let sanjeevObj= new Engineer();
// let p1= new Person();
// let e1= new Engineer();


// class Person{
//         constructor(name){
//             this.species="homo sapiens";
//             this.name=name;
//         }
//         eat(){
//             console.log("eat");
    
//         }
        
//     }
//     class Engineer extends Person{
//         constructor(name){
//             super(name);
//         }
//         work(){
//             console.log("solve problems,build something");
//         }
    
//     }
    
    
//     let engObj= new Engineer("Sanjeev kumar");
   