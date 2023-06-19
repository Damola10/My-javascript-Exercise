let now = new  Date();
now;

let jan01_1970 = new Date(0)
jan01_1970; //

let Dec31_1969 = new Date(-(24) * 3600 * 1000);
Dec31_1969 

// new Date(year, month, date, hours, minutes, seconds, ms);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

let birthday = new Date(`1993-6-5`);
birthday;
