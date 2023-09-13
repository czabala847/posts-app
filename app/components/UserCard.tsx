import React from "react";
import { FaCircleUser } from "react-icons/fa6";

interface Props {
  name: string;
  username?: string;
  sizeAvatar?: number;
}

export const UserCard: React.FC<Props> = ({
  name,
  username,
  sizeAvatar = 30,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <FaCircleUser size={sizeAvatar} color="rgba(0,0,0,0.2)" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        {username && (
          <span className="text-sm text-slate-600">@{username}</span>
        )}
      </div>
    </div>
  );
};
