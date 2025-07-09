import { useEffect, useState } from 'react';
import axios from 'axios';

const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Authors</h2>
            <ul>
                {authors.map(author => (
                    <li key={author._id}>{author.name} ({author.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default Authors;