class Driver {
    constructor (name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear();
    }
}

class Route {
    constructor (beginningLocation, endingLocation){
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

        const beginSt = this.beginningLocation.vertical;
        const endSt = this.endingLocation.vertical;
        const beginAve = eastWest.indexOf(this.beginningLocation.horizontal);
        const endAve = eastWest.indexOf(this.endingLocation.horizontal);

        const verticalRoute = Math.abs(beginSt - endSt);
        const horizRoute = Math.abs(beginAve - endAve);

        return verticalRoute + horizRoute;
    }     

    estimatedTime(time) {
        let blocks = this.blocksTravelled()

        if(time = 'peak') {
            return blocks /2;
        }
        else {
            return blocks /3;
        }
    }
         
}