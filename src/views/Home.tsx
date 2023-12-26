import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddPost, getPosts } from '../redux/Slices/PostSlice';
import { authUser, login, logout } from '../redux/Slices/AuthSlice';
import { nanoid } from '@reduxjs/toolkit';

const Home = () => {
    const posts = useSelector(getPosts);
    const auth = useSelector(authUser);
    const dispatch = useDispatch();
    const handleClick = ()=> {
        
        dispatch(login());
        dispatch(AddPost({id:nanoid(),title:"asdf", body:"ASdf"}))
        

    }
    const logouts = ()=> {
        
        dispatch(logout());
        

    }
    
    console.log(auth)
    console.log(posts)
    const postComponent: React.ReactNode = posts.map(post => (
        <div className="p-3" key={post.id}>
            <Link to={`/post/${post.id}`}>
            <div className="border-2 text-[#111111] border-[#f2f2f2] bg-[#f7f5f5] p-4 rounded-lg shadow-lg shadow-gray-300">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <div className="py-2 text-justify">
                    <p>{post.body}
                    </p>
                </div>
            </div>
            </Link>
        </div>


    ))
    return (
        <div className="container lg:max-w-[1200px] m-auto p-4">
            <button onClick={()=>{
                handleClick()
            }}>Click </button>
             <button onClick={()=>{
                logouts()
            }}>logout </button>
            {postComponent}
        </div>
    )
}

export default Home
