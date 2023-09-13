import { Comment, Post, PostUser, User } from "@/interfaces";

export const fetchPostAndUsers = async (): Promise<PostUser[]> => {
  try {
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts: Post[] = await postsResponse.json();

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users: User[] = await usersResponse.json();

    const data: PostUser[] = posts.map((post) => {
      const userFound = users.find(({ id }) => id === post.userId);

      if (userFound) {
        return { ...post, user: userFound };
      }

      return post;
    });

    return data.slice(0, 20);
  } catch (error) {
    console.error("Error getPostAndUsers", error);
    return [];
  }
};

export const fetchPostWithComments = async (
  postId: string
): Promise<{
  post: Post;
  user: User;
  comments: Comment[];
} | null> => {
  const postsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post: Post = await postsResponse.json();

  if (!post.userId) return null;

  const userPromise: Promise<User> = fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  ).then((response) => response.json());

  const commentsPromise: Promise<Comment[]> = fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
  ).then((response) => response.json());

  const [user, comments] = await Promise.all([userPromise, commentsPromise]);

  return {
    post,
    user,
    comments,
  };
};
