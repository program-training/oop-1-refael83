// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle{
//     width:number;
//     height:number

//    constructor(width:number,height:number){
//     this.width=width;
//     this.height=height
//    }
//    area():number{
//     return this.height*this.width
//    }
// }
//  2. Square - ריבוע
// class Square extends Rectangle{
//     rib:number
//     constructor(rib:number){
//         super(rib,rib)
//         this.rib=rib
//     }
//     area(): number {
//         return this.rib**2
//     }
// }
// 3. Shape - צורה
class Shape {
  info(): string {
    return "This is a Shape";
  }
  draw() {
    console.log("drawing a shape");
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.height * this.width;
  }
  info(): string {
    return "This is a Rectangle";
  }
  scale(num: number): Rectangle {
    this.width *= num;
    this.height *= num;
    return this;
  }
  draw(): void {
    console.log("this is a rectangle");
  }
  static Rectangles(rectangle1: Rectangle, rectangle2: Rectangle): Rectangle {
    return new Rectangle(
      rectangle1.width + rectangle2.width,
      rectangle1.height + rectangle2.height
    );
  }
}
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(width: number, heigth: number, color: string) {
    super(width, heigth);
    this.color = color;
  }
  info(): string {
    return `This is a ${this.color} Rectangle`;
  }
}
class Square extends Rectangle {
  rib: number;
  constructor(rib: number) {
    super(rib, rib);
    this.rib = rib;
  }
  area(): number {
    return this.rib ** 2;
  }
  draw(): void {
    console.log("this is a square");
  }
}
class Circle extends Shape{
    draw(): void {
        console.log('this is a circle')
    }
}
class Triangle extends Shape{
    draw(): void {
        console.log('this is a Triangle')
    }
}

// 4. Method Chaining
let rectangle = new Rectangle(4, 8);
let square= new Square(6)
let chaining = rectangle.scale(2).scale(3);
console.log(chaining);
let rec = new Rectangle(7, 6);
console.log(Rectangle.Rectangles(rectangle, rec));
// 5. Shape with draw method

function renderShapes<T extends Shape>(shapes: T[]) {
  for (let shape of shapes) {
    shape.draw();
  }
}
renderShapes([rectangle,square]);
