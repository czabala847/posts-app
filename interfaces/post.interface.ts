import { User } from ".";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostUser extends Post {
  user?: User;
}
