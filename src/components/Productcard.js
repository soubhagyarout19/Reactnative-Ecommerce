import {Image, Text, View} from 'react-native';

const Productcard = ({data}) => {
  console.log(data);
  
  return (
    <View
      style={{
        elevation: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 20,
        borderColor: 'black',
        borderRadius: 20,
        padding: 10,
        margin: 10,
      }}>
      <View>
        <Image
          style={{width: 100, height: 140, objectFit: 'fill'}}
          source={{
            uri: data?.image,
          }}
        />
      </View>
      <View style={{flexDirection: 'column', gap: 5}}>
        <Text style={{color: 'black', width: 200, fontWeight: '500'}}>{data?.title}</Text>
        <View style={{flexDirection: 'row'}}>
          {Array.from({length: 5})?.map((_, index) => (
            <Text style={{color: 'gray'}} key={index}>
              {index < Math.round(data?.rating?.rate) ? '⭐' : '☆'}
            </Text>
          ))}
          <Text style={{color: 'gray', marginLeft: 5}}>{data?.rating?.count}</Text>
        </View>
        <Text style={{color: 'black', fontWeight: '700'}}>{data?.price + ' '}$</Text>
        <Text style={{color: 'gray'}}>Category: {data?.category}</Text>
      </View>
    </View>
  );
};

export default Productcard;
