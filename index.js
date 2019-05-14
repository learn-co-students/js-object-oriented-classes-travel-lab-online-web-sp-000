class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
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

    const beginningStreet = this.beginningLocation.vertical;
    const endingStreet = this.endingLocation.vertical;
    const beginningAvenue = eastWest.indexOf(this.beginningLocation.horizontal);
    const endingAvenue = eastWest.indexOf(this.endingLocation.horizontal);

    const verticalDistance = Math.abs(beginningStreet - endingStreet);
    const horizontalDistance = Math.abs(beginningAvenue - endingAvenue);

    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}