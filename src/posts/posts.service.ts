import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
  private posts = [];

  getPosts(): Post[] {
    return this.posts;
  }
}
