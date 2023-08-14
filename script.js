// 1. List all keys of the given object

// var obj ={
//     name: "Arzoo",
//     rollNumber: 23,
//     class: 9,
//     section: "A",
//     gender: "female",
//     country: "India"
// }
// console.log(Object.keys(obj));

// 2. List all values of the given object
// var obj ={
//     name: "Arzoo",
//     rollNumber: 23,
//     class: 9,
//     section: "A",
//     gender: "female",
//     country: "India"
// }
// console.log(Object.values(obj));

// 3. List all the keys and values of the given object in the form of array

// var obj ={
//     name: "Arzoo",
//     rollNumber: 23,
//     class: 9,
//     section: "A",
//     gender: "female",
//     country: "India"
// }
// console.log(Object.entries(obj));

// 4. Merge all of these object and create a single object using object method

// const obj1 = {name:"Arzoo",gender:"female"} 
// const obj2 = {section:"A",gender:"female"} 
// const obj3 = {country:"India"} 

// console.log(Object.assign(obj1,obj2,obj3));

// 5. Create an object which have properties name and one method printStudentDetails, create another object and using .create method, add some more properties and print student details.

// const studentDetails = {
//     name: "Arzoo",
//     printStudentDetails: function(){
//         console.log(`My name is ${this.name}. Gender is ${this.gender}. RollNumber is ${this.rollno}. Section is ${this.section} `)
//     }
// }
// const me = Object.create(studentDetails);
// me.rollno = 46;
// me.gender = "female";
// me.section = "A"
// console.log(me.printStudentDetails());

// 6. Create an object with 2 properties and add 1 properties using .defineProperty() with writable true.

// const obj = {
//     name:"Arzoo",
//     status:"Graduate"
// };
// Object.defineProperty(obj,'city',{
    
//         value: "Bhopal",
//         writable: true,
    
// })

// console.log(obj)

// 7. Create an object with 2 properties and add 2 properties using .defineProperties() with writable true.

// const obj = {
//     name:"Arzoo",
//     status:"Graduate"
// };
// Object.defineProperties(obj,{
//     city:{
//         value: "Bhopal",
//         writable: true
//     },
//     state: {
//         value:"M.P.",
//         writable:true
//     }
// })
// console.log(obj)

// 8. Create an object and apply .preventExtensions and try to add properties usinf defineproperties and then remove any existing property.

//using this we can no longer can add new propwerties but can delete the existing ones.
// const obj = {
//         name:"Arzoo",
//         status:"Graduate"
// };

// Object.preventExtensions(obj)
// // Object.defineProperties(obj,{
// //     city:{
// //         value: "Bhopal",
// //         writable: true
// //     },
// //     state: {
// //         value:"M.P.",
// //         writable:true
// //     }
// // })
// delete obj.name;
// console.log(obj)

// 9. Create an object and apply .seal and try to add properties usinf defineproperties and then remove any existing property.

// using seal we can neither add new properties nor remove the existing properties but we can change the existing properties
// const obj = {
//     name:"Arzoo",
//     status:"Graduate"
// };
// Object.seal(obj)
// // Object.defineProperties(obj,{
// //     city:{
// //         value: "Bhopal",
// //         writable: true
// //     },
// //     state: {
// //         value:"M.P.",
// //         writable:true
// //     }
// // })
// delete obj.name
// console.log(obj);

// 10. Create an object and apply .freeze and try to add properties usinf defineproperties and then remove any existing property.

// using freeze we can neither add new properties nor remove the existing properties not even we can change the existing properties. it will freeze the value.
// const obj = {
//     name:"Arzoo",
//     status:"Graduate"
// };
// Object.freeze(obj)
// // Object.defineProperties(obj,{
// //     city:{
// //         value: "Bhopal",
// //         writable: true
// //     },
// //     state: {
// //         value:"M.P.",
// //         writable:true
// //     }
// // })
// delete obj.name
// console.log(obj)

