
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate);
  }
    yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    const distance = Math.abs(this.end.vertical - this.start.vertical);
    const blocks = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
    'Park', 'Madison Avenue', '5th Avenue'];
    const travelled = Math.abs(blocks.indexOf(this.start.horizontal) - blocks.indexOf(this.end.horizontal));
    return distance + travelled;
  }

  estimatedTime(isPeakHour) {
    if(isPeakHour === undefined) {
      return this.blocksTravelled()/3;
    } else {
      return this.blocksTravelled()/2;
    }
  }
}
