// 20.  Write a program to reverse a given number

function reverseNumber(num){
    let rev=0;
    while(num>0){
        let rem = num % 10;
        rev = rev *10 + rem;
        num = Math.floor(num/10);
    }
    console.log(rev)
}
reverseNumber(123)