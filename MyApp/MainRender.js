import React, {useState, useEffect} from 'react';
import LoginScreen from './screens/LoginScreen';
import DiscussionForum from './screens/DiscussionForum';
import Registration from './screens/Registration';
import usePersistedState from './persistedState';
import BeforeLogin from './screens/BeforeLogin';

function MainRender() {
    const [isLogin, setIsLogin] = useState(false); //usePersistedState('isLogin', true);
    const [userId, setUserId] = useState('60c5dd659465cf0ce4497c08');
    const setLogin = (bool) => {
        setIsLogin(bool);
    };

    const setUId = (uId) => {
        setUserId(uId);
    };
    const renderLogin = () => {
        // console.log(userId);
        if (isLogin) {
            return (
                <BeforeLogin
                    isLogin={isLogin}
                    setIsLogin={setLogin}
                    setUserId={setUId}
                />
            );
        } else {
            return (
                <DiscussionForum
                    isLogin={isLogin}
                    setIsLogin={setLogin}
                    userId={userId}
                    setUserId={setUId}
                />
            );
        }
    };

    return <>{renderLogin()}</>;
}

export default MainRender;
