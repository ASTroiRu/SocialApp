import React from 'react';
import s from './Profile.module.css';
import MyDiscription from './MyDiscription/MyDiscription';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
    return (
        < div className = { s.profile } >
           
            <div className={s.profile_content}>
                <MyDiscription />
                <MyPosts posts={props.posts}/>
            </div>

    </div >

);
}

export default Profile;