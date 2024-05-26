// you are creating a website for your college.Create a class User with 2 properties, name &email. it also has a method called viewData() that allows user to view website data.
/* let Data ="secret information";

class User{
    constructor(name, email){
        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("data= ", Data);
    }
}

let student1= new User("sanjeev kumar", "abc@gmail.com");
let student2= new User("ankit singh","xyz@gmail.com");
let teacher1 = new User("Dean"," dean@gmail.com");
*/


// Create a new class called Admin which inherits from User.Add a new method called editData to Admin that allows it to edit website data.

/*let Data ="secret information";

class User{
    constructor(name, email){
        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("data= ", Data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="some new value";
    }
}

let student1= new User("sanjeev kumar", "abc@gmail.com");
let student2= new User("ankit singh","xyz@gmail.com");
let teacher1 = new User("Dean"," dean@gmail.com");

let admin1= new Admin("Admin", "admin@gmail.com");
*/



//  let a=10;
//  let b=20;
//  console.log("a =",a);
//  console.log("b =",b);
 
//  try{
//     console.log("a+c",a+c);

//  }catch(err){
//     console.log(err);
//  }
//  console.log("a+b =",a+b);
//  console.log("b+a =",b+a);


// const getPromise=() =>{
//     return new Promise((resolve ,reject)=>{
//         console.log("I am a Promise");
//         resolve("success");
//     });
// };
// let promise= getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("rejected",err);
// });

// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//     resolve("success");
//         }, 4000);
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//     resolve("success");
//         }, 4000);
//     })
// }
// console.log("fetching data1.....");
// let p1= asyncFunc1().then((res)=>{
//     console.log("fetching data2.....");
//  asyncFunc2().then((res)=>{});
// });




//  function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         console.log("data", dataId);
//         resolve("success");
        
//     }, 2000);
// });
    
//  }
//  //Async Await
//  (async function getAllData(){
//     console.log("getting data1"); 
//     await getData(1);
//     console.log("getting data2"); 
//     await getData(2);
//     console.log("getting data3"); 
//     await getData(3);
//     console.log("getting data4"); 
//     await getData(4);
//     console.log("getting data5"); 
//     await getData(5) })   ();
 
// // Promise Chain
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });
// // getData(1).then((res)=>{
// //     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// });
// Callback hell
//  getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
//  }
// )
 


















