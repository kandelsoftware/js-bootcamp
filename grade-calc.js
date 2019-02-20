let gradecalculator = function (studentscore, total) {
    scoreInPercentage = (studentscore / total) * 100;
    let letterGrade;

    if (scoreInPercentage >= 90) {
        letterGrade = 'A';
    } else if (scoreInPercentage >= 80) {
        letterGrade = 'B';

    } else if (scoreInPercentage >= 70) {
        letterGrade = 'C';

    } else if (scoreInPercentage >= 60) {
        letterGrade = 'D';

    } else {
        console.log(`Try hard net time.`);

    }
    return console.log(`You got a  grade ${letterGrade}  with  ${scoreInPercentage}%`);

};

gradecalculator(19, 20);