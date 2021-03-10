import { IPost } from '@typings/IPost';

export interface IUser {
  id: number;
  nickname: string;
  introduction: string;
  email: string;
  status: string;
  profile: string;
  Posts: IPost[];
}
