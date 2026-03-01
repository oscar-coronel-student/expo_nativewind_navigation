import { Drawer } from 'expo-router/drawer';


export default function DrawerLayout() {
    return <>
        <Drawer>
            <Drawer.Screen
                name='user/index'
                options={{
                    drawerLabel: 'Usuarios',
                    title: 'Lista de Usuarios'
                }}
            />
            <Drawer.Screen
                name='schedule/index'
                options={{
                    drawerLabel: 'Calendario',
                    title: `Calendario ${ new Date().getFullYear() }`
                }}
            />
        </Drawer>
    </>;
}
