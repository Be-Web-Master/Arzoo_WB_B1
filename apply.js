function setRollNo(...abc){
    console.log(this.name, "roll no.",this.rollNo,"says-> "+abc);
}

const student = {
    name: "Arzoo",
    rollNo: 46
}

// setRollNo.apply(student,["hi"]);

Function.prototype.myApply = function(applyObj, args){
    applyObj.getRollNo = this;
    const res = applyObj.getRollNo(...args);
    delete applyObj.getRollNo;
    return res;
}
setRollNo.myApply(student,["hi"]);
console.log(student);