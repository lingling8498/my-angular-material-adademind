import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldOverviewExampleComponent } from './form-field-overview-example.component';

describe('FormFieldOverviewExampleComponent', () => {
  let component: FormFieldOverviewExampleComponent;
  let fixture: ComponentFixture<FormFieldOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
