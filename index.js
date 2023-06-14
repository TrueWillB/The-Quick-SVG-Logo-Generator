const Shapes = require("./lib/shapes.js");
const allColors = require("./lib/CSS_colors.js").allColors; //I put the list of all colors in a separate file for less clutter in index.js
const inquirer = require("inquirer");

const shapeChoiceArray = ["Circle", "Triangle", "Square"];

//I decided to just use an object to store all of the prompts in order to make it easier to address all of the individual questions
const promptQuestions = {
  chooseShape: {
    message: "Please choose a shape for your logo:",
    type: "list",
    choices: shapeChoiceArray,
    name: "shapeChoice",
  },
  chooseShapeColor: {
    message:
      "Please choose a color for the shape in your logo. The color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the symbol'#':",
    type: "input",
    name: "shapeColor",
  },
  enterShapeHexColor: {
    message:
      "Please enter the hex value for your desired color in the format 'ffffff':",
    type: "input",
    name: "shapeHexColor",
  },
  enterLogoText: {
    message:
      "Please enter the text for your logo. Keep in mind that long entries may not fit in the logo:",
    type: "input",
    name: "logoText",
  },
  chooseLogoTextColor: {
    message:
      "Please choose a color for the text in your logo. The color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the symbol'#'",
    type: "input",
    name: "logoTextColor",
  },
  enterTextHexColor: {
    message:
      "Please enter the hex value for your desired color in the format 'ffffff':",
    type: "input",
    name: "textHexColor",
  },
};

function init() {
  console.log(
    "\n\n\nWelcome to the Logo Generator!\n This program will guide you through the process of creating a quick and basic logo. Please answer the following prompts to get started:\n\n"
  );
}

//THERE MAYBE SOME KIND OF ISSUE WITHTHE INQUIRER VERSION THAT'S IN THE PACKAGE.JSON FILE, IF SO TRY THE ONE FROM THE ACTIVITIES
//todo finish circle class. Give it a render function that will write the shape into an svg format <circle>
//do the same for triangle and square, but they are polygons
//create the prompts to choose the shapes and colors(maybe do this first)
//find list of all the color wrods for CSS
//create the prompt for the text that will be displayed and the color of the text
//decide on font sizes
init();
