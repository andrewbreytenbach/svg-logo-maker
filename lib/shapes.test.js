const { Triangle, Circle, Square } = require("./shapes");

describe("Shape classes", () => {
  test("Triangle should render correct SVG element", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150,18 244,182 56,182" fill="blue" />'
    );
  });

  test("Circle should render correct SVG element", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });

  test("Square should render correct SVG element", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="70" y="60" width="160" height="80" fill="green" />'
    );
  });
});
