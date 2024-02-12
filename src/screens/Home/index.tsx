import react from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles';
import {logout} from '../../redux/features/auth';
import {useDispatch} from 'react-redux';
import {Button} from '@rneui/themed';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Home</Text>
      <Button
        title="Log Out"
        onPress={() => {
          dispatch(logout());
        }}
      />
    </ScrollView>
  );
}
