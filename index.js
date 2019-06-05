
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
    console.log("beginningLocation", beginningLocation)
    console.log(endingLocation)

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

    let beginningStreet = this.beginningLocation.vertical;
    let endingStreet = this.endingLocation.vertical;
    let beginningAvenue = eastWest.indexOf(this.beginningLocation.horizontal);
    let endingAvenue = eastWest.indexOf(this.endingLocation.horizontal);

    let verticalDistance = Math.abs(beginningStreet - endingStreet);
    let horizontalDistance = Math.abs(beginningAvenue - endingAvenue);

    return verticalDistance + horizontalDistance;
  }


  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled()/ 3;
    }
  }

}
