// 26.  Write a program to swap the first and last digits of a number.
function swapNumbers(num){
    let newNum="", temp="";
    for(let i=0;i<num.length;i++){
        if(i === 0){
            temp = num[i];
        } 
        else if(i === num.length-1){
            newNum = newNum + temp;
            newNum = num[i] + newNum;
            
        }
        else {
             newNum = newNum + num[i]
        }
    }
console.log(newNum);
}
swapNumbers("123")