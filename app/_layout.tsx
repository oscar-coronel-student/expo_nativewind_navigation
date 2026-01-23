import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from "expo-router";

import { useEffect } from 'react';
import { BackHandler } from 'react-native';
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
        <Slot />
        {/* <Stack /> */}
    </>;
}

export default _Layout;