import {Text} from '@rneui/themed';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{padding: 10}}>
        <Text h1Style={{fontSize: 35, textTransform: 'uppercase'}} h1>
          Settings
        </Text>
      </View>
    </ScrollView>
  );
}
