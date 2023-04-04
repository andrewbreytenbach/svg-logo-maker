# Logo Generator CLI

A simple Node.js command-line application to generate a logo as an SVG file based on user input. Users can provide text, text color, shape, and shape color for their logo.

## Features

- Collects user input through a series of prompts
- Supports text up to three characters
- Supports color keywords and hexadecimal values for text and shape color
- Offers three shape options: circle, triangle, and square
- Generates a 300x200 pixel SVG image based on the user's input
- Saves the generated logo as an SVG file named `logo.svg`
- Uses Jest for running unit tests

## Installation

1. Clone this repository:
2. Change to the project directory:
3. Install dependencies: npm install 

## Usage

1. Run the application: node index.js
2. Follow the prompts to enter text, text color, shape, and shape color.

3. The application will generate a `logo.svg` file in the project directory.

4. Open the `logo.svg` file in a browser to view the generated logo.

## Running Tests

1. Run tests with Jest: npm test