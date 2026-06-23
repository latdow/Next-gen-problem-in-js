/* comparing ifelse statement with switch statement */
let betAge = 18;
if (betAge >= 18) {
  console.log("you are eligible to place a bet");
} else {
  console.log("you are not eligible to place a bet");
}
let betAge2 = 18;
switch (true) {
  case betAge2 >= 18:
    console.log("you are eligible to place a bet");
    break;

  default:
    console.log("you are not eligible to place a bet");

    break;
}
/*
const greet1 = (name) => {
console.log(`Hello ${name}`);
}
const greet2 = (name) => {
  return `Hello ${name}`;
} */
