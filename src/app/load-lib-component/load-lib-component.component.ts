import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'mfe-one-load-lib-component',
  templateUrl: './load-lib-component.component.html',
  styleUrls: ['./load-lib-component.component.css'],
})
export class LoadLibComponentComponent implements OnInit, OnDestroy {
  @Input('componentName') exposedModule!: string;
  @Input('componentProps') props!: any;
  @ViewChild('componentGoesHere', { read: ViewContainerRef })
  componentGoesHere!: ViewContainerRef;
  componentRef!: ComponentRef<any>;
  async ngOnInit() {
    const { DynamicComponent } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      exposedModule: `./${this.exposedModule}`,
    });

    this.componentGoesHere.clear();
    this.componentRef = this.componentGoesHere.createComponent<any>(
      DynamicComponent,
      {}
    );
    for (const key in this.props) {
      if (Object.prototype.hasOwnProperty.call(this.props, key)) {
        const value = this.props[key];
        this.componentRef.setInput(key, value);
      }
    }
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
