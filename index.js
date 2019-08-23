class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
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
    let endingIndex = eastWest.indexOf(this.endingLocation.horizontal);
    let beginningIndex = eastWest.indexOf(this.beginningLocation.horizontal);
    let distTravelledEW = Math.abs(beginningIndex - endingIndex);
    let distTravelledNS = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    return distTravelledEW + distTravelledNS
  }
  estimatedTime(isPeakHours) {
    if (isPeakHours) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
