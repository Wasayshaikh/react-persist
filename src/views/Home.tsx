import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    type postType = {
        posts: Array<{ id: number | string, title: string, body: string }>,
    };
    let posts: postType = {
        posts: [{
            id: 1, title: "Post One", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum atque at ab. Tempora eveniet, vero distinctio sequi harum beatae saepe molestiae aut, recusandae odio officia amet nam vitae quia!"
        },
        {
            id: 2, title: "Post two", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum atque at ab. Tempora eveniet, vero distinctio sequi harum beatae saepe molestiae aut, recusandae odio officia amet nam vitae quia!"
        }
        ]
    }
    const postComponent: React.ReactNode = posts.posts.map(post => (
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
