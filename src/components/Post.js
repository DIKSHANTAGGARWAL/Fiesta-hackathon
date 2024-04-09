import '../css/Post.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Post() {
    const [name, setName] = useState('')
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [commentsHeights, setCommentsHeights] = useState([]);

    const params = useParams()


    useEffect(() => {
        const name = localStorage.getItem('name')
        setName(name)
        getPosts();
        getComments();
        console.log(params.id)
    }, []);

    const getPosts = async () => {
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setPosts(result)
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const getComments = async () => {
        try {
            let result = await fetch(
                "https://jsonplaceholder.typicode.com/comments",
                {
                    method: "GET",
                }
            );
            result = await result.json();
            setComments(result)
            setCommentsHeights(new Array(result.length).fill('0'));
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    function showComments(postIndex) {
        const newHeights = [...commentsHeights];
        if (newHeights[postIndex] === '0') {
            newHeights[postIndex] = 'fit-content'; // Show comments
        } else {
            newHeights[postIndex] = '0'; // Hide comments
        }
        setCommentsHeights(newHeights);
    }


    function e(item, index) {
        if (item.userId == params.id) {
            return (
                <div className="post-container" key={item.id}>
                    <div className='post-details'>
                        <p className="post-userid">Post No: {index - (item.userId - 1) * 10 + 1}</p>
                        <h2 className="post-title">Title: {item.title}</h2>
                        <p className="post-body">{item.body}</p>
                    </div>
                    <div className="blank">
                        <div className="show-comments" onClick={() => showComments(index)}>
                            {commentsHeights[index] === '0' ? 'Show Comments' : 'Hide Comments'}
                        </div>
                    </div>
                    <div className="comments-container" style={{ height: commentsHeights[index] }}>
                        {comments
                            .filter(comment => comment.postId === item.id)
                            .map(comment => (
                                <div className="comment-container" key={comment.id}>
                                    
                                    <div className="comment-name">Name: {comment.name}</div>
                                    <div className="comment-body"> {comment.body}</div>
                                </div>
                            ))}
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>Posts</h2>
            <div className="posts-container">
                {
                    posts.map(e)
                }
            </div>

        </div>
    )
}

export default Post
