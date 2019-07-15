import { Test, TestingModule } from '@nestjs/testing';
import { PostSpecialService } from './post-special.service';

describe('PostSpecialService', () => {
  let service: PostSpecialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostSpecialService],
    }).compile();

    service = module.get<PostSpecialService>(PostSpecialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
