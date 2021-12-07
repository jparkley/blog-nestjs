export interface Journal {
  id: string;
  title: string;
  content: string;
  status: JournalStatus;
  likes: number;
}

export enum JournalStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
