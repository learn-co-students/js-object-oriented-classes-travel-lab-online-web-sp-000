let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
        ];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    let currentDate = new Date(year, 1, 1);
      let yearsOfExperience = (currentDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
      return parseInt(yearsOfExperience);
    }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    let northSouthBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let eastWestBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return northSouthBlocks + eastWestBlocks
  }
  
  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2 
    }  else {
      return this.blocksTravelled() / 3
    }
  }
  
}