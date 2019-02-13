class Driver { 
  
  constructor(name, dayJoined) {
    this.name = name
    this.startDate = new Date(dayJoined)
  }

  yearsExperienceFromBeginningOf(year) {
    let firstOfYear = new Date(year,0,1)
    let yearsSince = Math.floor((firstOfYear - this.startDate) / 31536000000)
    return yearsSince
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

    let streets = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let avenues = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))

    return streets + avenues
  }

  estimatedTime(peak = false) {
    return Math.floor(this.blocksTravelled() / (peak ? 2 : 3))
  }
  
}

