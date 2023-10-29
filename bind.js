function setRollNo(...abc){
    console.log(this.name, "roll no.",this.rollNo,"says-> "+abc);
}

const student = {
    name: "Arzoo",
    rollNo: 46
}

// const res = setRollNo.bind(student,"hi");
// res();

Function.prototype.myBind = function(bindObj, ...args){
    let getRollNo = this;
    return function(){
        getRollNo.call(bindObj, ...args);
    }
}
const res = setRollNo.myBind(student,"hi")
res();