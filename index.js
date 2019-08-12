let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver {

  constructor(name, startDate){
    this.name = name,
    this.startDate = startDate = new Date(startDate);
  } //end of constructor


  yearsExperienceFromBeginningOf(year){
    let endDate = new Date( year, 1, 1 );
    let totalYears = ( endDate - this.startDate ) / ( 365 * 24 * 60 * 60 * 1000 );
    return parseInt( totalYears );
  }
} //end of class


class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation,
    this.endingLocation = endingLocation
  }

  avenueToInteger(ave){
    return eastWest.indexOf(ave);
  }

  blocksTravelled(){
    let hDistance =
      this.avenueToInteger( this.endingLocation.horizontal ) -
      this.avenueToInteger( this.beginningLocation.horizontal );
    let vDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs( hDistance ) + Math.abs( vDistance );
  }


  estimatedTime( peak ) {
    if ( peak ) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

} // end of class
