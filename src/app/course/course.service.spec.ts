/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CourseService } from './course.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
  });

  it('should ...', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});