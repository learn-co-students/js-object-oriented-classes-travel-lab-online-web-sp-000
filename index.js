class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  startDate() {
    return this.startDate;
  }

  yearsExperienceFromBeginningOf(year) {
    year = parseInt(year);
    let startYear = this.startDate.getYear()
    startYear = startYear < 20 ? startYear + 2000 : startYear + 1900;

    return year - startYear;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak = false) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
