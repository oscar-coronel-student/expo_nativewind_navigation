import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { Text, View } from "react-native";


interface Props extends DrawerContentComponentProps {
}

export const DrawerContent = ({
    state,
    navigation,
    descriptors
}: Props) => {

    console.log('hola mundo')

    return <DrawerContentScrollView
        style={{
            flex: 1,
            backgroundColor: 'red'
        }}
    >
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <Text>asdfs</Text>
        </View>
    </DrawerContentScrollView>;
}
