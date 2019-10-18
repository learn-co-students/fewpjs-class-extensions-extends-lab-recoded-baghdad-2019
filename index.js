// Your code here

class Polygon{
  constructor(sides){
    this.sides=sides
  }
 get countSides (){
    return this.sides.length
 
  }
  
   get perimeter (){
    return this.sides.reduce((a, b) => a + b, 0)
    
  }
  
  
}

class Triangle {
    constructor(sides){
    this.sides=sides
  }
 get countSides (){
    return this.sides.length
  }
  get isValid(){
    let a=this.sides[0];
    let b=this.sides[1];
    let c=this.sides[2];
    if (a + b <= c || a + c <= b || b + c <= a) 
            return false; 
        else
            return true; 
  }
     get perimeter (){
    return this.sides.reduce((a, b) => a + b, 0)
  }
}


class Square {
      constructor(sides){
    this.sides=sides
  }
  get area(){
    return this.sides[0]*this.sides[0]
  }
       get perimeter (){
    return this.sides.reduce((a, b) => a + b, 0)
  }
   get countSides (){
    return this.sides.length
  }
    get isValid(){
  return  this.sides.every( (val, i, arr) => val === arr[0] )  
  }
}