import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../redux/Slices/PostSlice';

const Home = () => {
    const posts = useSelector(getPosts);

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
            
            {postComponent}
        </div>
    )
}

export default Home
