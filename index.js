let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver{
  constructor(name, dateString){
    this.name=name;
    this.startDate = new Date(dateString)
  }
  
  yearsExperienceFromBeginningOf(startYear){
    return startYear - 1900 - this.startDate.getYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation=beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    const verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical
    const horizontalBlocks = eastWest.findIndex(location => location === this.endingLocation.horizontal) - eastWest.findIndex(location => location === this.beginningLocation.horizontal);
    return verticalBlocks + horizontalBlocks;
  }
  
  estimatedTime(peak){
    const divisor = peak? 2:3
    return this.blocksTravelled()/divisor
  }
}