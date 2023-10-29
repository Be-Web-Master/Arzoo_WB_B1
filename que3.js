let ransomNote = "aa", magazine = "aab";
function constructRansomNote(ransomNote,magazine){
    const obj ={};
    for (const ltr of magazine) {
        obj[ltr] ? obj[ltr]++ : obj[ltr]=1;
    }
    for (const ltr of ransomNote) {
        if(!obj[ltr]) {
            return false;
        } 
        obj[ltr]--;
    }
    // console.log({obj});
    return true;
}
console.log(constructRansomNote(ransomNote,magazine));