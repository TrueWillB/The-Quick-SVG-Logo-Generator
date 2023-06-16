class Circle {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<circle cx="50%" cy="50%" r="30%" fill="${this.color}" />\n`;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />\n`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<rect x="68" y="18" width="164" height="164" r="90" fill="${this.color}" />\n`;
  }
}

class Text {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }
  render() {
    return `<text x="150" y="125" font-size="60" font-family="Brush Script MT" text-anchor="middle" fill="${this.color}">${this.text}</text>\n`;
  }
}

class BackgroundFill {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<rect width="100%" height="100%" fill="${this.color}" />\n`;
  }
}

module.exports = { BackgroundFill, Circle, Triangle, Square, Text };
