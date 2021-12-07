import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Journal } from './interfaces/journal.interface';
import { JournalsService } from './journals.service';
import { CreateJournalDto } from './dto/create-journal.dto';
import { identity } from 'rxjs';

@Controller('journals')
export class JournalsController {
  constructor(private journalService: JournalsService) {}

  @Get()
  getJournals(): Journal[] {
    return this.journalService.getJournals();
  }

  @Get('/:id')
  getJournal(@Param('id') id): Journal {
    return this.journalService.getJournal(id);
  }

  @Post()
  //createPost(@Body('title') title, @Body('content') content): Journal {
  createPost(@Body() createJournalDto: CreateJournalDto): Journal {
    return this.journalService.createJournal(createJournalDto);
  }

  @Put('/:id')
  updateJournalById(
    @Param('id') id,
    @Body() createJournalDto: CreateJournalDto,
  ): Journal {
    return this.journalService.updateJournal(id, createJournalDto);
  }

  @Delete('/:id')
  deleteJournal(@Param('id') id): void {
    this.journalService.deleteJournal(id);
  }
}
