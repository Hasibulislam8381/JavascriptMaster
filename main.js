
/*Data Types:
undefined, null, boolean,string,symbol,number,object*/
var a;
var b = 2;

a = 8;
b=a;
console.log(a);
console.log(b);
var str = "This is my first string\n";
str+="This is my second string";
console.log(str);
var firstName = "Hasibul Islam";
var len = firstName[6];
var len1 = firstName[firstName.length-1];
console.log(len);
console.log(len1);

//word game
function word(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    result+="The "+myAdjective+myNoun+myVerb+" to the store "+myAdverb;
    return result;
}
var result = word("dog","big "," ran","quickly");
var result1 = word("bike","slow "," flew","slowly");
console.log(result);
console.log(result1);
//array
var ourArray = [["Hasibul Islam",89],["jhon",34]];
console.log(ourArray);
var arr = ["Hasibul","Islam","Himel"];
arr.unshift("Md");//shift korle array er 0 index er element delete hobe
//pop korle array er last element delete hobe
//push korle array er last a akta element add hobe
//unshift korle array er 1st a akta element add hobe
console.log(arr);
//function
function hello(){
    console.log("Hello world");
}
hello();
function hi(){
    console.log("Hi siri");
}
hi();
//function a argument passing
function subs(a,b){
    var result;
    result=a-b;
    console.log(result);
}
subs(29,9);
//global variable
var global=10;

function one(){
    Opssglobal=5;
}
function two(){
    var output ="";
    if(typeof global!="undefined")
    {
        output+="Myglobal "+global+"\n";
    }
    if(typeof Opssglobal!="undefined"){
        output+="Oppsglobal "+Opssglobal;
    }
    console.log(output);
}
one();
two();
//array function
function minusSevel(num){
    return num-7;
}
console.log(minusSevel(10));

function arrayFun(arr,item){
    arr.push(item);
    return arr.shift();

}
var testArr = [1,2,3,4,5];
console.log(JSON.stringify(testArr));
console.log(arrayFun(testArr,6));
console.log(JSON.stringify(testArr));
//return a boolean result in a function

function isLess(a,b)
{
    return a<b;
}
console.log(isLess(100,15));