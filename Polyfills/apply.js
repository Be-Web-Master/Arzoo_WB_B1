function setRollNo(...abc){
    console.log(this.name ,"roll no ", this.rollNo, "said -> "+abc);
}

const student = {
    name: "aastha",
    rollNo: 21
}

// setRollNo.apply(student,["hi"])

Function.prototype.myApply = function(applyObj , args){
    applyObj.getRollNo = this;
    const output = applyObj.getRollNo(...args);
    delete applyObj.getRollNo;
    return output;
}

setRollNo.myApply(student,["hi"])
console.log(student);