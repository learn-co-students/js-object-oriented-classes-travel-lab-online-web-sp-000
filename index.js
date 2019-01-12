class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year)
    return endDate.getFullYear() - this.startDate.getFullYear() + 1
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
    let totalBlocks = 0
    totalBlocks += Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    totalBlocks += Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return totalBlocks
  }

  estimatedTime(peak) {
    if(peak === undefined) {
      return this.blocksTravelled() / 3
      } else {
      return this.blocksTravelled() / 2
    }
  }
}
