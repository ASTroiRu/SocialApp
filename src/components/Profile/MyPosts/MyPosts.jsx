import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };
    return (
            <div className={s.my_posts}>
                
                {postElement}
                <div className={s.add_new_post}>
                        <input className={s.newPost} type="text" ref = {newPostElement} />
                        <button type="submit" onClick = {addPost}>SEND</button>
                </div>
            </div>
    );
}

export default MyPosts;