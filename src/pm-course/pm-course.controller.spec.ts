import { Test, TestingModule } from '@nestjs/testing';
import { PmCourseController } from './pm-course.controller';
import { PmCourseService } from './pm-course.service';

describe('PmCourseController', () => {
  let controller: PmCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PmCourseController],
      providers: [PmCourseService],
    }).compile();

    controller = module.get<PmCourseController>(PmCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
