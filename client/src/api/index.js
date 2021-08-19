import axios from 'axios';

//const URL = "https://techranga-travel-blog-be.herokuapp.com/posts";
const URL_DEV = "http://localhost:5000/posts";

export const fetchPosts=()=>axios.get(URL_DEV);

export const createPost=(newPost)=>axios.post(URL_DEV,newPost);

export const updatePost=(id,postData)=>axios.patch(`${URL_DEV}/${id}`,postData);

export const deletePost=(id)=>axios.delete(`${URL_DEV}/${id}`);

export const likePost=(id)=>axios.patch(`${URL_DEV}/like/${id}`);