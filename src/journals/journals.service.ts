import { Injectable } from '@nestjs/common';
import { Journal, JournalStatus } from './interfaces/journal.interface';
import { v1 as uuid } from 'uuid';
import { CreateJournalDto } from './dto/create-journal.dto';

@Injectable()
export class JournalsService {
  private journals: Journal[] = [
    {
      id: '1234234',
      title: 'Christmas Tree',
      content: 'Will be up',
      status: JournalStatus.PUBLIC,
      likes: 0,
    },
  ];

  getJournals(): Journal[] {
    return this.journals;
  }

  getJournal(id: string): Journal {
    return this.journals.find((journal) => journal.id === id);
  }

  createJournal(createJournalDto: CreateJournalDto): Journal {
    const { title, content } = createJournalDto;
    const id = uuid();
    const journal = {
      id: id,
      title: title,
      content: content,
      status: JournalStatus.PUBLIC,
      likes: 0,
    };
    this.journals.push(journal);
    return journal;
  }

  updateJournal(id: string, createJournalDto: CreateJournalDto): Journal {
    const { title, content, status, likes } = createJournalDto;
    let toUpdate = this.journals.find((journal) => journal.id === id);
    const stateToUpdate = status ? JournalStatus.PRIVATE : JournalStatus.PUBLIC;
    toUpdate = { id, title, content, status: stateToUpdate, likes };
    return toUpdate;
  }

  deleteJournal(id: string): void {
    this.journals = this.journals.filter((journal) => journal.id !== id);
  }
}
