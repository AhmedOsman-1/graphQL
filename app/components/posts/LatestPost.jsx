import Image from "next/image";
import { getFormattedDate } from "../../utils";
import Link from "next/link";
const LatestPost = ({ post }) => {
  if (!post) return null;

  return (
    <Link href={`/blog/${post.slug}`}>

    <article className="flex flex-col items-start mt-4">
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-gray-500">
        Posted on {getFormattedDate(post.publishedAt)}
      </p>

      <Image
        className="mt-4 object-cover rounded-md w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
        width={500}
        height={500}
        src={post?.coverImage?.url || "/placeholder.png"}
        alt={post?.title || "Post Cover Image"}
      />

      <p className="mt-4 text-gray-700">{post.brief}</p>
    </article>
        </Link>
  );
};

export default LatestPost;
