import { Module } from '@nestjs/common';
import { ImageModule } from './Images/images.module';

@Module({
  imports: [ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
