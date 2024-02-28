import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog 1", content: "Content of the 1 blog..." }
  ]);
  
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]); 
  };
  
  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <h1>My Blog App</h1>
      <BlogList blogs={blogs} deleteBlog={deleteBlog} />
      <BlogForm addBlog={addBlog} />
      
    </div>
  );
}

export default App;
