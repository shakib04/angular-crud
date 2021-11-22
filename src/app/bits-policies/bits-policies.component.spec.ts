import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitsPoliciesComponent } from './bits-policies.component';

describe('BitsPoliciesComponent', () => {
  let component: BitsPoliciesComponent;
  let fixture: ComponentFixture<BitsPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitsPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitsPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
