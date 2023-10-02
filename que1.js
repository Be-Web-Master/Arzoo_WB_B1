// Convert the capital character to lowercase and lowercase character to uppercase given string = "WebMaster" output - "wEBmASTER" function toggleEachCharacter(string) - this function will return the converted string
let str ="WebMaster"
function toggleEachCharacter(str){
 for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i)>=97 || str.charCodeAt(i)<=122){
        str.charCodeAt(i) -= 32
    }else if(str.charCodeAt(i)>=65 || str.charCodeAt(i)<=90){
        str.charCodeAt(i) += 32
    }
 }
 console.log(str)
}
toggleEachCharacter(str)