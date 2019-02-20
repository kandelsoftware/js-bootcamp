//lexical scope 
//Global Scope 
// Local scope

let varOne = 'varone';
if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
}
console.log(varTwo);

if (true) {
    let varThree = " varThree";
}