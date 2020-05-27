import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.profile}>
    <div className={s.profile_content}>
        <div className={s.profile_img}>profile_img</div>
        <div className={s.profile_logo}>profile_logo</div>
        <div className={s.discription}>
            <div className={s.name}>name</div>
            <div className={s.birth_day}>birth_day</div>
            <div className={s.birth_place}>birth_place</div>
            <div className={s.edu}>edu</div>
            <div className={s.site}>site</div>
        </div>
        <div className={s.my_posts}>
            <div className={s.add_new_post}></div>
            <div className={s.post}>post1</div>
            <div className={s.post}>post2</div>
            <div className={s.post}>post3</div>
        </div>
    </div>

</div>
    

}

export default Profile;