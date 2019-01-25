
class Driver { 
  constructor(name, string){
    this.name = name; 
    this.startDate = new Date(string); 
  }
  
  yearsExperienceFromBeginningOf(date){ 
    let endDate = new Date(date, 1, 1)
    return endDate.getYear() - this.startDate.getYear(); 
  }
  
} //end of Driver class

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route { 
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation; 
    this.endingLocation = endingLocation; 
  }
    
    aveToInt(ave) {
    return eastWest.indexOf(ave)
  }
  
   blocksTravelled(){
    let horizontalDistance = this.aveToInt(this.endingLocation.horizontal) - this.aveToInt(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }
  
  estimatedTime(peak){ 
    if (peak){ 
      return this.blocksTravelled() / 2; 
    } else { 
      return this.blocksTravelled() / 3; 
    }
  }
  
} // end of Route class