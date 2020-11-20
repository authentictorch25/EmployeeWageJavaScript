/*UC1*/
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_A_MONTH = 20; /*UC4*/
const MAX_WORKING_DAYS = 20;/*UC5*/
const MAX_WORKING_HOURS = 160;/*UC5*/

/*let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
} else {
    console.log("Employee is PRESENT");*/

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
/*
let empHrs = 0;
for (let days = 1; days <= WORKING_DAYS_IN_A_MONTH; days++) {
    let empCheck = Math.floor(Math.random() * 100) % 3;
    empHrs += GetWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + empHrs + "\nTotal Wage: " + empWage);
*/
/*UC5
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays <= MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 1000) % 3;
    let dailyEmpHrs = GetWorkingHours(empCheck);
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
    } else {
        break;
    }
}

let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + totalEmpHrs + "\nTotal Wage: " + totalEmpWage);
*/

/*UC6*/
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWageArr = new Array();
let dailyWageMap = new Map();
let dailyHoursMap = new Map();
function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays <= MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 1000) % 3;
    let dailyEmpHrs = GetWorkingHours(empCheck);
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
        dailyWageArr.push(dailyEmpHrs*WAGE_PER_HOUR);
        dailyWageMap.set(totalWorkingDays, CalculateWage(dailyEmpHrs));
        dailyHoursMap.set(totalWorkingDays,dailyEmpHrs);
    } else {
        break;
    }
}


/*UC7.a*/
let totalEmpWage = 0;
dailyWageArr.forEach(function (dailyWage) {
    totalEmpWage += dailyWage;
});
console.log(" Total Wage: " + totalEmpWage);
/*UC7.a.2*/
function sum(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
let totalEmpWage2 = dailyWageArr.reduce(sum, 0);
console.log("UC 7.a.2 Total Wage: " + totalEmpWage2);

/*UC7.b*/

let dayCounter = 0;
function MapDayWithWage(dailyWage) {
    ++dayCounter;
    return dayCounter + " - " + dailyWage;
}
let mapDayWithWageArr = dailyWageArr.map(MapDayWithWage);
console.log("UC 7.b Day with wage");
console.log(mapDayWithWageArr);

/*UC7.c*/
function CheckIfFullTimeWage(dayAndWage) {
    return dayAndWage.includes("160");
}
let fullTimeWageArr = mapDayWithWageArr.filter(CheckIfFullTimeWage);
console.log("UC 7.c Days when full time wage was earned")
console.log(fullTimeWageArr);

/*UC7.d*/console.log("UC 7.d First day when when full time wage was earned");
console.log(mapDayWithWageArr.find(CheckIfFullTimeWage));

//*UC7.e*/
console.log("UC 7.e Check if fullTimeWageArr is truly holding full time wage");
console.log(fullTimeWageArr.every(CheckIfFullTimeWage));

/*UC7.f*/
function CheckIfPartTimeWage(dayAndWage) {
    return dayAndWage.includes("80");
}
console.log("UC 7.f Check of any part time wage was earned or not");
console.log(mapDayWithWageArr.some(CheckIfPartTimeWage));

/*UC7.g*/
function WorkingDays(countOfWorkingDays, dailyWage) {
    if (dailyWage > 0) {
        countOfWorkingDays++;
    }
    return countOfWorkingDays;
}
let daysEmpWorked = dailyWageArr.reduce(WorkingDays, 0);
console.log("UC 7.g Number of days employee worked: " + daysEmpWorked);

/*UC8*/

let totalEmpWage3 = Array.from(dailyWageMap.values()).reduce(sum, 0);
console.log("UC8 Store daily wage in map");
console.log(dailyWageMap);
console.log("Total emp wage: " + totalEmpWage3);

/*UC9.a*/
let totalEmpHours = Array.from(dailyHoursMap.values()).reduce(sum,0);
let totalEmpWage4 = dailyWageArr.filter(dailyWage=>dailyWage>0).reduce(sum,0);
console.log("\nUC 9.a Get total hours and wage using arrow functions");
console.log("Total emp wage: "+totalEmpWage4+"\nTotal Working Hours: "+totalEmpHours);

/*UC9.b*/
let mapTypeOfWorkingDay = new Map();
mapTypeOfWorkingDay.set("full_work",new Array());
mapTypeOfWorkingDay.set("part_time",new Array());
mapTypeOfWorkingDay.set("no_work",new Array());
dailyHoursMap.forEach((value,key,map)=>{
    if(value==8){
        let arr = mapTypeOfWorkingDay.get("full_work");
        arr.push(key);
        mapTypeOfWorkingDay.set("full_work",arr);
    }else if(value==4){
        let arr = mapTypeOfWorkingDay.get("part_time");
        arr.push(key);
        mapTypeOfWorkingDay.set("part_time",arr);
    }else{
        let arr = mapTypeOfWorkingDay.get("no_work");
        arr.push(key);
        mapTypeOfWorkingDay.set("no_work",arr);
    }
});
console.log("UC 9.b Show the full working, part time working and no working days");
console.log(mapTypeOfWorkingDay);

