import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get("http://localhost:5022/posts/")
            .then((res) => {
                setPosts(res.data);
                console.log(res.data);
                console.log(posts);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            New Posts
        </div>
    );
}

export default Post;
