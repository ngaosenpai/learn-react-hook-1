import React, { useState, useEffect } from 'react';
import PostsController from './PostsController';
import Axios from 'axios';
import PostItem from './post-item/PostItem';

const PostsContainer = () => {

    //state
    const [posts, setPosts] = useState([])
    const [text, setText] = useState('')
    const [postId, setPostId] = useState(text)

    //handle input change
    const textHandleChange = (e) => {
        setText(e.target.value)
    }
    //handle search button click
    const handleButtonClick = () => {
        setPostId(text)
    }

    //call api when first render or postId change
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => console.log(err))

    }, [postId])

    return (
        <div>
            <h2>Posts</h2>
            <PostsController 
                textValue = { text }
                textHandleChange = { textHandleChange }
                submit = { handleButtonClick }
            />
            <hr/>
            <ul style={{
                    listStyle : "none", 
                    padding : 0,
                    width : "70%",
                    margin : "auto"
                }}
            >
                {
                    Array.isArray(posts) 
                    ?  
                    posts.map(post => (
                        <PostItem
                            key = { post.id }
                            title = { post.title }
                            body = { post.body }
                        />
                    )) 
                    : 
                    <PostItem 
                        title = { posts.title }
                        body = { posts.body }
                    />
                }
            </ul>
        </div>
    );
}

export default PostsContainer;
