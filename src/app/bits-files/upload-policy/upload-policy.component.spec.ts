import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPolicyComponent } from './upload-policy.component';

describe('UploadPolicyComponent', () => {
  let component: UploadPolicyComponent;
  let fixture: ComponentFixture<UploadPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
