import { TestBed } from '@angular/core/testing';

import { FileTestService } from './file-test.service';

describe('FileTestService', () => {
  let service: FileTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
