import { IComment } from '@typings/IComment';
import { IImage } from '@typings/IImage';
import { ITag } from '@typings/ITag';
import { IUser } from '@typings/IUser';

export interface IPost {
  id: number;
  title: string;
  caption: string;
  views: number;
  createdAt: string;
  User: IUser;
  Images: IImage[];
  Comments: IComment[];
  Likers: IUser[];
  Tags: ITag[];
}
