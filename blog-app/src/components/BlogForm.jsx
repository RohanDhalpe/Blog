import React, { useState } from "react";

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="blogform">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={content} placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit">Add blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
