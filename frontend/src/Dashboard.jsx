import { useEffect, useState, useNavigate } from 'react';
import axios from 'axios';
export function Dashboard() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [singlePost, setSinglePost] = useState(null);

    // Fetch all posts on component mount
    useEffect(() => {
        axios
            .get("http://localhost:3000/posts")
            .then(res => setBlogPosts(res.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);


    const handleTitleClick = (id) => {
        axios
            .get(`http://localhost:3000/posts/${id}`)
            .then(res => setSinglePost(res.data))
            .catch(error => console.error(`Error fetching post with ID ${id}:`, error));
        navigate("/post")
    };
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.id}>
                        <button onClick={() => handleTitleClick(post.id)}>
                            {post.title}
                        </button>
                    </li>
                ))}
            </ul>
            {singlePost && (
                <div>
                    <h2>{singlePost.title}</h2>
                    <p>{singlePost.content}</p>
                </div>
            )}
        </div>
    );
}