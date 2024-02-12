import react from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import styles from './styles';
import {login} from '../../redux/features/auth';
import {useDispatch} from 'react-redux';
import {Button, Icon, Image, Text} from '@rneui/themed';

export default function Login() {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        width={100}
        height={100}
        style={{
          height: 55,
          width: 240,
          marginBottom: 20,
        }}
        source={require('../../../assets/images/logo.png')}
      />
      <View>
        <Text h1 style={{textAlign: 'center'}}>
          Develop{' '}
          <Text
            style={{
              textDecorationStyle: 'solid',
              textDecorationLine: 'underline',
              textDecorationColor: '#FFBB00',
            }}>
            Faster
          </Text>{' '}
          Fast ⚡️ Mobile Applications that generate money 🤑
        </Text>
        <Text h4>
          No we didn't mistake the word "Faster", Neither "Fast"! 😂
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <Button color={'white'}>
          <Icon type="antdesign" color={'#4285F4'} size={25} name="google" />
          <Text style={{color: '#4285F4', paddingHorizontal: 5}} h3>
            Sign In with Google
          </Text>
        </Button>
        <Button color={'black'}>
          <Icon color={'white'} size={27} name="apple" />
          <Text style={{color: 'white', paddingHorizontal: 5}} h3>
            Sign In with Apple
          </Text>
        </Button>
        <View style={styles.OrContainer}>
          <View style={styles.OrDivider} />
          <Text>Or</Text>
          <View style={styles.OrDivider} />
        </View>

        <Button color={'#8221FF'}>
          <Icon color={'white'} size={25} name="email" />
          <Text style={{color: 'white', paddingHorizontal: 5}} h3>
            Sign In using Email
          </Text>
        </Button>
      </View>
      <View style={styles.SignUpContainer}>
        <Text h3>Don't have an account?</Text>
        <Button
          color={'#FFBB00'}
          onPress={() => {
            dispatch(login('test'));
          }}
          containerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text style={{color: 'black'}} h2>
            Create your account
          </Text>
        </Button>
      </View>
      <View>
        <Text>Powered by: </Text>
        <Image source={require('../../../assets/images/digitlift.png')} />
      </View>
    </ScrollView>
  );
}
