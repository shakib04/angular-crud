import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSweetAlertComponent } from './success-sweet-alert.component';

describe('SuccessSweetAlertComponent', () => {
  let component: SuccessSweetAlertComponent;
  let fixture: ComponentFixture<SuccessSweetAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessSweetAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSweetAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
