import { getFormattedDate } from "../../utils"
import Link from "next/link"
import Image from "next/image"

const PostCard = ({ post }) => {
  // Safely get cover image URL, ignore empty strings
  const imageUrl = post?.coverImage?.url?.trim() || null;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blog/${post.slug}`}>
        {/* Render image only if a valid URL exists */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post?.title || "Post Cover Image"}
            width={800}
            height={500}
            className="mt-4 object-cover rounded-md w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
          />
        )}

        <h3 className="text-xl font-semibold p-4">{post.title}</h3>

        <p className="text-gray-500 p-4">
          Posted on {getFormattedDate(post.publishedAt)}
        </p>

        <p className="mt-2 text-gray-700 p-4">{post.brief}</p>
      </Link>
    </div>
  )
}

export default PostCard
