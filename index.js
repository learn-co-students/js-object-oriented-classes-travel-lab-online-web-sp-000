

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()//getFullYear will return the year of specific date
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
//
// class Route {
//   constructor(beginningLocation, endingLocation) {
//     this.beginningLocation = endingLocation
//     this.endingLocation = endingLocation
//   }
//
//   traveled(avenue) {
//     return eastWest.indexOf(avenue)
//   }
//
//   blocksTravelled(){
//         let horizontalDistance = this.traveled(this.endingLocation.horizontal) - this.traveled(this.beginningLocation.horizontal)
//         let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
//         return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
//       }
//
//   estimatedTime(peak) {
//     if(peak) {
//       return this.blocksTracelled()/2
//     }
//     else {
//       return this.blocksTracelled()/3
//     }
//   }
// }


class Route {
    constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation
    }
    traveled(avenue) {
      return eastWest.indexOf(avenue)
    }
    blocksTravelled(){
      let horizontalDistance = this.traveled(this.endingLocation.horizontal) - this.traveled(this.beginningLocation.horizontal)
      let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
      return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
    }
    estimatedTime(peak) {
      if(peak) {
        return this.blocksTravelled()/2
      }else {
        return this.blocksTravelled()/3
      }
    }
}
