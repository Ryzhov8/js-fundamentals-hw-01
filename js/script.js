// task 2
console.log("Рижов");

// task 3
let a = 1249;
const b = "test word";

console.log(a);
console.log(b);

a = b;

console.log(a);
console.log(b);

// task 4

const object = {
  String: "Text",
  Number: 345,
  Boolean: true,
  Undefined: undefined,
  Null: null,
};

// task 5

const isAdult = confirm("Ви вже досягли повнолітнього віку?");

console.log(isAdult);

//  task 6
const name = "Микита";

const lastname = "Рижов";

const group = "js fundamentals";

const yearOfBirth = 2001;

const maritalStatus = "single";

console.log(typeof name);
console.log(typeof lastname);
console.log(typeof group);
console.log(typeof yearOfBirth);
console.log(typeof maritalStatus);

const nothing = null;
const lost = undefined;
console.log(typeof nothing);
console.log(typeof lost);

// task 7
const log = prompt("Введіть логін");
const mail = prompt("Введіть емейл");
const password = prompt("Введіть пароль");
alert(`Dear ${log}, your email is ${mail}, your password is ${password}`);

// task 8
secInAnHour = 60 * 60;
console.log(secInAnHour);
secInADay = secInAnHour * 25;
console.log(secInADay);
secInAMonth = secInADay * 30;
console.log(secInAMonth);
