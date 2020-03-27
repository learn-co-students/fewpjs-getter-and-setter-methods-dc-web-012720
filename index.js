class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  get circumference() {
    let pi = Math.PI
    return this.radius * 2 * pi
  }
  
  get area() {
    let pi = Math.PI 
    return ((this.radius)**2)*pi
  }
  
  set diameter(diameter) {
    return this.radius = diameter/2
  }
  
  set circumference(circumference) {
    let pi = Math.PI
    return this.radius = circumference/2/pi
  }
  
  set area(area) {
    let pi = Math.PI
    return this.radius = (area/pi)**(1/2)
  }
}