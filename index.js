class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return (new Date(year, 0).getFullYear() - this.startDate.getFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
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
    const streets = this.endingLocation.vertical - this.beginningLocation.vertical;
    const startAvenue = eastWest.indexOf(this.beginningLocation.horizontal);
    const endAvenue = eastWest.indexOf(this.endingLocation.horizontal);
    return streets + (endAvenue - startAvenue);
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return Math.floor(this.blocksTravelled()/3);
    }
  }

}
