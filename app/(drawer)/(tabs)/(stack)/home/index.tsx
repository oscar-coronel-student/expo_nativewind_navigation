import { CustomButton } from "@/src/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import { View } from "react-native";


const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch( DrawerActions.toggleDrawer );
    }

    return <>
        <View className="px-5 pt-5">

            <Link href='/(drawer)/(tabs)/(stack)/products' asChild>
                <CustomButton text="Productos" className='mb-2' variant='contained' />
            </Link>
            
            <Link href='/(drawer)/(tabs)/(stack)/profile' asChild>
                <CustomButton text="Perfil" className='mb-2' variant='contained' color='secondary' />
            </Link>

            <Link href='/(drawer)/(tabs)/(stack)/settings' asChild>
                <CustomButton text="Ajustes" className='mb-2' variant='contained' color='tertiary' />
            </Link>

            <Link href='/(drawer)/(tabs)/(stack)/products' asChild>
                <CustomButton text="Salir" className='mb-2' variant='text-only' />
            </Link>

            <CustomButton
                text='Abrir Menú'
                onPress={ () => {
                    onToggleDrawer();
                }}
            />

            {/* <Link href={'/products'}>
                Productos
            </Link>
            <Link href={'/profile'} className="mt-5">
                Perfíl
            </Link>
            <Link href={'/settings'} className="mt-5">
                Configuraciones
            </Link> */}
        </View>
    </>;
}

export default HomeScreen