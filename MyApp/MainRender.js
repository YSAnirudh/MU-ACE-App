import React, {useState, useEffect} from 'react';
import LoginScreen from './screens/LoginScreen';
import DiscussionForum from './screens/DiscussionForum';
import Registration from './screens/Registration';
import usePersistedState from './persistedState';
import BeforeLogin from './screens/BeforeLogin';
import LoadingScreen from './screens/LoadingScreen';

function MainRender() {
    const [isLogin, setIsLogin] = useState(false); //usePersistedState('isLogin', true);
    const [userId, setUserId] = useState('60cb2b96f6c7a700228126f6'); //'60c5dd659465cf0ce4497c08'
    const setLogin = (bool) => {
        setIsLogin(bool);
    };
    const [isLoading, setIsLoading] = useState(false);

    const setUId = (uId) => {
        setUserId(uId);
    };
    const renderLogin = () => {
        // console.log(userId);
        if (isLogin) {
            return isLoading ? (
                // <LoadingScreen />
                <></>
            ) : (
                <BeforeLogin
                    isLogin={isLogin}
                    setIsLogin={setLogin}
                    setUserId={setUId}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            );
        } else {
            return (
                <DiscussionForum
                    isLogin={isLogin}
                    setIsLogin={setLogin}
                    userId={userId}
                    setUserId={setUId}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            );
        }
    };

    return <>{renderLogin()}</>;
}

export default MainRender;
