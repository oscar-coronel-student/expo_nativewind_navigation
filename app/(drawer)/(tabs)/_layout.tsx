import { HeaderLeft } from '@/src/components/shared/HeaderLeft';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { View } from 'react-native';


const _TabsLayout = () => {
    return <>
        <Tabs
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'red',
                // tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    
                    switch( route.name ){
                        case 'home/index':
                            return <Ionicons name="home-outline" size={ size } color={ color } />;
                        case 'favorites/index':
                            return <Ionicons name="star-outline" size={ size } color={ color } />;
                        case '(stack)':
                            return <Ionicons name="person-add-outline" size={ size } color={ color } />;
                        default:
                            return <></>;
                    }
                },
                headerLeft: ({ tintColor, canGoBack }) => {
                    return <View
                        className='pl-4'
                    >
                        <HeaderLeft tintColor={tintColor} canGoBack={canGoBack} />
                    </View>
                }
            })}
        >
            <Tabs.Screen name='(stack)' options={{ title: 'Stack', headerShown: false }} />
            <Tabs.Screen name="home/index" options={{ title: 'Home' }} />
            <Tabs.Screen name="favorites/index" options={{ title: 'Favoritos' }}  />
        </Tabs>
    </>;
}

export default _TabsLayout