let eastWest = {
  '1st Avenue': 1,
  '2nd Avenue': 2,
  '3rd Avenue': 3,
  'Lexington Avenue': 4,
  'Park': 5,
  'Madison Avenue': 6,
  '5th Avenue': 7
};
  

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date( startDate );
  }
  yearsExperienceFromBeginningOf( year ) {
    let endDate = new Date( year, 1, 1 );
    let totalYears = ( endDate - this.startDate ) / ( 365 * 24 * 60 * 60 * 1000 );
    return parseInt( totalYears );
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let blocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    blocks += Math.abs(eastWest[this.beginningLocation.horizontal] - eastWest[this.endingLocation.horizontal]);
    return blocks;
  }
  estimatedTime(isPeak) {
    if (isPeak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}