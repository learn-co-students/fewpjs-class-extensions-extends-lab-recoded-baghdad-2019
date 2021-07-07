// Your code here
class Polygon {
    constructor(arrOfSides) {
        this.arrOfSides = arrOfSides
    }
    get countSides() {
        return this.arrOfSides.length
    }
    get perimeter() {
        return this.arrOfSides.reduce((sum, e) => {
            return sum + e
        }, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        return !!(this.arrOfSides[0]+this.arrOfSides[1]>this.arrOfSides[2]&&this.arrOfSides[1]+this.arrOfSides[2]>this.arrOfSides[0]&&this.arrOfSides[0]+this.arrOfSides[2]>this.arrOfSides[1])
    }

}


class Square extends Polygon{
    get isValid(){
        return this.arrOfSides.every(v=>v==this.arrOfSides[0])
    }
    get area(){
        return this.arrOfSides[0]*this.arrOfSides[0]
    }
}