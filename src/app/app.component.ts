import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'mfe-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggleMe = signal(false);
  user!: any;
  async ngOnInit() {
    const userService = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      exposedModule: './user-service',
    });
    this.user = userService.user;
  }

  onCustomEvent(event: Event) {
    this.toggleMe.update((value) => !value);
  }
}
