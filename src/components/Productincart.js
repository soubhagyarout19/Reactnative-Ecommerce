import {Button, Image, Text, View} from 'react-native';
import { incrementQuantity } from '../redux/cartSlice';
import { decrementQuantity } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Productincart = ({data}) => {
    const dispatch = useDispatch();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10, marginHorizontal: 10, borderRadius: 10, elevation: 4, backgroundColor: 'white'}}>
      <Image
        style={{height: 60, width: 60, borderRadius: 10, objectFit: 'fill'}}
        source={{
          uri: data.image,
        }}></Image>
      {/* <Text style={{color: 'black'}}>{data.title}</Text> */}
      <View style={{flexDirection: 'row', gap: 8}}>
      <Text style={{color: 'black'}}>{data.quantity}</Text>
      <Text style={{color: 'black'}}>✕</Text>
      <Text style={{color: 'black'}}>{data.price} $</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Button onPress={()=>dispatch(decrementQuantity(data.id))} title="  -  "></Button>
        <Text><Text style={{color: 'black'}}>{data.quantity}</Text></Text>
        <Button onPress={()=>dispatch(incrementQuantity(data.id))} title=" + "></Button>
      </View>
    </View>
  );
};

export default Productincart;
