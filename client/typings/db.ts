export interface IUser {
  id: number;
  nickname: string;
  email: string;
  status: string;
  profile: string;
}

export interface IPost {
  id: number;
  title: string;
  caption: string;
  createdAt: string;
}
