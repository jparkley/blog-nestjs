import { Module } from '@nestjs/common';
import { JournalsModule } from './journals/journals.module';

@Module({
  imports: [JournalsModule],
})
export class AppModule {}
