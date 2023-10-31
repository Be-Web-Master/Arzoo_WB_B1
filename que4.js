// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

let words = ["Hello","Alaska","Dad","Peace"];

function printWords(arr){
let res=[];
let rows = ["qwertyuiop","asdfghjkl","zxcvbnm"];

for(let i =0; i<arr.length;i++){
    let word_found = false;
    for (const rows_word of rows) {
        for(let j=0;j<arr[i].length;j++){
            if(rows_word.indexOf(arr[i][j].toLowerCase()) === -1){
                word_found = false;
                break;
            }
            word_found = true;
        }
        if(word_found === true){
            res.push(arr[i])
        }
    }
}
return res;
}
console.log(printWords(words));