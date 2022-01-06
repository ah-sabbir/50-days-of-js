const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    let date1 = new Date(dateText1);
    let date2 = new Date(dateText2);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime/DAY_IN_MILLISECONDS);
    return diffDays;
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
