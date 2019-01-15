import { TestBed } from '@angular/core/testing';

import { ListMovieService } from './list-movie.service';

describe('ListMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListMovieService = TestBed.get(ListMovieService);
    expect(service).toBeTruthy();
  });
});
