const Shapes = require("./lib/shapes.js");
const allColors = require("./lib/CSS_colors.js").allColors; //I put the list of all colors in a separate file for less clutter in index.js
const inquirer = require("inquirer");

const shapeChoiceArray = ["Circle", "Triangle", "Square"];

//TODO: USE THE "WHEN" PROPERTY TO MAKE THE HEX COLOR PROMPTS ONLY APPEAR IF THE USER CHOOSES TO ENTER A HEX COLOR
//TODO: MAKE ALL OF THE COLORS ONLY LOWERCASE SO THAT THE VALIDATION ISN'T CASE SENSITIVE
const promptQuestions = [
  {
    message: "Please choose a shape for your logo:",
    type: "list",
    choices: shapeChoiceArray,
    name: "shapeChoice",
  },
  {
    message:
      "Please choose a color for the shape in your logo. The color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the symbol'#':",
    type: "input",
    name: "shapeColor",
    validate: (ans) => {
      if (allColors.includes(ans) || ans === "#") {
        return true;
      } else {
        return "Please enter a valid color name or '#' to enter a hex value.";
      }
    },
  },
  {
    message:
      "Please enter the hex value for your desired color in the format 'ffffff':",
    type: "input",
    name: "shapeHexColor",
    when: (ans) => ans.shapeColor === "#",
  },
  {
    message:
      "Please enter the text for your logo. Keep in mind that long entries may not fit in the logo:",
    type: "input",
    name: "logoText",
  },
  {
    message:
      "Please choose a color for the text in your logo. The color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the symbol'#'",
    type: "input",
    name: "logoTextColor",
  },
  {
    message:
      "Please enter the hex value for your desired color in the format 'ffffff':",
    type: "input",
    name: "textHexColor",
  },
];

function init() {
  console.log(
    "\n\n\nWelcome to the Logo Generator!\n This program will guide you through the process of creating a quick and basic logo. Please answer the following prompts to get started:\n\n"
  );
  inquirer.prompt(promptQuestions).then((answers) => {
    console.log(answers);
  });
}

//THERE MAYBE SOME KIND OF ISSUE WITHTHE INQUIRER VERSION THAT'S IN THE PACKAGE.JSON FILE, IF SO TRY THE ONE FROM THE ACTIVITIES
//todo finish circle class. Give it a render function that will write the shape into an svg format <circle>
//do the same for triangle and square, but they are polygons
//create the prompts to choose the shapes and colors(maybe do this first)
//find list of all the color wrods for CSS
//create the prompt for the text that will be displayed and the color of the text
//decide on font sizes
init();

// function promptUser() {
//   inquirer.prompt({
//     message: "Please enter your email",
//     name: "email",
//     type: "list",
//     choices: shapeChoiceArray,
//     default: () => {},
//     validate: function (email) {
//       valid = email == "Circle";

//       if (valid) {
//         console.log("Great job");
//         return true;
//       } else {
//         console.log(".  Please enter a valid email");
//         return false;
//       }
//     },
//   });
// }

// promptUser();
