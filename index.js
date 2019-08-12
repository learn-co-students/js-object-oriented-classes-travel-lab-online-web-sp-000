class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    const finalDate = new Date(endDate)
    return finalDate.getFullYear() - this.startDate.getFullYear() + 1
  }
}

class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue','2nd Avenue','3rd Avenue','Lexington Avenue','Park',
      'Madison Avenue','5th Avenue'];

    let verticalDistance = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    let horizontalStart = parseInt(eastWest.indexOf(this.beginningLocation.horizontal))
    let horizontalEnd = parseInt(eastWest.indexOf(this.endingLocation.horizontal))
    let horizontalDistance = horizontalEnd - horizontalStart
    return horizontalDistance + verticalDistance
  }

  estimatedTime(peakHours){
    return this.blocksTravelled()/(peakHours? 2 : 3)
  }

}
