const svgRender = require("./lib/renderers.js");
const allColors = require("./lib/CSS_colors.js").allColors; //I put the list of all colors in a separate file for less clutter in index.js
const inquirer = require("inquirer");
const fs = require("fs");

const shapeChoiceArray = ["Circle", "Triangle", "Square"];
const hexValidate = /[\da-fA-F]{6}/;

const promptQuestions = [
  {
    message:
      "Please choose a color for your logo background.\nThe color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the value in the form '#ffffff'.\nIf a transparent background is desired, please leave this entry blank:",
    type: "input",
    name: "backGroundColorChoice",
    validate: (ans) => {
      //This validates that the color typed is a valid CSS color name or a # symbol
      ans = ans.toLowerCase();
      if (allColors.includes(ans) || hexValidate.test(ans) || ans === "") {
        return true;
      } else {
        return "Please enter a valid color name or hex value in the form #ffffff, or leave this entry blank for a transparent background";
      }
    },
  },
  {
    message: "Please choose a shape for your logo:",
    type: "list",
    choices: shapeChoiceArray,
    name: "shapeChoice",
  },
  {
    message:
      "Please choose a color for the shape in your logo. The color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the value in the form '#ffffff':",
    type: "input",
    name: "shapeColor",
    validate: (ans) => {
      //This validates that the color typed is a valid CSS color name or a # symbol
      ans = ans.toLowerCase();
      if (allColors.includes(ans) || hexValidate.test(ans)) {
        return true;
      } else {
        return "Please enter a valid color name or hex value in the form #ffffff";
      }
    },
  },
  {
    message:
      "Please enter the text for your logo. Up to 3 characters will be accepted:",
    type: "input",
    name: "logoText",
    validate: (ans) => {
      //This validates that the color typed is a valid CSS color name or a # symbol
      ans = ans.toLowerCase();
      if (ans.length <= 3) {
        return true;
      } else {
        return "Please enter 3 characters or less";
      }
    },
  },
  {
    message:
      "Please choose a color for the text in your logo. The color can be entered as a standard CSS color name or, if a specific hex value is desired, please enter the value in the form '#ffffff'",
    type: "input",
    name: "logoTextColor",
    validate: (ans) => {
      //This validates that the color typed is a valid CSS color name or a # symbol
      ans = ans.toLowerCase();
      if (allColors.includes(ans) || hexValidate.test(ans)) {
        return true;
      } else {
        return "Please enter a valid color name or hex value in the form #ffffff";
      }
    },
  },
  // {
  //   message:
  //     "Please enter the hex value for your desired color in the format 'ffffff':",
  //   type: "input",
  //   name: "textHexColor",
  // },
];

function init() {
  //These are two convenience variables used for building the svg

  console.log(
    "\nWelcome to the Logo Generator!\n This program will guide you through the process of creating a quick and basic logo. Please answer the following prompts to get started:\n"
  );
  inquirer.prompt(promptQuestions).then((answers) => {
    const imageOpen =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n';
    const imageClose = "</svg>";
    let svgString = imageOpen;

    // console.log(answers);
    //Checks if the user entered a background color and, if so, makes the background
    if (answers.backGroundColorChoice !== "") {
      svgString += new svgRender.BackgroundFill(
        answers.backGroundColorChoice
      ).render();
    }

    switch (answers.shapeChoice) {
      case "Circle":
        svgString += new svgRender.Circle(answers.shapeColor).render();
        break;
      case "Triangle":
        svgString += new svgRender.Triangle(answers.shapeColor).render();
        break;
      case "Square":
        svgString += new svgRender.Square(answers.shapeColor).render();
        break;
      default:
        console.log("I don't know how you were able to choose nothing");
    }

    svgString += new svgRender.Text(
      answers.logoTextColor,
      answers.logoText
    ).render();

    svgString += imageClose;
    // console.log(svgString);
    fs.writeFile("logo.svg", svgString, (err) => {
      err ? console.error(err) : console.log("Generated logo.svg");
    });
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
