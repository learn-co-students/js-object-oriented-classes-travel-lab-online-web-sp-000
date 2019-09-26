class Driver {
  constructor(name, day) {
    this.name = name;
    this.startDate = new Date(day);
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

  eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

  blocksTravelled() {
    return (Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical) +   Math.abs(this.eastWest.indexOf(this.beginningLocation.horizontal) - this.eastWest.indexOf(this.endingLocation.horizontal)))
  }

  estimatedTime(rushHour = false) {
    return this.blocksTravelled() / (rushHour ? 2 : 3)
  }
}
