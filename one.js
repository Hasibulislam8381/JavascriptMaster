var myArray=[];
var i=0;
while(i<=4){
    myArray.push(i);
    i++;
}
console.log(myArray);
var ourarray = [9,10,11,12];
var total = 0;

for(var i=0;i<ourarray.length;i++){
    total+=ourarray[i];
}
console.log(total);
function multyAll(arr){
    var product=1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number":"0176512341",
        "Likes":["Pizza","coding","Brownie points"]
    },
    {
        "firstName":"Junayed",
        "lastName":"Hossain",
        "number":"0176513456",
        "Likes":["Burger","coding","Pet"]
    },
    {
        "firstName":"Luna",
        "lastName":"Ahmed",
        "number":"0190512341",
        "Likes":["Biriyani","coding","Brownie points"]
    },
    {
        "firstName":"Safayet",
        "lastName":"Iqbal",
        "number":"0189012341",
        "Likes":["RIce","coding","Brownie points"]
    }
];
//joss akta jinis sikhlam
function lookUpProfile(name,prop){
    for(i=0;i<contacts.length;i++){
       if(name === contacts[i].firstName){
         return contacts[i][prop] || "No such property";
       }
    }
    return "no such contact";
}
var data = lookUpProfile("Akira","Likes");
console.log(data);


//random function
function randomFraction(){
return Math.random();
}
console.log(randomFraction())
//random number between 0-9
function randomWhole(){
    return Math.floor(Math.random()*10);
}
console.log(randomWhole());

function convertToInteger(str){
    return parseInt(str);
}

console.log(convertToInteger("56"));

function convertToInteger2(str){
   return parseInt(str,2);
}
console.log(convertToInteger2(1100));

function checkNum(num){
  return num>0? "positive":num<0?"negative":"zero";
}
console.log(checkNum(-3));

var magic = () => new Date();
console.log(magic);

var myCon  = (arr1,arr2)=>arr1.concat(arr2);
console.log(myCon([1,2,3],[1,6]));

const realArray = [1,2,4,5,23.6,-3];

const squareList=(arr) =>{
    const squaredInteger = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return squaredInteger;
}

const superList = squareList(realArray);
console.log(superList);

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2=arr1;
    arr1[0]='potato';
})();
console.log(arr2);

//average tempareture
// const AVG_TEMPERATURE ={
//     today:77.5,
//     tomorrow: 79
// };
// function getTempertomorrw(avg){
//     "use strict";
//     const {tomorrow : temp } = avg;
//     return temp;
// }
// console.log(getTempertomorrw(AVG_TEMPERATURE));

const AVG_TEM = {
    today : 76.67,
    tomorrow : 77,
}
function getTem(Avg){
    const {today:temp } =Avg;
    return temp;
}

console.log(getTem(AVG_TEM));
const source = [1,34,5,12,46,7,89,2];
function removeFirstTwo(list){
    const [ , ,...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


