import { Injectable, NotFoundException } from '@nestjs/common';
import { Journal, JournalStatus } from './interfaces/journal.interface';
import { v1 as uuid } from 'uuid';
import { CreateJournalDto } from './dto/create-journal.dto';
import { GetJournalsFilterDto } from './dto/get-journals-filter';

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

  getFilteredJournals(filterDto: GetJournalsFilterDto): Journal[] {
    let journals = this.getJournals(); // First, get all journals
    const { status, text } = filterDto;

    if (status) {
      journals = journals.filter((journal) => journal.status === status);
    }

    if (text) {
      journals = journals.filter((journal) => {
        if (
          journal.title
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase()) ||
          journal.content.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    return journals;
  }

  getJournal(id: string): Journal {
    const found = this.journals.find((journal) => journal.id === id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
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
    const found = this.getJournal(id);
    if (!found) {
      throw new NotFoundException();
    }
    this.journals = this.journals.filter((journal) => journal.id !== found.id);
  }
}
