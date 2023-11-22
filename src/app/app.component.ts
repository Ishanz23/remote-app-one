import { Component } from '@angular/core';

@Component({
  selector: 'mfe-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  componentProps = {
    propOne: 'A String prop',
    propTwo: 5,
  };
}
