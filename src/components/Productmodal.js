import { Button, Image, Modal, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Productmodal = ({data, modalVisibility, setModalVisibility}) => {
    const dispatchItem = useDispatch();    
    return(
        <Modal visible={modalVisibility} transparent={true}>
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center'}}>
        <View style={{backgroundColor: 'white', alignItems: 'center', marginHorizontal: 25, padding: 15, borderRadius: 20}}>
            <Image
          style={{width: 100, height: 140, objectFit: 'fill'}}
          source={{
            uri: data.image,
          }}
        />
        <View style={{flexDirection: 'row', gap: 20}}>
          <Text style={{color: 'black', marginTop: 20}}>Description:</Text>
          <Text style={{color: 'black', marginTop: 10, width: 200}}>{data.description}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 20, marginTop: 20}}>
            <Button color={'gray'} onPress={()=>setModalVisibility(false)} title="Close" style={{color: 'black'}}>Close</Button>
            <Button onPress={()=>dispatchItem(addItem(data))} title="Add to Cart" color={'red'}></Button>
        </View>
        </View>
        </View>
        </Modal>
    )
}

export default Productmodal;