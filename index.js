class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(year){
    
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    const endingAvenue = eastWest.indexOf(this.endingLocation.horizontal);
    const beginningAvenue = eastWest.indexOf(this.beginningLocation.horizontal);

    const horizontalBlocks = Math.abs(endingAvenue - beginningAvenue);
    const verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    return horizontalBlocks + verticalBlocks;
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled() / 2;
    }else{
      return this.blocksTravelled() / 3;
    }
  }
}