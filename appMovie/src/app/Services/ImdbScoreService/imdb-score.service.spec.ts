import { TestBed } from '@angular/core/testing';

import { ImdbScoreService } from './imdb-score.service';

describe('ImdbSocoreService', () => {
  let service: ImdbScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
