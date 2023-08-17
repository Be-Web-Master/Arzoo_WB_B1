function arrGen(num){
    let outputArr =[];
    for(let i=0;i<=num;i++){
        outputArr.push(Math.floor(Math.random()*100));
    }
    return outputArr;
}
const age = arrGen(5);
console.log(age);
function calTotalTicketPrice(age){
    let total =0;
    let cost =0;
    if(age<12){
        cost = 5;
        total+=cost;
    }
    else if(age>=12 && age>=17){
        cost=10;
        total+=cost;
    }
    else if(age>=18 && age>=59){
        cost = 15;
        total+=cost;
    }
    else if(age>=60){
        cost = 8;
        total+=cost
    }
    console.log(total)
}
calTotalTicketPrice(age);