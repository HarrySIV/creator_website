import { useState, useEffect } from 'react';
import { useHttpClient } from './http-hook';

export const useBlog = () => {
  const backendURL = process.env.BACKEND_URL;
  const [blogs, setBlogs] = useState([]);
  const [loadedBlogs, setLoadedBlogs] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseData = await sendRequest(`${backendURL}`);
        setBlogs(responseData);
      } catch (error) {}
    };
    fetchBlogs();
  }, [sendRequest]);

  const blogDeleteHandler = (deletedBlogID) => {
    setLoadedBlogs((prevBlogs) => {
      prevBlogs.filter((blog) => blog.id !== deletedBlogID);
    });
  };

  return { blogs, blogDeleteHandler };
};
