"use client"
import Link from "next/link";
import { useEffect, useState } from 'react';

export const metadata = {
    title: 'Posts Page ',
}
function PostCard({ post }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card d-flex flex-column h-100">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.body}</p>
                </div>
                {/* <div className="card-footer mt-auto">
                    <Link href={`/posts/${post.id}`}>
                        <button className="btn btn-primary">
                            Read More
                        </button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
}
function PostPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                // console.log(json); // Log the fetched data to the console
                setPosts(json); // Update the state with the fetched data
            });
    }, []);

    useEffect(() => {
        console.log("posts", posts); // Now you can see the updated value of posts here
    }, [posts]);

    return (

        <div className="container my-4">
            <h1 className="text-danger"> # fetching data with client side </h1>
            <Link href={"/posts/users"}>
                <button className="btn btn-primary">
                    Go to the Users Page
                </button>
            </Link>
            <div className="row row-cols-1 row-cols-md-3">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

        </div>
    )
}

export default PostPage;
