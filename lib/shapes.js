class Circle {
  constructor(color) {
    this.color = color;
  }
  render() {
    console.log(
      `returning <circle cx=50% cy=50% r=30% fill="${this.color}" />`
    );
    return `<circle cx=50% cy=50% r=30% fill="${this.color}" />`;
  }
}

module.exports = { Circle };
