import { Stack } from "expo-router";


const _HomeStackLayout = () => {
    return <>
        <Stack
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: 'white'
                },
                headerTitleStyle: {
                    color: 'black',
                },
                headerTitleAlign: 'center',
                contentStyle: {
                    backgroundColor: 'white'
                },
                animation: 'ios_from_right'
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    // title: 'Productos',
                    // animation: 'ios_from_right'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Mi Perfil'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Ajustes'
                }}
            />
        </Stack>
    </>;
}

export default _HomeStackLayout