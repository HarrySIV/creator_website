import { Link } from 'react-router-dom';
import { useBlog } from '../../shared/hooks/blog-hook';

const BlogContainer = () => {
  const { blogs } = useBlog();
  const displayBlogs = blogs.map((blog) => {
    return (
      <>
        <Link to={`/${blog.key}`} key={blog.key} className="no-link blog">
          <h2>{blog.title}</h2>
          <h4>{blog.description}</h4>
        </Link>
      </>
    );
  });
  return <div className="blog-container">{displayBlogs}</div>;
};

export default BlogContainer;
