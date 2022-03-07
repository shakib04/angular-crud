import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFileDropComponent } from './ngx-file-drop.component';

describe('AppShellComponent', () => {
  let component: NgxFileDropComponent;
  let fixture: ComponentFixture<NgxFileDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFileDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFileDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
