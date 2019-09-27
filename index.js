class Driver{
  
  constructor(name, joinDate){
    this.name = name;
    this.startDate = new Date(joinDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    return new Date(year, 1).getYear() - this.startDate.getYear();
  }
}

class Route{
  
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
    
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];
    
    let northSouthBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let eastWestBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    
    return northSouthBlocks + eastWestBlocks
  }
  
  estimatedTime(peakHours){
    
    let divisor = 3;
    if(peakHours === true){
      divisor = 2;
    }
   
    return this.blocksTravelled()/divisor;
  }
}
