import {ScrollView, View} from 'react-native';
import styles from './styles';
import {logout} from '../../redux/features/auth';
import {useDispatch} from 'react-redux';
import {Button, Text} from '@rneui/themed';
import GradientBackgroundView from '../../components/Common/GradientBackgroundView';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <GradientBackgroundView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{padding: 10}}>
          <Text h1Style={{fontSize: 35, textTransform: 'uppercase'}} h1>
            Home
          </Text>
          <Button
            title="Log Out"
            onPress={() => {
              dispatch(logout());
            }}
          />
        </View>
      </ScrollView>
    </GradientBackgroundView>
  );
}
