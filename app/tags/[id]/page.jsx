import { getAllPosts } from "../../queries/blog-data";
import PostList from "../../components/posts/PostList";
import Link from "next/link";

export default async function PostByTagPage({ params }) {
  const { id } = await params; // no await needed

  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return <p className="p-4">No posts available.</p>;
  }

  
  const taggedPosts = posts.filter(post =>
    post.node?.tags?.some(tag => tag.id === id)
  );

  
  const foundTag = taggedPosts[0]?.node?.tags?.find(tag => tag.id === id);

  return (
    <div className="flex flex-col">
      <div className="flex pt-4 pl-4 mb-8 text-2xl">
        <p className="mr-2">
          Posts tagged with: {foundTag ? foundTag.name : "Tag not found"}
        </p>
        <Link className="underline" href="/blog">See all posts</Link>
      </div>

      {taggedPosts.length > 0 ? (
        <PostList posts={taggedPosts} />
      ) : (
        <p className="pl-4">No posts found for this tag.</p>
      )}
    </div>
  );
}
