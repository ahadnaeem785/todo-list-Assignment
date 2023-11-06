#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.textSync("To Do List")
console.log(figlet.textSync("To Do List"));
let checktask:string[]=[
    // "I have to complete my college projects in 3 days.",
    // "I have to visit library at the weekend.",
    // "I have to trim my hair and beard on sunday",
    // "I have to take my family to picnic on next week."
]
while(true){
let options=await inquirer.prompt([{
    name:"select",
    type:"list",
    message:chalk.cyan("Select Option: "),
    choices:["Check Tasks","Edit Tasks","Delete Tasks","Exit"]
}])
if(options.select=="Check Tasks"){
    console.log("Your written tasks are following : ")
    console.log(checktask);
    continue    
}else if(options.select=="Delete Tasks"){
    let selecttask=await inquirer.prompt([{
        name:"delete",
        type:"list",
        message:chalk.cyan("Which task do you want to delete?"),
        choices:checktask
    }])

    let index = checktask.indexOf(selecttask.delete);
    checktask.splice(index,1)
    console.log(checktask);
    continue
    
}else if(options.select=="Edit Tasks"){
    let edittask=await inquirer.prompt([{
        name:"edit",
        type:"string",
        message:chalk.cyan("Edit Your Task:")
    }])
    checktask.push(edittask.edit)
    console.log(checktask);
    continue   
}else if(options.select=="Exit"){
    console.log(chalk.green.bold.italic("Thanks for the use!"));
    
}
    break
}