"use client"
import { API_URL } from '../lib/API_URL.js';
import styles from '../page.module.css';
import { useEffect, useState } from 'react';

function GetCommentsComponent({post}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(info => setComments(info.comments));
    }, [post]);

    return (
        <div className={styles.showCommentsContainer}>
            {comments.map((comment) => (
                <li key={comment.id} className={styles.commentText}>🗨️ {comment.text}</li>
            ))}
        </div>
    );
}

export default GetCommentsComponent;
