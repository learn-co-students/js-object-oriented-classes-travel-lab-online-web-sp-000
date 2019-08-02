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
  constructor(start, end) {
    switch(start.horizontal.charAt(0)) {
      case '1':
        start.horizontal = 1;
        break;
      case '2':
        start.horizontal = 2;
        break;
      case '3':
        start.horizontal = 3;
        break;
      case '4':
        start.horizontal = 4;
        break;
      case 'P':
        start.horizontal = 5;
        break;
      default:
        start.horizontal = 0;
    }

    switch(end.horizontal.charAt(0)) {
      case '1':
        end.horizontal = 1;
        break;
      case '2':
        end.horizontal = 2;
        break;
      case '3':
        end.horizontal = 3;
        break;
      case '4':
        end.horizontal = 4;
        break;
      case 'P':
        end.horizontal = 5;
        break;
      default:
        end.horizontal = 0;
    }

    this.start = start;
    this.end = end;
  }

  blocksTravelled() {
    return Math.abs(this.start.horizontal-this.end.horizontal) + Math.abs(this.start.vertical - this.end.vertical);
  }

  estimatedTime(bool) {
    if (bool) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
