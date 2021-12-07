import { JournalStatus } from '../interfaces/journal.interface';

export class GetJournalsFilterDto {
  status?: JournalStatus;
  text?: string;
}
