class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  add () {
    return this.x + this.y
  }
}
class ColorPoint extends Point {
  constructor (x, y, color) {
    super(x, y)
    this.color = color
  }
}
let cp = new ColorPoint(25, 8, 'green')
// 父类的静态方法也会被子类继承

export default {
  addCp () {
    console.log(cp.add())
  }
}
