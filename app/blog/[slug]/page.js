import { getPost } from "../../queries/blog-data";
import PostDetails from "../../components/posts/PostDetails";

const BlogDetailsPage = async ({ params }) => {
  const resolvedParams = await params; 
  const slug = resolvedParams?.slug;

  if (!slug) return <p>Invalid post slug</p>;

  let post;
  try {
    post = await getPost(slug);
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return <p>Failed to load post</p>;
  }

  if (!post) return <p>Post not found</p>;

  return <PostDetails post={post} />;
};

export default BlogDetailsPage;
