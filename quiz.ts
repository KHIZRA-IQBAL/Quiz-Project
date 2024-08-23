#! /usr/bin/env node
import inquirer from "inquirer";

 const quiz:{
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string;
}=await inquirer.prompt([{
    name:'question_1',
    type:'list',
    message:' Which of the following is NOT a valid TypeScript data type?',
    choices:["A. void","B. any","C. dynamic","D. tuple"]
},{
    name:'question_2',
    type:'list',
    message:' Which of the following is used for strict checking ?',
    choices:["A. ==","B. ===","C. !==","D. ="]
},{
    name:'question_3',
    type:'list',
    message:' which operator is used for string concatenation in typescript?',
    choices:["+","-","--","++"]
},{
    name:'question_4',
    type:'list',
    message:' which method of inquirer is used to start the prompt interface and receive  user input',
    choices:["A. start()","B.prompt() ","C.init() ","D.run() "]
},{
    name:'question_5',
    type:'list',
    message:'In which  symbol is used to terminate a statement?',
    choices:["_",", "," *"," ;",":"]
}])

let score:number=0;

switch(quiz.question_1){
    case "C. dynamic":
        console.log( '1.Correct');
        ++score;
        break;
        default:
            console.log('1. incorrect');
}
switch(quiz.question_2){
    case "B. ===":
        console.log( '2.Correct');
        ++score;
        break;
        default:
            console.log('2. incorrect');
}
switch(quiz.question_3){
    case "+":
        console.log( '3.Correct');
        ++score;
        break;
        default:
            console.log('3. incorrect');
}
switch(quiz.question_4){
    case "B.prompt() ":
        console.log( '4.Correct');
        ++score;
        break;
        default:
            console.log('4. incorrect');
}
switch(quiz.question_5){
    case " ;":
        console.log( '5.Correct');
        ++score;
        break;
        default:
            console.log('5. incorrect');
}

console.log(`your score : ${score}`);

