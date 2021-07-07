class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let ans = 0;
    for (var int of this.sides) {
      ans += int
    }
    return ans
  }
}
class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    let s1 = this.sides[0]
    let s2 = this.sides[1]
    let s3 = this.sides[2]
    return ((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1))
  }
}
class Square extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];
    let side4 = this.sides[3]
    return ((s1 === s2) && 
    (s1 === s3) && 
    (s1 === side4))
  }
  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0]
  }
}