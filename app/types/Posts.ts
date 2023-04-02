export type PostsType = {
  title: string;
  id: string;
  createdAt?: string;
  comments?: {
    id: string;
    message: string;
    postId: string;
    userId: string;
    createdAt: string;
  }[];
  user: {
    name: string;
    image: string;
  };
};
