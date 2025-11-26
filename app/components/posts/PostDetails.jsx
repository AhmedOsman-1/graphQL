import React from 'react';
import Image from 'next/image';
import Tag from '../posts/tags/Tag';

const PostDetails = ({ post }) => {
  if (!post) return <p>Post not found</p>;

  return (
    <article className="px-4 md:px-8 py-6">
      <Image
        className="rounded-lg w-full"
        width={500}
        height={500}
        alt={post.title || "Post Cover Image"}
        src={post.coverImage?.url || "/placeholder.png"}
      />

      <h1 className="text-4xl font-bold pt-5">{post.title}</h1>
      <h2 className="text-xl pt-3 pb-3">{post.subtitle}</h2>
      <div className='flex mb-4'>


      {post?.tags.map((tag) => (
        <Tag key={tag?.id} tag={tag} />
      ))}
      </div>

      <div
        className="prose max-w-none post-details"
        dangerouslySetInnerHTML={{ __html: post.content?.html || "<p>No content</p>" }}
      />
    </article>
  );
};

export default PostDetails;
