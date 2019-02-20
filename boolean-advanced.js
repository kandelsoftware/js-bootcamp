
let isAccountLocked = false;
let userRole = 'admin';
if (isAccountLocked) {
    console.log("Is account  locked");
} else {
    console.log("welocme");
}

if (isAccountLocked) {
    console.log("Is account  locked");
} else if (userRole === 'admin') {
    console.log("welcome Admin");
} else {
    console.log("welcome user");

}

let tem = 4;
if (tem >= 110) {
    console.log("Go outside it is hot outside");
} else if (tem <= 32) {
    console.log(" the tempatur is freezing  outside");
} else {
    console.log(" go outside");
}
