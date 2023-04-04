import inquirer from "inquirer";
import fs from "fs";
import { Triangle, Circle, Square } from "./lib/shapes.js";

// Main function to run the application
async function main() {
  // Collect user input using inquirer
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: (input) => {
        return input.length <= 3 || "Please enter no more than 3 characters.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (keyword or hex value):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the shape color (keyword or hex value):",
    },
  ]);

  // Create a new shape instance based on user input
  let shape;
  switch (answers.shape) {
    case "circle":
      shape = new Circle();
      break;
    case "triangle":
      shape = new Triangle();
      break;
    case "square":
      shape = new Square();
      break;
  }

  // Set the shape color
  shape.setColor(answers.shapeColor);

  // Generate the logo SVG string
  const logoSVG = shape.renderWithText(answers.text, answers.textColor);

  // Write the logo SVG to a file
  fs.writeFileSync("logo.svg", logoSVG);

  // Notify the user that the file has been generated
  console.log("Generated logo.svg");
}

// Run the main function
main();
