class Driver{
    constructor(name, startDate){
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year){
        return year - this.startDate.getFullYear()
    }

}

class Route{
    constructor(beginningLocation, endLocation){
        this.beginningLocation = beginningLocation
        this.endLocation = endLocation
    }

    blocksTravelled(){
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];
        const verticalBlocksTravelled = Math.abs(this.beginningLocation["vertical"] - this.endLocation["vertical"])
        const horizontalBlocksTravelled = Math.abs(eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endLocation["horizontal"]))
        return verticalBlocksTravelled + horizontalBlocksTravelled
    }

    estimatedTime(peakHours){
        if(peakHours){
            return this.blocksTravelled() / 2
        }else{
            return this.blocksTravelled() / 3
        }
        
    }
}
