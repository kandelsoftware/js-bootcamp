let add = function (a, b) {
    return a + b;
};
results = add(10, 4);
console.log(results);

let getScoreText = function (name = 'Anonymous', score = 0) {
    return ' Name:' + name + '-Score' + score;
};
let scoreText = getScoreText(undefined, 99);
console.log(scoreText);


// Challenges area
// total, tippercent

tipCalculator = function (price, tippercent) {
    tip = (price / 100) * tippercent;
    console.log(tip);
};

tipCalculator(100, 25);