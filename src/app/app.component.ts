import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Carlitos';

  constructor() {
    console.log(123);
    this.changeName('Ivan');
  }

  changeName(name: string) {
    this.name = name;
  }
}
