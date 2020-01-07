let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date( startDate );
  }
  yearsExperienceFromBeginningOf(year) {

    let endDate = new Date(year, 1, 1)

    let calculation = ((endDate.getTime() - this.startDate.getTime()) / 31536000000).toFixed(0);

    return parseInt(calculation, 10)
  }
}

  class Route{
    constructor( beginningLocation, endingLocation ) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
    avenueToInt( avenue ) {
      return eastWest.indexOf( avenue );
    }

    blocksTravelled(){
      let horizontal = this.avenueToInt( this.endingLocation.horizontal ) - this.avenueToInt(this.beginningLocation.horizontal);
      let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
      return Math.abs(horizontal) + Math.abs(vertical);
    }
    estimatedTime(peak){
      if (peak) {
        return this.blocksTravelled() / 2;
      } else {
        return this.blocksTravelled() / 3
      }
    }
  }
