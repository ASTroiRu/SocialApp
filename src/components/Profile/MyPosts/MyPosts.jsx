import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return <div className={s.profile}>
        <div className={s.profile_content}>
            <div className={s.my_posts}>
                <div className={s.add_new_post}>
                    <textarea></textarea>
                    <button type="submit">SEND</button>
                </div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>

    </div>


}

export default MyPosts;