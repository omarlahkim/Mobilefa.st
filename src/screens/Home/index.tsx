import {ScrollView, View} from 'react-native';
import styles from './styles';
import {Button, Text} from '@rneui/themed';
import GradientBackgroundView from '../../components/Common/GradientBackgroundView';
import InAppPurchaseModal from 'src/components/Modals/InAppPurchase';

export default function Home({navigation}) {
  return (
    <GradientBackgroundView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{padding: 10}}>
          <Text h1Style={{fontSize: 35, textTransform: 'uppercase'}} h1>
            Home
          </Text>
          <Button
            title="Open In App Purchase Modal"
            onPress={() => {
              navigation.navigate('InAppPurchaseModal');
            }}
          />
        </View>
      </ScrollView>
    </GradientBackgroundView>
  );
}
