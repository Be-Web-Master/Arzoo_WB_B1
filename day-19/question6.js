// 6. Iterate through an array of strings using a for...in loop and capitalize the first letter of each string.
const arr = ["arzoo","aastha","anushka","sakshi"]
for (let elem of arr) {
    const first = elem.charAt(0).toUpperCase();
    const rest = elem.slice(1).toLowerCase();
    console.log(first+rest)
}