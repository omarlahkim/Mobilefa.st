import react from 'react';
import {Button, ScrollView, Text} from 'react-native';
import styles from './styles';
import {login} from '../../redux/features/auth';
import {useDispatch} from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={() => {
          dispatch(login('test'));
        }}
      />
    </ScrollView>
  );
}
