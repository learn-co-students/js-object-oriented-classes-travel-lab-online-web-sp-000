class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  };

  yearsExperienceFromBeginningOf(endDate) {
    let experience = endDate - this.startDate.getFullYear()
    return experience
  };

};

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  };

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  };

  blocksTravelled() {
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
  };

  estimatedTime(peak) {
    let peakHours = this.blocksTravelled() / 2
    let offHours = this.blocksTravelled() / 3

    if (peak) {
      return peakHours
    } else {
      return offHours
    };
  };
};
