import { useState, useEffect } from 'react';

export const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(
    () =>
      setBlogs([
        {
          title: 'A short rant',
          description: `Here's some text`,
          tags: ['tag1, tag2'],
          key: 0,
        },
        {
          title: 'Post 2',
          description: `Here's some more text!`,
          tags: ['tag1, tag3'],
          key: 1,
        },
        {
          title: 'The Final Blog',
          description: `Here's some amazing text`,
          tags: ['tag2, tag3'],
          key: 2,
        },
      ]),
    []
  );

  return { blogs };
};
