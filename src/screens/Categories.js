import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default function Categories(props) {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#0198C1'},
      headerTintColor: '#fff',
    });
  }, [props.navigation]);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Details', {categoryItem: item})
        }
        style={{
          width: width * 0.9,
          height: height * 0.1,
          borderRadius: height * 0.02,
          backgroundColor: '#fff',
          shadowOffset: {height: -2, width: -2},
          shadowColor: '#a00',
          shadowRadius: 5,
          borderTopWidth: 5,
          borderRightWidth: 3,
          shadowOpacity: 0.6,
          elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: height * 0.02,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../assets/aeroplane1.png')}
          resizeMode="stretch"
          style={{
            width: width * 0.2,
            height: height * 0.1,
            transform: [{rotate: '180deg'}],
          }}
        />
        <Text
          style={{
            color: '#0198C1',
            fontSize: height * 0.03,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {item}
        </Text>
        <Image
          source={require('../assets/aeroplane1.png')}
          resizeMode="stretch"
          style={{
            width: width * 0.2,
            height: height * 0.1,
            transform: [{rotate: '0deg'}],
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg1.jpg')}
      style={{height, width}}>
      <View style={{height: height * 0.9, width, alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'Abroad',
            'Beach',
            'Camping Trip',
            'Road Trip',
            'Cruise',
            'Group Tour',
            'Girls Trip',
            'solo Trip',
            'Staycation',
            'Caravan',
            'Other',
          ]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}
