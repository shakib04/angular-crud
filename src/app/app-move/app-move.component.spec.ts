import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMoveComponent } from './app-move.component';

describe('AppMoveComponent', () => {
  let component: AppMoveComponent;
  let fixture: ComponentFixture<AppMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
