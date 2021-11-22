import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSweetAlertComponent } from './delete-sweet-alert.component';

describe('DeleteSweetAlertComponent', () => {
  let component: DeleteSweetAlertComponent;
  let fixture: ComponentFixture<DeleteSweetAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSweetAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSweetAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
