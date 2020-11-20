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
            toString(){
                return "\nDay: "+this.dayNum+"   Working Hours: "+this.dailyHours+"   Daily wages: "+this.dailyWage;
            }
        });
    } else {
        break;
    }
}
console.log("UC10 store daily info in array using js objects");
 console.log(empDailyHoursAndWageArr);
