import { DrawerContent } from '@/src/components/shared/DrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';


export default function DrawerLayout() {

    return <>
        <Drawer
            drawerContent={ DrawerContent }
            screenOptions={{
                // headerShown: false,
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerActiveTintColor: 'indigo',
                headerShadowVisible: false,
                sceneStyle: {
                    backgroundColor: 'white'
                },
            }}
        >
            <Drawer.Screen
                name='(tabs)'
                options={{
                    headerShown: false,
                    drawerLabel: 'Inicio',
                    title: `Inicio`,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='home-outline'
                            color={ color }
                            size={ size }
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='user/index'
                options={{
                    drawerLabel: 'Usuarios',
                    title: 'Lista de Usuarios',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='person-circle-outline'
                            color={ color }
                            size={ size }
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='schedule/index'
                options={{
                    drawerLabel: 'Calendario',
                    title: `Calendario ${ new Date().getFullYear() }`,
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            name='calendar-outline'
                            color={ color }
                            size={ size }
                        />
                    )
                }}
            />
        </Drawer>
    </>;
}
