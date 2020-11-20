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

//UC 7.a(i) Use Array.foreach to calculate total emp wage
let totalEmpWage1 = 0;
empDailyHoursAndWageArr.forEach(function (obj) {
    totalEmpWage1 += obj.dailyWage;
});
console.log("\nUC 7.a Total Wage: " + totalEmpWage1);

//UC 7.a (ii) Use Array.reduce method to calculate total emp wage
function sum(totalWage, obj) {
    return totalWage + obj.dailyWage;
}

//UC 7.b show the day along with daily wage using Array.map function
let dayCounter = 0;
function MapDayWithWage(obj) {
    ++dayCounter;
    return dayCounter + " - " + obj.dailyWage;
}
let mapDayWithWageArr = empDailyHoursAndWageArr.map(MapDayWithWage);
console.log("UC 7.b Day with wage");
console.log(mapDayWithWageArr);

//UC 7.c show days when full time wage was earned
function CheckIfFullTimeWage(dayAndWage) {
    return dayAndWage.includes("160");
}
let fullTimeWageArr = mapDayWithWageArr.filter(CheckIfFullTimeWage);
console.log("UC 7.c Days when full time wage was earned")
console.log(fullTimeWageArr);

//UC 7.d find the first occurence when full time wage was used
console.log("UC 7.d First day when when full time wage was earned");
console.log(mapDayWithWageArr.find(CheckIfFullTimeWage));

//UC 7.e Check if every element of full time wage is truly holding full time wage
console.log("UC 7.e Check if fullTimeWageArr is truly holding full time wage");
console.log(fullTimeWageArr.every(CheckIfFullTimeWage));

//UC 7.f Check if there is any part time wage
function CheckIfPartTimeWage(dayAndWage) {
    return dayAndWage.includes("80");
}
console.log("UC 7.f Check of any part time wage was earned or not");
console.log(mapDayWithWageArr.some(CheckIfPartTimeWage));

// UC 7.g Find the number of days employee worked
function WorkingDays(countOfWorkingDays, obj) {
    if (obj.dailyWage > 0) {
        countOfWorkingDays++;
    }
    return countOfWorkingDays;
}
let daysEmpWorked = empDailyHoursAndWageArr.reduce(WorkingDays, 0);
console.log("UC 7.g Number of days employee worked: " + daysEmpWorked);
