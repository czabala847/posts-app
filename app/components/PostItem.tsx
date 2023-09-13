import React from "react";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

import { PostUser } from "@/interfaces";
import { COLORS } from "../themes/vars";

interface Props {
  post: PostUser;
}

export const PostItem: React.FC<Props> = ({ post }) => {
  const { body, title, user } = post;
  return (
    <Link
      href={`posts/${post.id}`}
      className="flex flex-col justify-between bg-white my-2 box-border p-4 rounded-md shadow-sm hover:shadow-lg ease-in duration-300"
    >
      <div>
        <BiSolidQuoteLeft size={40} color="rgba(0,0,0,0.1)" />
        <h3 className="font-semibold leading-5">{title}</h3>
        <p className="text-sm italic py-2">{body}</p>
      </div>
      <div className="flex items-center justify-between mt-2 border-t pt-2">
        <div className="flex items-center gap-2">
          <FaCircleUser color="rgba(0,0,0,0.5)" />
          <span>{user && user.name}</span>
        </div>
        <BsArrowRight color={COLORS.blue} />
      </div>
    </Link>
  );
};
