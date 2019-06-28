class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  };
};

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    // north-south math
    const nsBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    // east-west math
    const ewBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

    return nsBlocks + ewBlocks;
  };

  estimatedTime(peakHours = false){
    if (peakHours) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  };
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
