import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

export default async function usePersistedState(key, defaultValue) {
    // const parseAsync = Promise.me
    const [store, setStore] = useState();
    AsyncStorage.getItem(key, (err, res) => {
        if (err) {
            console.log(err);
        }
        setStore(res);
    });
    const pState = store ? JSON.parse(store) : defaultValue;
    const [state, setState] = React.useState(pState);
    React.useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(defaultValue));
    }, [state, key]);
    return [state];
}
