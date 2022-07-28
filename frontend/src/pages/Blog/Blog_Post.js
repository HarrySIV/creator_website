import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../../shared/hooks/blog-hook';

const BlogPost = (props) => {
  const [id, setID] = useState(null);
  const { blogs } = useBlog();
  const { blogID } = useParams();
  useEffect(() => {
    setID(parseInt(blogID));
  }, [blogID]);
  if (!blogs || id === null) return <h1>Loading</h1>;
  return (
    <>
      <h2>{`${blogs[id].title}`}</h2>
      <p>{`${blogs[id].description}`}</p>
    </>
  );
};

export default BlogPost;
