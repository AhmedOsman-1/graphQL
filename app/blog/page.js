import PostList from "../components/posts/PostList";
import { getAllPosts } from "../queries/blog-data";

import React from 'react'

const BlogPage = async () => {

   const posts = await getAllPosts();

  if (!posts || posts.length === 0) return <p>No posts found</p>;
  return (
    <PostList posts={posts} />
  )
}

export default BlogPage