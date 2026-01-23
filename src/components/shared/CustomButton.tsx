import { Pressable, PressableProps, Text } from 'react-native';

type ColorKey = 'primary' | 'secondary' | 'tertiary'
type ButtonVariant = 'contained' | 'outlined' | 'text-only'

interface CustomButtonProps extends PressableProps {
    text?: string
    color?: ColorKey
    variant?: ButtonVariant
}

export const CustomButton = ({
    text,
    color = 'primary',
    variant = 'contained',
    className,
    onPress
}: CustomButtonProps) => {

    const btnColorMap: Record<ColorKey, string> = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    };
    
    
    const textColorMap: Record<ColorKey, string> = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'
    };
    
    const borderColorMap: Record<ColorKey, string> = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        tertiary: 'border-tertiary'
    };



    

    if( variant === 'text-only' ){
        return <>
            <Pressable
                onPress={ onPress }
                className={`p-3 ${ className }`}
            >
                { !!text && 
                    <Text className={`${ textColorMap[color] } text-center`}>
                        { text }
                    </Text> 
                }
            </Pressable>
        </>;
    }

    if(variant === 'outlined'){
        return <>
            <Pressable
                onPress={ onPress }
                className={`p-3 rounded-md ${ borderColorMap[color] } active:opacity-85 ${ className }`}
                style={{ borderWidth: 1.3 }}
            >
                { !!text && 
                    <Text className={`${ textColorMap[color] } text-center`}>
                        { text }
                    </Text> 
                }
            </Pressable>
        </>;
    }


    return <>
        <Pressable
            onPress={ onPress }
            className={`p-3 rounded-md ${ btnColorMap[color] } active:opacity-85 ${ className }`}
        >
            { !!text && 
                <Text className='text-white text-center'>
                    { text }
                </Text> 
            }
        </Pressable>
    </>;
}