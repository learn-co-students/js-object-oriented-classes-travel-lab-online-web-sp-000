class Driver {
    constructor (name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(endDate) {
        return endDate - (this.startDate.getYear()+1900)
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

class Route {
    constructor (beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        const horizontalBlockA = eastWest.indexOf(this.beginningLocation.horizontal) 
        const horizontalBlockB = eastWest.indexOf(this.endingLocation.horizontal) 
        const horizontalDistance = horizontalBlockB - horizontalBlockA
        const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
        return horizontalDistance + verticalDistance;
    }

    estimatedTime(isPeak) {
        if (isPeak === true) {
            return this.blocksTravelled() / 2;
        }else{
            return this.blocksTravelled() / 3;
        }
    }
}