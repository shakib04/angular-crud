import { TestBed } from '@angular/core/testing';

import { UploadMultipleFilesService } from './upload-multiple-files.service';

describe('UploadMultipleFilesService', () => {
  let service: UploadMultipleFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadMultipleFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
