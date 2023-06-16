const Renderers = require("../lib/renderers.js");

//test suite for renderers.js
describe("Renderers", () => {
  // Testing for correct output of Circle class
  describe("Circle", () => {
    it("should take a string for color and put out an svg circle in a string", () => {
      const color = "yellow";
      const circle = new Renderers.Circle(color);
      expect(circle.render()).toEqual(
        '<circle cx="50%" cy="50%" r="30%" fill="yellow" />\n'
      );
    });
  });

  describe("Triangle", () => {
    it("should take a string for color and put out an svg triangle in a string", () => {
      const color = "green";
      const circle = new Renderers.Triangle(color);
      expect(circle.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />\n'
      );
    });
  });

  describe("Square", () => {
    it("should take a string for color and put out an svg square in a string", () => {
      const color = "black";
      const circle = new Renderers.Square(color);
      expect(circle.render()).toEqual(
        '<rect x="68" y="18" width="164" height="164" r="90" fill="black" />\n'
      );
    });
  });

  describe("Text", () => {
    it("should take a string for text and a string for color and put output a text element with those properties in a string", () => {
      const color = "blue";
      const text = "test text";
      const circle = new Renderers.Text(color, text);
      expect(circle.render()).toEqual(
        '<text x="150" y="125" font-size="50" font-family="Brush Script MT" text-anchor="middle" fill="blue">test text</text>\n'
      );
    });
  });

  describe("BackgroundFill", () => {
    it("should take a string for color and put out an svg rectangle string", () => {
      const color = "magenta";
      const circle = new Renderers.BackgroundFill(color);
      expect(circle.render()).toEqual(
        '<rect width="100%" height="100%" fill="magenta" />\n'
      );
    });
  });
});
