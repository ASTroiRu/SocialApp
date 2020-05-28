import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                {props.message}
                <div>
                    <span> Like= {props.likesCount} </span>
                </div>

            </div>
        </div>
    );

}

export default Post;