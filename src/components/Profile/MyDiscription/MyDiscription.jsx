import React from 'react';
import s from './MyDiscription.module.css';

const MyDiscription = () => {
    return <div className={s.profile}>
        <div className={s.profile_content}>
            <div className={s.myDiscription}>
                <div className={s.profile_img}>profile_img</div>
                <div className={s.profile_logo}>profile_logo</div>
                <div className={s.discription}>
                    <div className={s.name}>name</div>
                    <div className={s.birth_day}>birth_day</div>
                    <div className={s.birth_place}>birth_place</div>
                    <div className={s.edu}>edu</div>
                    <div className={s.site}>site</div>
                </div>
            </div>
        </div>

    </div>


}

export default MyDiscription;