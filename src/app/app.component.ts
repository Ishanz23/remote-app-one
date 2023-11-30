import { Component, signal } from '@angular/core';

@Component({
  selector: 'mfe-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggleMe = signal(false);

  onCustomEvent(event: Event) {
    this.toggleMe.update((value) => !value);
  }
}
