import {ScrollView, View} from 'react-native';
import styles from './styles';
import {Text} from '@rneui/themed';
import GradientBackgroundView from '../../components/Common/GradientBackgroundView';

export default function Home() {
  return (
    <GradientBackgroundView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{padding: 10}}>
          <Text h1Style={{fontSize: 35, textTransform: 'uppercase'}} h1>
            Home
          </Text>
        </View>
      </ScrollView>
    </GradientBackgroundView>
  );
}
