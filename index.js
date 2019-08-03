
class Driver {
    constructor (name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
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

class Route {
    constructor(start, end){
        this.start = start;
        this.end = end;
    }

    blocksTravelled (){
        let verticalDistanceTravelled = Math.abs(this.start.vertical - this.end.vertical);
        let horizontalDistanceTravelled = Math.abs(eastWest.indexOf(this.start.horizontal) - eastWest.indexOf(this.end.horizontal));
        return verticalDistanceTravelled + horizontalDistanceTravelled;
    }

    estimatedTime (peakTime = false){
        if (peakTime) {
            return this.blocksTravelled() / 2;
        }
        return this.blocksTravelled() / 3;
    }
}