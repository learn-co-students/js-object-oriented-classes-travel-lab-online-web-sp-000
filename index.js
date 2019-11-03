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
  constructor (name, dateString) {
    this.name = name;
    this.startDate = new Date (dateString);
  }
  
  yearsExperienceFromBeginningOf(currentYear) {
    return currentYear - this.startDate.getFullYear();
  }
}


class Route {
  constructor (beginningLocationObject, endingLocationObject) {
    this.beginningLocationObject = beginningLocationObject;
    this.endingLocationObject = endingLocationObject;
  }
  
  blocksTravelled() {
    return Math.abs(eastWest.indexOf(this.beginningLocationObject.horizontal) - eastWest.indexOf(this.endingLocationObject.horizontal)) + Math.abs( (this.beginningLocationObject.vertical) -            (this.endingLocationObject.vertical));
  }
  
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}