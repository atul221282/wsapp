import { Module } from '@nestjs/common';
import { PostSpecialService } from './post-special.service';

@Module({
  providers: [PostSpecialService],
  exports: [PostSpecialService],
})
export class PostSpecialModule {}
