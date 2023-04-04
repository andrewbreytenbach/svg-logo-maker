// This will import the required libraries for the app to run correctly
const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

// Function to create the SVG content and save it to a file
const createSvg = (text, textColor, shape, shapeColor) => {
    // Define the SVG content using a template literal
    // This includes the specified shape, text, and colors
    const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shape} fill="${shapeColor}" ${
      // Depending on the chosen shape, add appropriate SVG attributes
      shape === "circle"
        ? 'cx="150" cy="100" r="50"'
        : shape === "triangle"
        ? 'points="150,50 100,150 200,150"'
        : 'x="100" y="50" width="100" height="100"'
    }/>
    <text x="150" y="100" text-anchor="middle" dy=".3em" font-size="48" fill="${textColor}">${text}</text>
  </svg>
    `;

    // Write the SVG content to a file named logo.svg
  fs.writeFileSync("logo.svg", svgContent);
  
  
};


    