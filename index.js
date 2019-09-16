class Driver{
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate)
    };

    yearsExperienceFromBeginningOf(year){
        let endDate = new Date(year, 1, 1)
        let totalYrs = (endDate - this.startDate) / ( 365 * 24 * 60 * 60 * 1000 );
        return parseInt(totalYrs)
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

class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation
    };
    avenueToInt(avenue){
        return eastWest.indexOf(avenue);
    };

    blocksTravelled(){
        let horizontalDist = 
        this.avenueToInt( this.endingLocation.horizontal ) -
        this.avenueToInt( this.beginningLocation.horizontal );

        let verticalDist = 
        this.endingLocation.vertical - this.beginningLocation.vertical;
        return Math.abs(horizontalDist) + Math.abs(verticalDist);
    };
    estimatedTime( speed ) {
        if ( speed ) {
          return this.blocksTravelled() / 2;
        } else {
          return this.blocksTravelled() / 3;
        }
      }
    }