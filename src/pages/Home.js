import {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, ScrollView, View} from 'react-native';
import Productcard from '../components/Productcard';
import Productmodal from '../components/Productmodal';

const Home = () => {
  const [globalData, setGlobalData] = useState('');
  const [modalData, setModalData] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  async function getData() {
    const url = 'https://fakestoreapi.com/products';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setGlobalData(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {
      globalData ?
    <View style={{backgroundColor: 'white'}}>
    <FlatList
      data={globalData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Pressable onPress={()=>{setModalData(item) ; setModalVisibility(true)}}><Productcard data={item} /></Pressable>}
    />
    <Productmodal data={modalData} modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </View> :  <ActivityIndicator size="large" color="#00ff00" />
    }
    </>
  );
};

export default Home;
