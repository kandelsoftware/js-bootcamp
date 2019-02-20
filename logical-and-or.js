let temp = 55;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out ');
} else if (temp <= 0 || temp >= 120) {
    console.log("do not go outside");
} else {
    console.log("do what you like");
}
let isGuestOneVegan = true;
let isGuestTwoVegan = false;


if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("only serve vegan foods ")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("server one vegan food ")
} else {
    console.log(" server from menu")
}