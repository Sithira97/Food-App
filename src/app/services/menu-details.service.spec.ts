import { TestBed } from '@angular/core/testing';

import { ProjectDetailsService } from './menu-details.service';

describe('ProjectDetailsService', () => {
  let service: ProjectDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
