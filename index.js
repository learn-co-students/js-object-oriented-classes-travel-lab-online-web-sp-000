class Driver{
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }
  
    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear();
        
    }
}

class Route{
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
        this.eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];

    }

    blocksTravelled(){
        const verticalBlocks = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
        const horizontalBlocks = Math.abs(this.eastWest.indexOf(this.endingLocation.horizontal) - this.eastWest.indexOf(this.beginningLocation.horizontal))
        return verticalBlocks + horizontalBlocks
    }

    estimatedTime(peak){
        if (peak) {

            return this.blocksTravelled()/2
        }
        else {
            return this.blocksTravelled()/3
        }

    }



}
