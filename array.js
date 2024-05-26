const mySym= Symbol("key1");

const JsUser={
    name:"Sanjeev",
    "full name":"Sanjeev kumar",
    [mySym]:"myKey1",
    age:18,
    location:"gopalganj",
    email:"skrsingh86@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]


}        
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySy-m]);

// ++++++++++++++++++++++++++++++++++++++++++++++++//

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}

// const obj3=Object.assign({}, obj1,obj2,obj4);
// const obj3={...obj1, ...obj2, ...obj4};// special type method use that in js.
// console.log(obj3);


const course={
    coursename:"js in hindi",
    price:"free",
    courseInstructor:"hitesh"

}
// const {courseInstructor:instructor}=course
// console.log(instructor);

// ++++++++++++++++++ Function ++++++++++++++++++++++++++++++++++++++++++++

function  mysayName(){
console.log("Sanjeeev kumar");
}
// mysayName();

// function addTwoNumber(num1, num2){
// console.log(num1+num2);
// }

function addTwoNumber(num1, num2){
    // // let result=num1+num2;
    // // console.log("sanjeev");
    // return result;
    return num1+num2

}
const result = addTwoNumber(2,4);
// console.log("Result: ", result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter the username");
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("sanjeev"));
// console.log(loginUserMessage("sanjeev"));

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));
const user={
    username:"sanjeev kumar",
    price:299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${ anyobject.price}`);
}
// handleObject(user)
// handleObject({
    // username: "sam",
    price:399
// })
const myNewArray=[200,400,600,800]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); 
// console.log(returnSecondValue([200,300,400,500]));
let a=300
if(true) {
let  a=10
const b=20
var c=30
// console.log("Inner: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true){
const username="sanjeev"
if(username==="sanjeev"){
    const website=" youtube"
    // console.log(username + website);
}
// console.log(website);

}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++
// console.log(addone(5))
// function addone(num){
//     return num+1
// }

// const addTwo=function(num){
//     return num+2
// }
// addTwo(5)

// +++++++++++++++++++++++++Arrowfunction +++++++++++++++++++

const users = {
    username:"sanjeev",
    price:999,
    welcomeMessage:function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// users.welcomeMessage()
// users.username="sam"
// users.welcomeMessage()
//  console.log(this);

// function chai() {
    // let username="hitesh"
    // console.log(this.username);
// }
// chai()

// const chai=function (){
//     let username="hitesh"
//     console.log(this.username)
// }
// output- undefined

// const chai= ()=>{
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

const addTwo=(num1, num2)=>( num1+num2)
const addThree=(num1, num2)=>({username:"hitesh"})

// console.log(addTwo(3,4));
// console.log(addThree());

// Immediateliy Invoked Funtion Expression(IIFE)

// function chai(){
//     console.log(`db connected`);
// }
// chai();
// ((name)=>{
//     console.log(`db connected two ${name}`);
// })('hitesh')
//Null colescion operator
let val1;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = 15 ?? 10;
// console.log(val1);

//Ternary Operator
// Condition ? true :false
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("les than 80"): console.log("more than 80");