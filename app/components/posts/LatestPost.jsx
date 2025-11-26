import Image from "next/image";
import { getFormattedDate } from "../../utils";
import Link from "next/link";

const LatestPost = ({ post }) => {
  if (!post) return null;

  // Safely get the image URL
  const imageUrl = post?.coverImage?.url?.trim() || null;

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="flex flex-col items-start mt-4">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-gray-500">
          Posted on {getFormattedDate(post.publishedAt)}
        </p>

        {/* Render image only if a valid URL exists */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post?.title || "Post Cover Image"}
            width={800}
            height={800}
            className="mt-4 object-cover rounded-md w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3 h-64"
          />
        )}

        <p className="mt-4 text-gray-700">{post.brief}</p>
      </article>
    </Link>
  );
};

export default LatestPost;
