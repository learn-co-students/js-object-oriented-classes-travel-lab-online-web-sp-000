class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  };
};

class Route {
  // beginningLocation = {horizontal: '1st Avenue', vertical: '34'}
  // endingLocation = {horizontal: 'Park', vertical: '45'}
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

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

    let horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal']));
    let verticalBlocks = Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical']);
    return horizontalBlocks + verticalBlocks;
  };

  estimatedTime(isPeak) {
    if (isPeak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  };
};