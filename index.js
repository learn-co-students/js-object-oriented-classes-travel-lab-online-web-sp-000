class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date('Jan 1, 1995')
  }
  yearsExperienceFromBeginningOf(endDate) {
    const startDate = this.startDate.getFullYear()
    return endDate - startDate;
  }
}

// let driver = new Driver('Alfie', 'Jan 1, 1995')

// driver.yearsExperienceFromBeginningOf(2017)

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    return (this.endingLocation.vertical - this.beginningLocation.vertical) + (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
  }
  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
