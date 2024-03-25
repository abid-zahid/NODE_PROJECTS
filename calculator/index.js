#! /usr/bin/env node
// #! also called shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number.", type: "number", name: "firstNumber" },
    { message: "Enter second number.", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation.",
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Multiply", "Divide"],
    },
]);
let ans = 0;
switch (answer.operator) {
    case "Add":
        ans = answer.firstNumber + answer.secondNumber;
        break;
    case "Sub":
        ans = answer.firstNumber - answer.secondNumber;
        break;
    case "Multiply":
        ans = answer.firstNumber * answer.secondNumber;
        break;
    case "Divide":
        ans = answer.firstNumber / answer.secondNumber;
        break;
}
console.log("Your answer is:" + ans);
