import React from 'react';
import s from './MyDiscription.module.css';

const MyDiscription = () => {
    return (
        <div className={s.myProfile}>
            
                <div className={s.profile_logo}>profile_logo</div>
                <div className={s.discription}>
                    <div className={s.discriptionText}>
                        <div className={s.parametr}>
                            <div>Name</div>
                            <div>Birth day</div>
                            <div>Birth place</div>
                            <div>Edu</div>
                            <div>Site</div>
                        </div>
                        <div className={s.personData}>
                            <div>Alex</div>
                            <div>11.04.1981</div>
                            <div>Dnepropetrovsk</div>
                            <div>no</div>
                            <div>no</div>
                        </div>

                        
                    </div>
                </div>
            
        </div>
    
    );


}

export default MyDiscription;