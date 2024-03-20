import {Button, Text} from '@rneui/themed';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from 'src/redux/features/auth';
import {styles} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{padding: 10}}>
        <Text h1Style={{fontSize: 35, textTransform: 'uppercase'}} h1>
          Profile
        </Text>
        <Button
          type="clear"
          title="Log Out"
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    </ScrollView>
  );
}
