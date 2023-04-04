// Shape parent class
class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    // To be implemented by child classes
    render() {
      throw new Error("render() method must be implemented by child classes.");
    }
  
    // Render shape with text
    renderWithText(text, textColor) {
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${this.render()}
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="48" font-family="Arial, sans-serif">
            ${text}
          </text>
        </svg>
      `;
    }
  }
  
  // Triangle class
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  // Circle class
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Square class
  class Square extends Shape {
    render() {
      return `<rect x="70" y="60" width="160" height="80" fill="${this.color}" />`;
    }
  }
  
  export { Triangle, Circle, Square };
  