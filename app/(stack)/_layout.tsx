import { Stack } from "expo-router";


const _HomeStackLayout = () => {
    return <>
        <Stack>
            <Stack.Screen
                name='home'
                options={{
                    title: 'Inicio'
                }}
            />
            <Stack.Screen
                name='products'
                options={{
                    title: 'Productos'
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