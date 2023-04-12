import { Test, TestingModule } from '@nestjs/testing';
import { PtCourseService } from './pt-course.service';

describe('PtCourseService', () => {
  let service: PtCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PtCourseService],
    }).compile();

    service = module.get<PtCourseService>(PtCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
