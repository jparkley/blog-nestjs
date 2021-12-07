import { IsNotEmpty } from 'class-validator';

export class CreateJournalDto {
  id?: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
  status: boolean;
  likes: number;
}
