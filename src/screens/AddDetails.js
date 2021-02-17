import React from 'react';
import {TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  Image,
  Button,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TravelContext} from './context';
import ImagePicker from 'react-native-image-crop-picker';

const {height, width} = Dimensions.get('window');
export default function AddDetails(props) {
  const {state, setState} = React.useContext(TravelContext);
  const {categoryItem, index} = props.route.params;
  const [formState, setFormState] = React.useState({
    place: '',
    date: '',
    item: '',
    trasport: '',
    details: '',
    image: '',
  });
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#0198C1'},
      headerTintColor: '#fff',
      headerRight: () => {
        return index == 0 || index ? (
          <Icon
            name="trash"
            type="ionicon"
            color="red"
            onPress={() => {
              setState({
                ...state,
                [categoryItem]: state[categoryItem].filter(
                  (e, idx) => idx !== index,
                ),
              });
              props.navigation.goBack();
            }}
          />
        ) : null;
      },
    });
  }, [props.navigation]);

  React.useEffect(() => {
    if (index === 0 || index) {
      setFormState(state[categoryItem][index]);
    }
  }, []);
  const fields = ['Place', 'Date', 'Item', 'Transport'];

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  const handleSubmit = () => {
    if (
      formState.date.length &&
      formState.details.length &&
      formState.item.length &&
      formState.place.length
    ) {
      if (index === 0 || index) {
        state[categoryItem].splice(index, 1, formState);
        setState(state);
        props.navigation.goBack();
      } else {
        setState({
          ...state,
          [categoryItem]: [...state[categoryItem], formState],
        });
        props.navigation.goBack();
      }
    } else {
      alert('Please fill all fields');
    }
  };
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        style={{width, height: height * 0.9, alignItems: 'center'}}
        source={require('../assets/bg2.jpg')}>
        <View
          style={{
            width: width * 0.93,
            paddingTop: height * 0.05,
            height: height * 0.9,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              height: height * 0.06,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderRadius: height * 0.02,
              borderTopWidth: 3,
              borderTopColor: '#f00',
              borderBottomWidth: 5,
              borderRightWidth: 3,
            }}>
            <TextInput
              placeholder={fields[0]}
              value={formState.place}
              onChangeText={(text) => setFormState({...formState, place: text})}
            />
          </View>
          <View
            style={{
              height: height * 0.06,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderRadius: height * 0.02,
              borderTopWidth: 3,
              borderTopColor: '#f00',
              borderBottomWidth: 5,
              borderRightWidth: 3,
            }}>
            <TextInput
              placeholder={fields[1]}
              value={formState.date}
              onChangeText={(text) => setFormState({...formState, date: text})}
            />
          </View>
          <View
            style={{
              height: height * 0.06,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderRadius: height * 0.02,
              borderTopWidth: 3,
              borderTopColor: '#f00',
              borderBottomWidth: 5,
              borderRightWidth: 3,
            }}>
            <TextInput
              placeholder={fields[2]}
              value={formState.item}
              onChangeText={(text) => setFormState({...formState, item: text})}
            />
          </View>
          <View
            style={{
              height: height * 0.06,
              marginBottom: height * 0.03,
              backgroundColor: '#fff',
              borderRadius: height * 0.02,
              borderTopWidth: 3,
              borderTopColor: '#f00',
              borderBottomWidth: 5,
              borderRightWidth: 3,
            }}>
            <TextInput
              placeholder={fields[3]}
              value={formState.trasport}
              onChangeText={(text) =>
                setFormState({...formState, trasport: text})
              }
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: height * 0.025,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Detail:
            </Text>
          </View>
          <View
            style={{
              height: height * 0.15,
              marginBottom: height * 0.05,
              backgroundColor: '#fff',
              borderRadius: height * 0.02,
              borderTopWidth: 3,
              borderTopColor: '#f00',
              borderBottomWidth: 5,
              borderRightWidth: 3,
            }}>
            <TextInput
              multiline
              numberOfLines={4}
              value={formState.details}
              onChangeText={(text) =>
                setFormState({...formState, details: text})
              }
              placeholder="Enter here"
            />
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              width: width * 0.85,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fff',
              height: height * 0.13,
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                height: height * 0.1,
                width: height * 0.1,
                justifyContent: 'center',
                backgroundColor: '#ddd',
              }}>
              {formState.image ? (
                <Image
                  source={{uri: formState.image}}
                  resizeMode="stretch"
                  style={{height: height * 0.1, width: height * 0.1}}
                />
              ) : (
                <Text style={{textAlign: 'center'}}>No Image</Text>
              )}
            </TouchableOpacity>
            <View>
              <Icon name="arrow-long-left" type="entypo" />
              {/* <Text style={{fontSize: height * 0.03}}> --- </Text> */}
            </View>
            <View>
              <Text style={{fontSize: height * 0.02, fontWeight: 'bold'}}>
                {' '}
                Add Image{' '}
              </Text>
            </View>
          </View>

          <View
            style={{
              width: width * 0.9,
              height: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: 'gold',
                height: height * 0.07,
                width: width * 0.5,
                borderBottomWidth: height * 0.005,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.2,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
