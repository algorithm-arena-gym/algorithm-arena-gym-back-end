import { Test, TestingModule } from '@nestjs/testing';
import { PrCourseService } from './pr-course.service';

describe('PrCourseService', () => {
  let service: PrCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrCourseService],
    }).compile();

    service = module.get<PrCourseService>(PrCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
