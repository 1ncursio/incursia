import { IUser } from '@typings/IUser';

export interface IComment {
  id: number;
  replyId: number;
  content: string;
  User: IUser;
  createdAt: string;
}
