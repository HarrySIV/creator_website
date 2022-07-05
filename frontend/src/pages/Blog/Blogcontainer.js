import Card from '../../shared/components/UIElements/Card'

const blogs = [
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
];

const BlogContainer = () => {
  const displayBlogs = blogs.map((blog) => {
    return (
      <Card key={blog.key} className='mapped'>
        <h2>{blog.title}</h2>
        <h4>{blog.description}</h4>
      </Card>
    );
  });
  return <div className='blog-container'>{displayBlogs}</div>;
};

export default BlogContainer;
