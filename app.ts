#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 9999;
let myPin = 5050;

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your pin",
            type: "number",
        },
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code!!!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["withdraw", "deposit cash", "check balance", "fast cash"],
            }
        ]);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your withdrawal amount",
                    type: "number",
                }
            ]);

            if (amountAns.amount > myBalance) {
                console.log("Insufficient funds!");
            } else {
                myBalance -= amountAns.amount;
                console.log("Withdrawal successful. Your remaining balance is: " + myBalance);
            }
        } else if (operationAns.operation === "deposit cash") {
            let depositAmountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount you want to deposit",
                    type: "number",
                }
            ]);

            myBalance += depositAmountAns.amount;
            console.log("Deposit successful. Your new balance is: " + myBalance);
        } else if (operationAns.operation === "check balance") {
            console.log("Your balance is: " + myBalance);
        } else if (operationAns.operation === "fast cash") {
            let fastCashAmountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Select fast cash amount",
                    type: "list",
                    choices: [500, 1000, 2000, 5000],
                }
            ]);

            if (fastCashAmountAns.amount > myBalance) {
                console.log("Insufficient funds!");
            } else {
                myBalance -= fastCashAmountAns.amount;
                console.log("Fast cash withdrawal successful. Your remaining balance is: " + myBalance);
            }
        }
    } else {
        console.log("Incorrect pin number");
    }


