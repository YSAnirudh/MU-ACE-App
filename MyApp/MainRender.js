import React, {useState, useEffect} from 'react';
import LoginScreen from './screens/LoginScreen';
import DiscussionForum from './screens/DiscussionForum';
import Registration from './screens/Registration';
import usePersistedState from './persistedState';

function MainRender() {
    const [isLogin, setIsLogin] = usePersistedState('isLogin', true);
    const setLogin = (bool) => {
        setIsLogin(bool);
    };
    const renderLogin = () => {
        console.log(isLogin);
        if (isLogin) {
            return <BeforeLogin isLogin={isLogin} setIsLogin={setLogin} />;
        } else {
            return <DiscussionForum isLogin={isLogin} setIsLogin={setLogin} />;
        }
    };

    return <></>;
}

export default MainRender;
