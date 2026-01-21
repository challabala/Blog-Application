import axios from "axios";

const API_URL = "http://localhost:3001/blogs";

export const fetchBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createBlog = async (newBlog) => {
  const response = await axios.post(API_URL, newBlog);
  return response.data;
};
