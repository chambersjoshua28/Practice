var myWorkOuts = 15;

var firstWorkOut = "Bench"; 
var lastWorkOut = "Legs"; 

var numberOfReps = 5; 

console.log('Hello World!');

console.log (5 +3); 
console.log (2-1);
console.log (4 * 4);

console.log (myWorkOuts - 10); 
console.log (myWorkOuts = numberOfReps); 

var ageRequiredToLift = 20;
var currentAge = 18; 
var canPersonLift = currentAge >= ageRequiredToLift; 
if (canPersonLift) {
} else {
    console.log('This person can lift'); 
}

var firstCar= 'Slimer';

if (firstCar == 'Slimer') {
    console.log('Hello, Slimer!');
}

var costOfCar = 2;

if (costOfCar < 2) {
    console.log('I will buy 1 car'); 
} else if (costOfCar < 4) {
    console.log('I will buy only 1 car');
} else {
    console.log('No, I am good!'); 
}

var grade = 'B';
  
switch (grade) {
    case 'A':
        console.log('90-100');
        break;
       case 'B': 
       console.log('80-89');
       break;
       case 'C': 
       console.log('70-79');
       break;
       default:
        console.log('0-69');
}
 
for (let i = 0; i < 8; i++) {
    console.log(i); 
}
console.log('whatever is next'); 

for (let i = 0; i < 20; i++) {
    if( i % 2==0){
        console.log( i);
    }
    }

    let names = ['Josh', 'Mark', 'Roy']; 
    for (let i = 0; i < names.length; i++){
        console.log(names[i]); 
    }

    let a = 2;

    while(a < 10) {
        console.log(a);
    }
