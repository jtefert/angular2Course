import {Component} from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './errorAlert.component.html',
  styleUrls: ['./errorAlert.component.css']
})
export class ErrorAlertComponent {
    message= 'This is an error message!';
}
