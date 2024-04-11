var customerNames= [];
customerNames.push('Josh');
customerNames.push('Matt'); 
for (let i=0; i < customerNames.length; i++){

console.log (customerNames[i]); 
}


for (name of customerNames) {
    console.log(name); 
}