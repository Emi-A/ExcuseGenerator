


window.onload = function (){

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let arr1= who[Math.round(Math.random() * (who.length - 1))];
let arr2= action[Math.round(Math.random() * (action.length - 1))];
let arr3= what[Math.round(Math.random() * (what.length - 1))];
let arr4= when[Math.round(Math.random() * (when.length - 1))];

let respuesta = arr1 + " " + arr2 + " " + arr3 + " " + arr4 ;

document.querySelector("#excuse").innerHTML=respuesta;

};