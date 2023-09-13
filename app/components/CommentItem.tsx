import { Comment } from "@/interfaces";
import React from "react";
import { UserCard } from ".";

interface Props {
  comment: Comment;
}

export const CommentItem: React.FC<Props> = ({ comment }) => {
  const { body, email } = comment;

  return (
    <div className="border-b py-4 border-slate-300">
      <UserCard name={email.toLowerCase()} sizeAvatar={20} />
      <p>{body}</p>
    </div>
  );
};
