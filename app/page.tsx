import { PostItem } from "./components";
import { fetchPostAndUsers } from "./helpers";
import { COLORS } from "./themes/vars";

export default async function Home() {
  const post = await fetchPostAndUsers();

  return (
    <main className="py-10">
      <h1
        className="title text-center md:text-left text-4xl font-bold"
        style={{ color: COLORS.blue }}
      >
        Descubre los mejores posts
      </h1>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {post.map((postItem) => (
            <PostItem key={postItem.id} post={postItem} />
          ))}
        </div>
      </section>
    </main>
  );
}
