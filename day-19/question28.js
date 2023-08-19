// 28. Given a list of 8 individuals with their names and ages, please perform the following tasks:
// Identify all the persons who are aged more than 60 using filter.
// Sort the names in ascending order based on their ages.
// Determine the individuals who are eligible to vote (age should be above 40).

let persons = [
    { name: 'John', age: 45 },
    { name: 'Mary', age: 72 },
    { name: 'Robert', age: 28 },
    { name: 'Elizabeth', age: 59 },
    { name: 'William', age: 67 },
    { name: 'Patricia', age: 51 },
    { name: 'Michael', age: 75 },
    { name: 'Jennifer', age: 32 }
];
let agedPersons, areEligible;
for(let i=0;i<persons.length;i++){
    
    agedPersons = persons.filter((i)=>{
        if(i.age>60){
            return i;
        }
    })
    areEligible = persons.filter((i)=>{
        if(i.age>=40){
            return i;
        }
    })
    
}
console.log(agedPersons)
console.log(areEligible)