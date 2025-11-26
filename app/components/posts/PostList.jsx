'use client';

import { useState } from "react";
import LatestPost from "./LatestPost";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const normalizedPosts = Array.isArray(posts) ? posts.map(post => post.node || post) : [];

  if (normalizedPosts.length === 0) {
    return <p className="pl-4 py-4 text-gray-600">No posts available.</p>;
  }

  const latestPost = normalizedPosts[0];
  const restPosts = normalizedPosts.slice(1);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6); 
  };

  const visiblePosts = restPosts.slice(0, visibleCount);

  return (
    <>
      <div className="px-8 py-8 bg-gray-200 rounded-lg shadow mb-8">
        <LatestPost post={latestPost} />
      </div>

      {restPosts.length > 0 && (
        <div className="px-8 py-16 bg-gray-100 rounded-lg">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post, idx) => (
              <PostCard key={post.slug || idx} post={post} />
            ))}
          </div>

          {visibleCount < restPosts.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg
                hover:from-indigo-600 hover:to-purple-600 active:translate-y-0.5 transform
                transition duration-200 ease-in-out focus:outline-none focus-visible:ring-4
                focus-visible:ring-indigo-300"
              >
                Show more posts
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PostList;
