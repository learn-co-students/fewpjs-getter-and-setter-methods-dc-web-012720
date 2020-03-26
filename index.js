// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    
    get diameter(){
        let diameter = this.radius * 2
        return diameter
    }
    
    get circumference(){
        let circ = this.radius * 2 * Math.PI
        return circ
    }
    
    get area(){
        let area = Math.PI * this.radius**2
        return area
    }
    
    set diameter(newDiameter){
        this.radius = newDiameter * 0.5
    }

    set circumference(newCirc){
        this.radius = (newCirc / 2) / Math.PI
    }

}