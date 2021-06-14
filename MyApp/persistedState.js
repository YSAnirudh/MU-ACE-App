import React from 'react';
import {AsyncStorage} from 'react-native';

export default function usePersistedState(key, defaultValue) {
    console.log(AsyncStorage.getItem(key));
    const [state, setState] = React.useState(() => {
        const persistedState = AsyncStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : defaultValue;
    });
    React.useEffect(() => {
        AsyncStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
}
