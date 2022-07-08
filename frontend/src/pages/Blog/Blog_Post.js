import { useEffect, useState } from 'react';
import { useBlog } from '../../shared/hooks/blog-hook';

const BlogPost = () => {
  const [blogID, setBlogID] = useState(null);
  const { blogs } = useBlog();
  useEffect(() => {
    setBlogID(parseInt(window.location.pathname[1]));
  }, [blogID]);
  if (!blogs || blogID === null) return <h1>Loading</h1>;
  return (
    <>
      <h2>{`${blogs[blogID].title}`}</h2>
      <p>{`${blogs[blogID].description}`}</p>
    </>
  );
};

export default BlogPost;
