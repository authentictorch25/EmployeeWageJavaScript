/*UC1*/
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_A_MONTH = 20; /*UC4*/
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
} else {
    console.log("Employee is PRESENT");
}
/*UC2*/
/*switch (empCheck) {
    case IS_ABSENT:
        empHrs = 0;
        break;
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        break;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);*/

/*UC3*/
function GetWorkingHours(empCheck){
    switch (empCheck) {
        case IS_ABSENT:
            return 0;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return null;
    }
}

/*UC4*/
let empHrs = 0;
for (let days = 1; days <= WORKING_DAYS_IN_A_MONTH; days++) {
    let empCheck = Math.floor(Math.random() * 100) % 3;
    empHrs += GetWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + empHrs + "\nTotal Wage: " + empWage);

