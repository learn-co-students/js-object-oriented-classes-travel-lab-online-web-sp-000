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
    const verticalDistance = Math.abs(this.endingLocation.vertical -
      this.beginningLocation.vertical);
    const horizontalDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) -
      eastWest.indexOf(this.beginningLocation.horizontal));
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak=false) {
    let time = 0;
    if(!peak) {
      time = this.blocksTravelled()/3;
    } else {
      time = this.blocksTravelled()/2;
    }
    return time;
  }
}
