export interface IUser {
  id: number;
  nickname: string;
  introduction: string;
  email: string;
  status: string;
  profile: string;
}

export interface IComment {
  id: number;
  replyId: number;
  content: string;
  User: IUser;
  createdAt: string;
}

export interface IPost {
  id: number;
  title: string;
  caption: string;
  createdAt: string;
  Comments: IComment[];
}

export interface IEmoticon {
  id: number;
  name: string;
  src: string;
  createdAt: string;
  updatedAt: string;
}
