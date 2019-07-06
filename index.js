class Driver {
  constructor(name, startDate) {
    [this.name, this.startDate] = [name, new Date(startDate)]
  }
  startDate() {
    return this.startDate
  }
  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    [this.beginningLocation, this.endingLocation] = [beginningLocation, endingLocation]
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
    const horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"]))
    const verticalDistance = Math.abs(this.beginningLocation["vertical"] - this.endingLocation["vertical"])
    return horizontalDistance + verticalDistance
  }
  estimatedTime(peakHours) {
    if (typeof peakHours == 'undefined') {
      return this.blocksTravelled() / 3
    } else {
      return this.blocksTravelled() / 2
    }
  }
}
