import { Stack } from "expo-router";


const _HomeStackLayout = () => {
    return <>
        <Stack
            screenOptions={{
                // headerShown: false
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
            }}
        >
            <Stack.Screen
                name='home'
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen
                name='products'
                options={{
                    title: 'Productos',
                    // animation: 'ios_from_right'
                }}
            />
            <Stack.Screen
                name='profile'
                options={{
                    title: 'Mi Perfil'
                }}
            />
            <Stack.Screen
                name='settings'
                options={{
                    title: 'Ajustes'
                }}
            />
        </Stack>
    </>;
}

export default _HomeStackLayout