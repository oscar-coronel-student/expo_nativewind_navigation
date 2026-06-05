import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";

interface Props extends DrawerContentComponentProps {
}

export const DrawerContent = (props: Props) => {

    const {
        state,
        navigation,
        descriptors
    } = props;

    return <DrawerContentScrollView
        { ...props }
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}
    >
        <View
            className='justify-center items-center bg-primary rounded-lg py-5'
        >
            <View
                className='justify-center items-center bg-white rounded-full h-20 w-20'
            >
                <Text className='text-2xl font-bold'>OC</Text>
            </View>
        </View>
        <DrawerItemList { ...props } />
        {/* {
            state.routes.map( (route) => {
                const { drawerLabel, drawerIcon } = descriptors[route.key].options;
                return <Pressable
                    key={ route.key }
                    onPress={() => {
                        // Alert.alert('Navegando a ' + route.name);
                        // navigation.navigate( route.name );
                    }}
                    className='active:opacity-60'
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            paddingVertical: 20,
                            borderBottomColor: 'lightgray'
                        }}
                    >
                        { drawerIcon && drawerIcon({ color: 'black', size: 30, focused: false }) }
                        <View
                            style={{
                                marginLeft: 10,
                            }}
                        >
                            <Text style={{ fontSize: 18 }} >{ drawerLabel?.toString() }</Text>
                        </View>
                    </View>
                </Pressable>
            })
        } */}
    </DrawerContentScrollView>;
}
