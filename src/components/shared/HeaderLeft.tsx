import { HeaderLeftProps } from "@/src/interfaces/navigation/general.navigation.interface";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { View } from "react-native";



export const HeaderLeft = ({ tintColor, canGoBack }: HeaderLeftProps) => {

    const navigation = useNavigation();
    
    const onHeaderLeftPress = (canGoBack: boolean) => {
        if (canGoBack) {
            router.back();
        } else {
            navigation.dispatch( DrawerActions.toggleDrawer );
        }
    }

    return <>
        <View
            className='mr-5'
        >
            <Ionicons
                name={ canGoBack ? 'arrow-back' : 'menu' }
                size={24}
                color={tintColor}
                onPress={() => onHeaderLeftPress(canGoBack ?? false)}
            />
        </View>
    </>;
}