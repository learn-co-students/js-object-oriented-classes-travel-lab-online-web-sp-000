class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(year){
    let startYear = this.startDate.getFullYear();
    let totalYears = (year - startYear);
    return totalYears;
  }
}

class Route {
  constructor( beginningLocation, endingLocation ) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
  let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

  let northSouthBlocks = this.endingLocation.vertical - this.beginningLocation.vertical
  let eastWestBlocks = eastWest.findIndex(location => location === this.endingLocation.horizontal) - eastWest.findIndex(location => location === this.beginningLocation.horizontal);
  let total = northSouthBlocks + eastWestBlocks;
  return total;
}

  estimatedTime(peak) {
      if (peak) {
        return this.blocksTravelled() / 2;
      } else {
        return this.blocksTravelled() / 3;
      }
    }
}
