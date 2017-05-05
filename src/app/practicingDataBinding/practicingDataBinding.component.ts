import {Component} from '@angular/core';

@Component({
  selector: 'app-practicing-data-binding',
  templateUrl: './practicingDataBinding.component.html',
  styleUrls: ['./practicingDataBinding.component.css']
})
export class PracticingDataBindingComponent {
    userName = '';
    resetButtonEnabled = false;

    updateButtonEnableState() {
      this.resetButtonEnabled = (this.userName.length > 0);
    }

    resetUserName() {
      this.userName = '';
    }
}
