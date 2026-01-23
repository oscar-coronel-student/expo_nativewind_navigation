import { CustomButton } from "@/src/components/shared/CustomButton";
import { Link } from "expo-router";
import { View } from "react-native";


const HomeScreen = () => {

    return <>
        <View className="px-5 pt-5">

            <Link href='/products' asChild>
                <CustomButton text="Productos" className='mb-2' variant='contained' />
            </Link>
            
            <Link href='/profile' asChild>
                <CustomButton text="Perfil" className='mb-2' variant='contained' color='secondary' />
            </Link>

            <Link href='/settings' asChild>
                <CustomButton text="Ajustes" className='mb-2' variant='contained' color='tertiary' />
            </Link>

            <Link href='/products' asChild>
                <CustomButton text="Salir" className='mb-2' variant='text-only' />
            </Link>

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