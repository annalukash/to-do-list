import React from 'react';
import './post-list.css'

import PostListItem from '../post-list-item/post-list-item';

const PostList = ({posts, onToggle, removeItem}) => {  
    const listOfPosts = posts.map((post) => {
        const {id, ...postProps} = post;

        return (
            <li key={id}>
                <PostListItem 
                    {...postProps}
                    onToggle = {() => onToggle(id)}
                    removeItem = {() => removeItem(id)}
                ></PostListItem>
            </li>
        )
    });

    return (
        <ul className="post-list">
            {listOfPosts}
        </ul>
    )
}

export default PostList;