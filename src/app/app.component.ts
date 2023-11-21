import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'mfe-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'remote-app-one';

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponent!: ViewContainerRef;

  async ngOnInit() {
    const { DynamicComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      exposedModule: './DynamicComponent',
    });

    this.dynamicComponent.clear();
    this.dynamicComponent.createComponent(DynamicComponent);
  }
}
