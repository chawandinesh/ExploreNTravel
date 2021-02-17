import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Modal,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {AirbnbRating, Divider} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  }, [props.navigation]);

  const ModalItem = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Image
              style={{
                width: width * 0.2,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/bg1.jpg')}
            />
            <Text
              style={[{...Styles.modalText, fontSize: 20, fontWeight: 'bold'}]}>
              Enjoying Explore N Travel?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
            <TouchableOpacity
              // style={{...Styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={[
                  {
                    ...Styles.textStyle,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={{height, width}}>
      <View
        style={{
          height: height * 0.4,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: height * 0.2,
            width: width * 0.8,
            borderWidth: 2,
            backgroundColor: '#9225a1',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#8fd',
              height: height * 0.18,
              width: width * 0.76,
              borderWidth: 2,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: height * 0.04,
                color: '#000',
              }}>
              Explore N Travel
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: height * 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Categories')}
          style={{
            height: height * 0.07,
            width: width * 0.4,
            borderRadius: height * 0.01,
            backgroundColor: '#28b9c9',
            marginBottom: height * 0.03,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 1,
            shadowRadius: 6,
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Add Details
          </Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'space-between',
            width: width * 0.9,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AboutUs')}
            style={{
              height: height * 0.07,
              width: width * 0.4,
              borderRadius: height * 0.01,
              backgroundColor: 'gold',
              marginBottom: height * 0.03,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                color: '#000',
                fontWeight: 'bold',
              }}>
              About Us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllDetails')}
            style={{
              height: height * 0.07,
              width: width * 0.4,
              borderRadius: height * 0.01,
              backgroundColor: 'gold',
              marginBottom: height * 0.03,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                color: '#000',
                fontWeight: 'bold',
              }}>
              All Details
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            height: height * 0.07,
            width: width * 0.4,
            borderRadius: height * 0.01,
            backgroundColor: '#28b9c9',
            marginBottom: height * 0.03,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              color: '#000',
              fontWeight: 'bold',
            }}>
            Rate Us
          </Text>
        </TouchableOpacity>
      </View>
      {ModalItem()}
    </ImageBackground>
  );
}
const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
