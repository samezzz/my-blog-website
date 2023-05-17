import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta()

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>
  }

  return (
    <section className="container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
      <h2 className="text-4xl font-bold dark:text-white/90">
        Blog
      </h2>
        <ul className="w-full list-none p-0">
        {
          posts.map(post => (
            <ListItem key={post.id} post={post} />
          ))
          }
        </ul>
    </section>
  )
}