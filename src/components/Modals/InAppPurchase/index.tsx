import {Button, Icon, Image, ListItem, Text} from '@rneui/themed';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';

interface Product {
  id: string;
}

export default function InAppPurchaseModal({navigation}) {
  const OfferButtonPress = ({id}: Product) => {
    console.log(id);
  };
  const closeButtonPress = () => {
    console.log('Close Button Pressed');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.modalContainer}>
      <TouchableOpacity onPress={closeButtonPress} style={styles.closeButton}>
        <Icon style={styles.closeIcon} color={'black'} name="close" />
      </TouchableOpacity>
      <Image
        source={require('../../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.promotionalVideoContainer}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
          }}
          style={{
            width: Dimensions.get('window').width,
            height: 210,
            marginVertical: 10,
          }}
        />
      </View>
      <View style={styles.listContainer}>
        <ListItem>
          <Icon name="check" type="material-community" color="green" />
          <ListItem.Content>
            <ListItem.Title>Inbox</ListItem.Title>
            <ListItem.Subtitle>
              Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox
              Inbox
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Icon name="check" type="material-community" color="green" />
          <ListItem.Content>
            <ListItem.Title>Trash</ListItem.Title>
            <ListItem.Subtitle>
              Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox
              Inbox
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Icon name="check" type="material-community" color="green" />
          <ListItem.Content>
            <ListItem.Title>Trash</ListItem.Title>
            <ListItem.Subtitle>
              Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox
              Inbox
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Icon name="check" type="material-community" color="green" />
          <ListItem.Content>
            <ListItem.Title>Trash</ListItem.Title>
            <ListItem.Subtitle>
              Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox
              Inbox
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Icon name="check" type="material-community" color="green" />
          <ListItem.Content>
            <ListItem.Title>Trash</ListItem.Title>
            <ListItem.Subtitle>
              Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox Inbox
              Inbox
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={'primary'}
          size="md"
          type="solid"
          onPress={() => OfferButtonPress({id: '1'})}>
          Offer 1
        </Button>
        <Button
          size="md"
          type="solid"
          onPress={() => OfferButtonPress({id: '2'})}>
          Offer 2
        </Button>
        <Button
          size="md"
          type="solid"
          onPress={() => OfferButtonPress({id: '3'})}>
          Offer 3
        </Button>
      </View>
    </SafeAreaView>
  );
}
