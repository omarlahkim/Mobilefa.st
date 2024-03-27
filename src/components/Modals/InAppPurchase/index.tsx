import React from 'react';
import {Button, Icon, Image, ListItem} from '@rneui/themed';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {useEffect, useState} from 'react';
import Purchases from 'react-native-purchases';
import {NavigationProp} from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  description: string;
}
interface Props {
  navigation: NavigationProp<any>;
}

export default function InAppPurchaseModal({navigation}: Props) {
  const [subscriptions, setSubscriptions] = useState<Product[]>([
    {
      id: 1,
      title: 'Annual - US$24,99',
      description: 'Inbox Inbox Inbox Inbox Inbox Inbox',
    },
    {
      id: 2,
      title: 'Monthly - US$2,99',
      description: 'Inbox Inbox Inbox Inbox Inbox Inbox',
    },
    {
      id: 3,
      title: 'Weekly - US$0,99',
      description: 'Inbox Inbox Inbox Inbox Inbox Inbox',
    },
    {
      id: 4,
      title: 'Daily - US$0,49',
      description: 'Inbox Inbox Inbox Inbox Inbox Inbox',
    },
  ]);

  const [selected, setSelected] = useState<number>(1);

  async function setup() {
    try {
      const products = await Purchases.getOfferings();
      await console.log(products);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    setup();
  });

  const OfferButtonPress = ({id}: Product) => {
    console.log(id);
  };
  const closeButtonPress = () => {
    console.log('Close Button Pressed');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.modalContainer}>
      <TouchableOpacity onPress={closeButtonPress} style={styles.closeButton}>
        <Icon size={20} color={'white'} name="close" />
      </TouchableOpacity>
      <View style={styles.promotionalVideoContainer}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
          }}
          style={{
            width: Dimensions.get('window').width,
            height: '100%',
            marginVertical: 10,
          }}
        />
      </View>
      <View style={styles.listContainer}>
        {subscriptions &&
          subscriptions.map(({id, title, description}) => (
            <ListItem
              onPress={() => setSelected(id)}
              key={id}
              containerStyle={{
                backgroundColor: '#000',
                borderRadius: 10,
                padding: 10,
                paddingVertical: selected === id ? 18 : 20,
                borderWidth: selected === id ? 4 : 0,
                borderColor: selected === id ? '#ecb933' : 'transparent',
              }}>
              <Icon
                name={selected === id ? 'check' : 'circle-outline'}
                style={{
                  backgroundColor: selected === id ? '#ecb933' : 'transparent',
                  borderRadius: 50,
                }}
                type="material-community"
                color={selected === id ? 'black' : 'white'}
              />
              <ListItem.Content>
                <ListItem.Title style={{color: '#ecb933'}}>
                  {title}
                </ListItem.Title>
                <ListItem.Subtitle style={{color: '#F8F8F8'}}>
                  {description}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={'primary'}
          size="md"
          type="solid"
          onPress={() => OfferButtonPress({id: '1'})}>
          Purchase
        </Button>
        <Button
          size="md"
          type="clear"
          onPress={() => OfferButtonPress({id: '2'})}>
          Restore Purchases
        </Button>
      </View>
    </ScrollView>
  );
}
