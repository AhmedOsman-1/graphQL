import { getFormattedDate } from "../../utils"
import Link from "next/link"
import Image from "next/image"

const PostCard = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
         <Link href={`/blog/${post.slug}`}>
         
          <Image
                 className="mt-4 object-cover rounded-md w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
                 width={500}
                 height={500}
                 src={post?.coverImage?.url || "/placeholder.png"}
                 alt={post?.title || "Post Cover Image"}
               />
               <h3 className="text-xl font-semibold p-4">
                 {post.title}
               </h3>
               <p className="text-gray-500 p-4">
                    Posted on {getFormattedDate(post.publishedAt)}
               </p>
               <p className="mt-2 text-gray-700 p-4">{post.brief}</p>
         </Link>
    </div>
  )
}

export default PostCard