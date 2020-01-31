import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeClient';
  
  // form control mode options are 'over', 'side', 'push'
  mode = new FormControl('side');
  
}
