import { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <strong>{post.title}</strong> by {post.author?.name || 'Unknown'} — {post.category?.name || 'No Category'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
