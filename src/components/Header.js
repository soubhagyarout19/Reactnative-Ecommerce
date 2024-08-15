import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItemCount = useSelector((state)=>state.cart);
    const totalQuantity = cartItemCount.items.reduce((total, item) => total + item.quantity, 0);
    
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: '#80D9E1', height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 50}}>
            <Pressable onPress={()=>navigation.navigate('Home')}>
            <Text style={{color: 'black'}}>Shopping</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('Cartpage')}>
            <Text style={{color: 'black'}}>Cart-{totalQuantity}</Text>
            </Pressable>
        </View>
    )
}

export default Header;