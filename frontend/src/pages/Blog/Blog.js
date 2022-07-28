import BlogContainer from './Blog_Container';
import './Blog.css';
import { useBlog } from '../../shared/hooks/blog-hook';

const Blog = () => {
  const { blogs, blogDeleteHandler } = useBlog();

  return <BlogContainer blogs={blogs} onDeleteBlog={blogDeleteHandler} />;
};

export default Blog;
