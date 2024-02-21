import inquirer from "inquirer";

type UserInput = {
  paragraph: string;
};

let userInput: UserInput = await inquirer.prompt({
  type: "input",
  name: "paragraph",
  message: "Enter Paragraph to count the Alphabets and Words",
});

let paragraphInput = userInput.paragraph;

let alphawithoutSpace = paragraphInput.replace(/\s+/g, "");

let alphaCount = alphawithoutSpace.length;

let wordArray = paragraphInput.split(" ");

let wordCount = wordArray.length;

console.log(`Total Alphabets is ${alphaCount} and words is ${wordCount}`);
