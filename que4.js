// Count the frequency of each Character in a string
// const string = "WebMaster wEBmasTer Best"
// function getFrequency(string) - this function will return an object containing frequency of each character, lowercase and uppercase of a character considered as single character
// output
// { w : 2
// e : 5
// b : 3
// m : 2
// a : 2
// s : 3
// t : 3
// r : 2
// }

let str = "WebMaster wEBmaster Best"
str = str.toLowerCase();
console.log(str)
let obj ={}, count=0;
function getFrequency(str){
for(let i=0;i<str.length;i++){
    if(Object.keys(obj).includes(str[i])){
        Object.defineProperty(obj,str[i],{
            value: 0,
            writable:true,
        })
    }else{
        Object.defineProperty(obj,str[i],{
            value: count++,
            writable:true,
        })
    }
}
console.log(obj)
}
getFrequency(str)