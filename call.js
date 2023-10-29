function setRollNo(...abc){
    console.log(this.name, "roll no.",this.rollNo,"says-> "+abc);
}

const student = {
    name: "Arzoo",
    rollNo: 46
}

// setRollNo.call(student,"hi");

Function.prototype.myCall = function(callObj, ...args){
    callObj.getRollNo = this;
    const res = callObj.getRollNo(...args);
    delete callObj.getRollNo;
    return res;
}
setRollNo.myCall(student,"hi");
console.log(student);