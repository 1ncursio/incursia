export interface IUser {
  id: number;
  nickname: string;
  introduction: string;
  email: string;
  status: string;
  profile: string;
}

export interface IImage {
  id: number;
  src: string;
  createdAt: string;
}

export interface IComment {
  id: number;
  replyId: number;
  content: string;
  User: IUser;
  createdAt: string;
}

export interface ITag {
  id: number;
  name: string;
  createdAt: string;
}

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

export interface IEmoticon {
  id: number;
  name: string;
  src: string;
  createdAt: string;
  updatedAt: string;
}
