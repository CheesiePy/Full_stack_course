function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

let x;   
while(0){
x = getRandomNumber(15, 120)

// 18 30 60 95 {50}


// from large to small 
if(x >= 95){
    console.log("Most Valuable Grandpa !")
}else if(x >= 60){
    console.log("Please, call me sir")
}else if(x == 50){
    console.log("golden")
}else if(x >= 30){
    console.log("Aging like a fine wine arent you?")
}else if(x >= 18){
    console.log("You are still young but good to go") 
}else{
    console.log("no entry")
}

if(x == 100){
    console.log("platnom")
    break;
}

// from small to large 
if(x < 18){
    console.log("no entry")
}else if(x < 30){
    console.log("You are still young but good to go") 
}else if(x == 50){
    console.log("golden")
}else if(x < 60){
    console.log("Aging like a fine wine arent you?")
}else if(x < 95){
    console.log("Please, call me sir")
}else{
    console.log("Most Valuable Grandpa !")
}
console.log("-----------------------------")
}

let day = new Date().getDay()

switch(day){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;   
}

for(let i = 0; i <= 100; i++){
    if(!(i%2)){
        console.log(i, "\t", 100-i)
    }
} 

console.log(a%n) // 0 -> n-1





