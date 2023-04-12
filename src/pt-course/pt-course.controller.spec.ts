import { Test, TestingModule } from '@nestjs/testing';
import { PtCourseController } from './pt-course.controller';
import { PtCourseService } from './pt-course.service';

describe('PtCourseController', () => {
  let controller: PtCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PtCourseController],
      providers: [PtCourseService],
    }).compile();

    controller = module.get<PtCourseController>(PtCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
