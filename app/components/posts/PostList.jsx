import { getAllPosts } from "../../queries/blog-data";
import LatestPost from "./LatestPost";
import PostCard from "./PostCard"; // make sure this exists

const PostList = async () => {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) return <p>No posts found</p>;

  const latestPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <>
      <div className="px-8 py-8 bg-gray-200">
        <LatestPost post={latestPost} />
      </div>

      {restPosts.length > 0 && (
        <div className="px-8 py-16 bg-gray-100">
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post, index) => (
              <PostCard key={post.slug || index} post={post?.node} />
            ))}
          </div>

          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
            bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg
            hover:from-indigo-600 hover:to-purple-600 active:translate-y-0.5 transform
            transition duration-200 ease-in-out focus:outline-none focus-visible:ring-4
            focus-visible:ring-indigo-300"
            type="button"
          >
            Show more post
          </button>
        </div>
      )}
    </>
  );
};

export default PostList;
