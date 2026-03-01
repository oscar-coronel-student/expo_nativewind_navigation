import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';

import './../assets/styles/global.css';

SplashScreen.preventAutoHideAsync();

const _Layout = () => {

    const [fontsLoaded, fontsError] = useFonts({
        'Pompiere-Regular': require('./../assets/fonts/Pompiere-Regular.ttf'),
        'MeaCulpa-Regular': require('./../assets/fonts/MeaCulpa-Regular.ttf'),
    });


    useEffect(() => {
        const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });

        return () => {
            subscription.remove();
        }
    }, []);


    useEffect(() => {
        if(fontsError) throw fontsError;

        if(fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, fontsError])

    if(!fontsLoaded) return null;

    return <>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    </>;
}

export default _Layout;