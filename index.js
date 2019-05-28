class Driver {

  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){

    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled = function(){
    const eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let avenueStart = this.beginningLocation.horizontal;
    let avenueEnd = this.endingLocation.horizontal;
    let streetStart = parseInt(this.beginningLocation.vertical);
    let streetEnd = parseInt(this.endingLocation.vertical);
    let avenueBlock = eastWest.indexOf(avenueEnd) - eastWest.indexOf(avenueStart);
    let streetBlock = streetEnd - streetStart;
    return avenueBlock + streetBlock;
  }

  estimatedTime = function(peakhHours){
    return  peakhHours ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3);
  }
}
