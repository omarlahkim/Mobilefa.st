import react from 'react';
import {Button, ScrollView, Text} from 'react-native';
import styles from './styles';
import {logout} from '../../redux/features/auth';
import {useDispatch} from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Home</Text>
      <Button
        title="LogOut"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </ScrollView>
  );
}
