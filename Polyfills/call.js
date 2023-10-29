function setRollNo(...abc){
    console.log(this.name ,"roll no ", this.rollNo, "said -> "+abc);
}

const student = {
    name: "aastha",
    rollNo: 21
}

// setRollNo.call(student,"hi")

Function.prototype.myCall = function(callObj , ...args){
    callObj.getRollNo = this;
    const output = callObj.getRollNo(...args);
    delete callObj.getRollNo;
    return output;
}

setRollNo.myCall(student,"hi")
console.log(student);