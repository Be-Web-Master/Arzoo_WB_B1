function setRollNo(...abc){
    console.log(this.name ,"roll no ", this.rollNo, "said -> "+abc);
}

const student = {
    name: "aastha",
    rollNo: 21
}

// const callBind = setRollNo.bind(student,"hi")
// callBind();

Function.prototype.myBind = function(bindObj, ...args){
    let getRollNo = this;
    return function(){
        // here you can add polyfill of call
        getRollNo.call(bindObj,...args)
    }  
}

const callBind = setRollNo.myBind(student,"hi");
callBind();
console.log(student);