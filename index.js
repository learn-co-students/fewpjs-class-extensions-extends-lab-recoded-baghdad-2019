// Your code  here
class Polygon {
  constructor(arr) {
    this.arr = arr
  }
  get countSides() {
    return this.arr.length
  }
  get perimeter(){
   return this.arr.reduce((a,c)=>a+c,0)
  } 
}
class Triangle extends Polygon {
  constructor(arr){
  super(arr)
  }
   get isValid() {
    if (this.arr.length !== 3) return;
    let side1 = this.arr[0];
    let side2 = this.arr[1];
    let side3 = this.arr[2];
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
} 
class Square extends Polygon{
  constructor(arr){
    super(arr)
  }
  get isValid(){
    if(this.arr.length !==4)return;
    let side1 = this.arr[0];
    let side2 = this.arr[1];
    let side3 = this.arr[2];
    let side4 = this.arr[3];
    return (side1===side2)&&(side1===side3)&&(side1===side4)
  }
  get area(){
    return (this.arr[0])*(this.arr[0])
  } 
}
 