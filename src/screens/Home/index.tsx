import {Button} from '@rneui/themed';
import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import Title from 'src/components/ui/headers/Title';
import CardsList from 'src/components/ui/lists/cardslist/CardsList';
import {navigateToPurchaseModal} from 'src/navigation/services';
import styles from './styles';

export default function Home() {
  const [refreshing, setRefreshing] = React.useState(false);
  const _onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const data1 = [
    {
      title: '⚡️ Card 1 ⚡️',
      description: 'Petrolhead',
    },
    {
      title: '🌱 Card 2 🌱',
      description: 'Plant',
    },
  ];
  const data2 = [
    {
      title: 'Card 1',
      description: 'This is description',
      color: '#f95216',
    },
    {
      title: 'Card 2',
      description: 'This is description',
    },
    {
      title: 'Card 3',
      description: 'This is a description for card 3',
      image:
        'https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg',
    },
    {
      title: 'Card 4',
      description: 'This is a description for card 4',
      image:
        'https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg',
    },
    {
      title: 'Card 5',
      description: 'This is a description for card 5',
      image:
        'https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg',
    },
  ];
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
      }
      contentContainerStyle={styles.container}>
      <Title title="Home" size="lg" />
      <CardsList
        bgColor="#f95216"
        txtColor="white"
        horizontal={true}
        data={data1}
      />
      <CardsList
        bgColor="#000"
        txtColor="white"
        horizontal={false}
        data={data2}
      />
      <Button
        title="Open In App Purchase Modal"
        onPress={navigateToPurchaseModal}
      />
    </ScrollView>
  );
}
