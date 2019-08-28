class Driver{
    constructor(name, started){
        this.name = name;
        this.startDate = new Date(started);
    };

    yearsExperienceFromBeginningOf(year){
        let d = new Date(year, 0, 1).getFullYear()
        return d - this.startDate.getFullYear() ;
    };
};


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
          this.endingLocation = endingLocation;
      };

    horizontalBlocksTravelled(){
        let horizontalBlocks;
        if (eastWest.indexOf(this.beginningLocation.horizontal) >= eastWest.indexOf(this.endingLocation.horizontal)){
            horizontalBlocks = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
        }else{
            horizontalBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
        }

        return horizontalBlocks;
      };

      verticalBlocksTravelled(){
        let verticalBlocks;
          if (this.beginningLocation.vertical >= this.endingLocation.vertical){
                verticalBlocks = this.beginningLocation.vertical - this.endingLocation.vertical;
            }else{
                verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
        }
        return verticalBlocks;
      }

      blocksTravelled(){
        return this.verticalBlocksTravelled() + this.horizontalBlocksTravelled();
      }

      estimatedTime(peak){
          let time
          if (peak){
            time = this.blocksTravelled() / 2;
          }else{
            time =  this.blocksTravelled() / 3;
          };
        return time;
      };
};