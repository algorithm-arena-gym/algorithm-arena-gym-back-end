import { Test, TestingModule } from '@nestjs/testing';
import { PmCourseService } from './pm-course.service';

describe('PmCourseService', () => {
  let service: PmCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmCourseService],
    }).compile();

    service = module.get<PmCourseService>(PmCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
