import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {Button} from '@rneui/themed';
import {navigateToPurchaseModal} from 'src/navigation/services';
import CardsList from 'src/components/ui/lists/cardslist/CardsList';
import Title from 'src/components/ui/headers/Title';

export default function Home() {
  const data = [
    {
      title: 'Card 1',
      description: 'This is a description for card 1',
      image:
        'https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg',
    },
    {
      title: 'Card 2',
      description: 'This is a description for card 2',
      image:
        'https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg',
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
    <ScrollView contentContainerStyle={styles.container}>
      <Title title="Home" size="lg" />
      <CardsList data={data} />
      <Button
        title="Open In App Purchase Modal"
        onPress={navigateToPurchaseModal}
      />
    </ScrollView>
  );
}
