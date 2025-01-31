import inquirer from "inquirer";
const currency:any = {
    USD: 1, //DOLLAR
    TRY: 32.03,
    PKR: 275.15,
    AUD: 1.513,
    AZN: 1.70,
    BHD: 0.376,
    CAD: 1.35,
    INR: 83.27,
}
let userAnswer = await inquirer.prompt([
    {message:"Enter from currency",
    name:"from",
    type:"list",
    choices:["USD","TRY","PKR","AUD","AZN","BHD","CAD","INR"]
},{
name:"to",
message:"Enter to currency",
type:"list",
choices:["USD","TRY","PKR","AUD","AZN","BHD","CAD","INR"]
},{
    name:"amount",
    message:"Enter your amount.",
    type:"number"
}]
)
console.log(userAnswer);
let fromAmount = currency[userAnswer.from];
let toAmount =  currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedamount = baseAmount * toAmount;
console.log(convertedamount);