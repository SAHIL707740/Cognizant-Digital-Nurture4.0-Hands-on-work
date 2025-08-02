import React from 'react';

function BlogDetails() {
  const blogs = [
    { title: 'React Basics', date: 'Aug 1, 2025' },
    { title: 'Hooks in Depth', date: 'Aug 2, 2025' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <p><strong>{blog.title}</strong> - {blog.date}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
