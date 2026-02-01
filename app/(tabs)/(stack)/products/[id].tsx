import { General } from "@/src/helpers/general";
import { IProduct } from "@/src/interfaces/product.interface";
import { products } from "@/src/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";


interface ProductScreenProps {
}

const ProductScreen = ({
}: ProductScreenProps) => {

    const { id } = useLocalSearchParams<{id: string}>();

    const [product, setProduct] = useState<IProduct|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const getProductById: (id: string) => Promise<void> = async (id: string) => {
        await General.sleep();
        const productFind: IProduct | null = products.find(product => product.id === id) ?? null;
        setProduct(productFind);
        setIsLoading(false)
    }


    useEffect(() => {
        getProductById(id);
    }, []);


    if(!isLoading && !product){
        return <Redirect href={'/products'} />
    }


    return <View className="px-5 mt-2">
        {
            !!isLoading
            ? <>
                <View>
                    <Text>Cargando....</Text>
                </View>
            </>
            : <>
                <Text className="font-bold text-2xl">{ product!.title }</Text>
                <Text className="text-justify">{ product!.description }</Text>
                <Text className="font-bold">$ { product!.price }</Text>
            </>
        }
    </View>;
}

export default ProductScreen;