let family = ["Damola", "Dolapo", "Damilola"];

for(let i=0; i < family.length; i++) {
    console.log(family[i]);
}

let phrase = "LaunchCode's LC101";

for(let i = 0; i < phrase.length - 1; i += 3) {
    console.log(phrase[i]);
}


let numbers = [32, 44, 98, 42, 33, 43, 55, 42];
let searchVal = 42; 
let i = 0;

while(i < numbers.length){
    if (numbers[i] === searchVal){
        console.log(numbers[i]);
        break;
    }
    i++
}
