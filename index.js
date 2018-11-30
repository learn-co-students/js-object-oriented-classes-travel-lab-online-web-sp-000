class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    }
yearsExperienceFromBeginningOf(year){
        let endDate = new Date(year, 1, 1);
        let totalYears = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
        return parseInt(totalYears);
  }
 }
 class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
   blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let blocks = 0;
    let startBlock = 0;
    let endBlock = 0;
    blocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    startBlock = eastWest.indexOf(this.beginningLocation.horizontal);
    endBlock = eastWest.indexOf(this.endingLocation.horizontal);
    return blocks + Math.abs(startBlock - endBlock);
  }
   estimatedTime(peak) {
     return peak ? Math.round(this.blocksTravelled() / 2) : Math.round(this.blocksTravelled() / 3);
   }
 }