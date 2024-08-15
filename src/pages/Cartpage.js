import { Button, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Productincart from "../components/Productincart";
import { clearCart } from "../redux/cartSlice";

const Cartpage = () => {
    const dispatch = useDispatch();
    const useCartItems = useSelector((state)=>state.cart);
    const totalQuantity = useCartItems.items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = useCartItems.items.reduce((total, item) => total + item.price * item.quantity, 0);

    return(
        <ScrollView>
            {
                useCartItems.items.map((element,index)=>{
                    return <View key={index} style={{marginTop: 10}}><Productincart data={element}/></View>
                })
            }
        <View style={{borderTopWidth: 1/2, marginTop: 10, flexDirection: 'row', marginHorizontal: 10, gap: 20, justifyContent: 'space-around', paddingTop: 10}}>
            <Text style={{color: 'black'}}>Total Quantity: {totalQuantity}</Text>
            <Text style={{color: 'black'}}>Total Price:{totalPrice} $</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 40}}>
            <Button onPress={()=>dispatch(clearCart())} title="Clear cart" color={'red'}></Button>
        </View>
        </ScrollView>
    )
}

export default Cartpage;