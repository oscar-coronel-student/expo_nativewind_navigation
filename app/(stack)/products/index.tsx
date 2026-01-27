import { products } from '@/src/store/products.store';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';


const ProductsScreen = () => {




    return (
        <View className='flex flex-1 px-4'>
            <FlatList
                data={products}
                keyExtractor={(item, index) => `product_list_${ item.id }`}
                renderItem={({ item }) => {
                    return <View className='mt-10'>
                        <Text className='text-2xl font-bold'>{ item.title }</Text>
                        <Text className='text-justify'>{ item.description }</Text>
                        
                        <View className='flex flex-row justify-between'>
                            <Text className='font-bold'>{ item.price }</Text>
                            <Link href='/' className='text-primary'>Ver detalles</Link>
                        </View>
                    </View>
                }}
            />
        </View>
    )
}

export default ProductsScreen