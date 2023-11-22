import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLibComponentComponent } from './load-lib-component.component';

describe('LoadLibComponentComponent', () => {
  let component: LoadLibComponentComponent;
  let fixture: ComponentFixture<LoadLibComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadLibComponentComponent]
    });
    fixture = TestBed.createComponent(LoadLibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
