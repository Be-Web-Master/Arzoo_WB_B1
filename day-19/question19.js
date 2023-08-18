// 19. Write a program to check if a given year is a leap year or not.

function checkLeapYear(year){
    if((year %4===0 && year%100!==0)||year%400===0){
        console.log(`${year}`+ "-> Leap Year")
    }else{
        console.log(`${year}`+ "-> Not a Leap Year")
    }
}
checkLeapYear(2100);