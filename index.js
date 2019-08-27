
class Driver {
    constructor(name, startDate, yearsExperienceFromBeginningOf) {
      this.name = name;
      this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getUTCFullYear();
    } 
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }


    blocksTravelled() {
        const eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
            ];

        let horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        let verticalBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
        return horizontalBlocks + verticalBlocks;
    }

    estimatedTime(peak) {
        return (peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3);
    }

}
