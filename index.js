
class Driver{

    constructor(name, dayJoined){
        this.name = name;
        this.startDate =  new Date(dayJoined);
    }

    yearsExperienceFromBeginningOf(year){
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
          const vblocks = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
          const hblocks = Math.abs(this.eastWest.indexOf(this.endingLocation.horizontal) - this.eastWest.indexOf(this.beginningLocation.horizontal))
          return vblocks + hblocks
      }

      estimatedTime(peakHrs = false){
        const blocksPerMin = peakHrs ? 2 : 3;
        return this.blocksTravelled() / blocksPerMin;
      }
}