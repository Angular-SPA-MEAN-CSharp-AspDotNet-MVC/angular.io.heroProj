import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridAngularComponent } from './ag-grid-angular.component';

describe('AgGridAngularComponent', () => {
  let component: AgGridAngularComponent;
  let fixture: ComponentFixture<AgGridAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
