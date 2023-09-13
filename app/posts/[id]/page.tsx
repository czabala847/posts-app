import React from "react";
import Link from "next/link";
import { MdSearchOff } from "react-icons/md";
import { CommentItem, UserCard } from "@/app/components";
import { fetchPostWithComments } from "@/app/helpers";
import { COLORS, SIZES } from "@/app/themes/vars";

export default async function PostPage({ params }: { params: { id: string } }) {
  const postData = await fetchPostWithComments(params.id);

  return (
    <main>
      {postData ? (
        <>
          <section className="my-10">
            <h1 className="title text-4xl font-bold uppercase">
              {postData.post.title}
            </h1>
            <article>
              <UserCard
                name={postData.user.name}
                username={postData.user.username}
              />
            </article>
          </section>

          <section className="px-4">
            <p>{`${postData.post.body}. ${postData.post.body}. ${postData.post.body}`}</p>
          </section>

          <section className="w-full md:w-4/5 mx-auto px-4 my-5">
            <h3 className="font-semibold" style={{ color: COLORS.blue }}>
              <span>{postData.comments.length}</span> Comentarios
            </h3>

            {postData.comments.map((comment) => (
              <CommentItem comment={comment} key={comment.id} />
            ))}
          </section>
        </>
      ) : (
        <div
          style={{ minHeight: `calc(100vh - ${SIZES.headerHeight})` }}
          className="flex flex-col items-center justify-center"
        >
          <MdSearchOff size={70} color={COLORS.lightGray} />
          <h1 className="text-2xl md:text-4xl font-bold title text-center mb-4">
            Oops, blog no encontrado
          </h1>
          <Link
            style={{ backgroundColor: COLORS.blue }}
            className="border rounded-md py-3 px-6 hover:bg-[#38aaaa] ease-linear duration-300 text-white"
            href="/"
          >
            Volver al inicio
          </Link>
        </div>
      )}
    </main>
  );
}
