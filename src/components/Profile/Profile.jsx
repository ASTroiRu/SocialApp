import React from 'react';
import s from './Profile.module.css';
import MyDiscription from './MyDiscription/MyDiscription';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        < div className = { s.profile } >
            Profile.
            <div className={s.profile_content}>
                <MyDiscription />
                <MyPosts />
            </div>

    </div >

);
}

export default Profile;