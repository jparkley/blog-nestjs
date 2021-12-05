export interface Post {
  id: string;
  title: string;
  content: string;
  status: PostStatus;
  likes: number;
}

export enum PostStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
