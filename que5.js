 const peoples = [
{ name:"a", age:21 },
{ name:"b", age:20 },
{ name:"c", age:22 },
{ name:"d", age:21 },
{ name:"e", age:22 },
{ name:"f", age:22 }
];

const res ={};
peoples.map((obj)=>{
if(res[obj.age]){
    res[obj.age] = [...res[obj.age],obj]
}else{
    res[obj.age]=[obj]
}
})
console.log({res})