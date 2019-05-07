
class Driver {
  constructor(name, startDate) {
          debugger
    this.name = name;
    this.startDate = new Date(startDate)

  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
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


class Route{
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;

    this.endingLocation = endingLocation;
  }
  blocksTravelled(){

  return this.endingLocation['vertical'] - this.beginningLocation['vertical'] + eastWest.indexOf(this.endingLocation['horizontal']) - eastWest.indexOf(this.beginningLocation['horizontal']);
  }
  estimatedTime(peak){
    if(!peak){
      return this.blocksTravelled()/3;
    } else {
      return this.blocksTravelled()/2;
    }
  }
}
