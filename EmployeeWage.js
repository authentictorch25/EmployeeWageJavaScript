const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function GetWorkingHours(empCheck) {
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

function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHoursAndWageArr = new Array();

while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 1000) % 3;
    let dailyEmpHrs = GetWorkingHours(empCheck);
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
        empDailyHoursAndWageArr.push({
            dayNum: totalWorkingDays,
            dailyHours: dailyEmpHrs,
            dailyWage: CalculateWage(dailyEmpHrs),
            toString() {
                return "\nDay: " + this.dayNum + "   Working Hours: " + this.dailyHours + "   Daily wages: " + this.dailyWage;
            }
        });
    } else {
        break;
    }
}
// UC10
console.log("\nUC10 store daily info in array using js objects");
console.log(empDailyHoursAndWageArr);

//UC 11.a Calculate total hours and wage using arrow functions
let totalHours = empDailyHoursAndWageArr
    .filter(obj => obj.dailyWage > 0)
    .reduce((totalHours, obj) => totalHours += obj.dailyHours, 0);
let totalWage = empDailyHoursAndWageArr
    .filter(obj => obj.dailyHours > 0)
    .reduce((totalWage, obj) => totalWage += obj.dailyWage, 0);
console.log("\nUC 11.a Calculate total hours and wage using arrow functions");
console.log("Total Hours: " + totalHours + "   Total Wage:" + totalWage);

//UC 11.b Show the full working days using foreach
console.log("UC 11.b Show the full working days");
empDailyHoursAndWageArr.filter(obj => obj.dailyHours == 8).forEach(obj => process.stdout.write(obj.toString()));

//UC 11.c Show Part working days using Map by reducing to String Array
let partWorkingDays = empDailyHoursAndWageArr
    .filter(obj => obj.dailyHours == 4)
    .map(obj => obj.toString());
console.log("\nUC 11.b Show part time working days");
console.log(partWorkingDays);

//UC 11.d Show No working days using Map by reducing to String Array
let noWorkingDays = empDailyHoursAndWageArr
    .filter(obj => obj.dailyHours == 0)
    .map(obj => obj.toString());
console.log("\nUC 11.b Show no working days");
console.log(noWorkingDays);