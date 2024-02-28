import React from "react";

const BlogList = ({ blogs, deleteBlog }) => {
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <div>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <button onClick={() => deleteBlog(blog.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
