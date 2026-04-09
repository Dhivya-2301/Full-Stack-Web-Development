let a = 10;
a=5;
console.log("While using let variable the value declared for a is changed:",a);

const b=8;
console.log("While using const variable the value of b is unchanged:",b)

var c ="Hello"
c="World"
console.log(c)

let i=2;
var j="2";
if(i==j){
    console.log("True");
}
let t = 2;
let d = 2;
if(t===d){
    console.log("False");
}


document.body.innerText = "Hello ";
setTimeout(() =>{
    document.body.innerText = "Hello World";

},2000);
