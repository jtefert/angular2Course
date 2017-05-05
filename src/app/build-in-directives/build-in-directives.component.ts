import { Component } from '@angular/core';

@Component({
  selector: 'app-build-in-directives',
  templateUrl: './build-in-directives.component.html',
  styleUrls: ['./build-in-directives.component.css'],
})
export class BuildInDirectivesComponent {
  secret = 'this is my secret!';
  showSecret = false;
  buttonClicksLog = [];
  constructor() { }

  buttonWasClicked() {
    this.showSecret = !this.showSecret;
    this.buttonClicksLog.push('button clicked');
  }

  itemHasIndexFiveOrHigher(logItem: string) {
    return this.buttonClicksLog.indexOf(logItem) >= 5;
  }

  getBackgroundColor(i: number) {
    if (i < 5) {
      return 'white';
    }else {
      return 'blue';
    }
  }

  getColor(i: number) {
    if (i < 5) {
      return false;
    }else {
      return true;
    }
  }
}
