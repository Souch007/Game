import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Game } from '../../types';
import { useStore } from '../../stores/appStore';
import GameCard from '../components/GameCard';
import { styles } from './styles';
import { theme } from '../../theme/theme';

const GamesScreen = () => {
  const navigation = useNavigation();
  const store = useStore();
  const [selectedFilter, setSelectedFilter] = useState<'upcoming' | 'live' | 'completed' | null>(null);

  const filteredGames = () => {
    if (!selectedFilter) return store.gameStore.games;
    
    switch (selectedFilter) {
      case 'upcoming':
        return store.gameStore.upcomingGames;
      case 'live':
        return store.gameStore.liveGames;
      case 'completed':
        return store.gameStore.completedGames;
      default:
        return store.gameStore.games;
    }
  };

  const handleGamePress = (gameId: string) => {
    navigation.navigate('GameDetail', { gameId });
  };

  const renderGameItem = ({ item }: { item: Game }) => (
    <GameCard 
      game={item} 
      onGamePress={() => handleGamePress(item.id)}
      showDetailsButton={true}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Button 
          variant="outline" 
          style={selectedFilter === 'upcoming' ? styles.activeFilter : styles.filterButton}
          onPress={() => setSelectedFilter('upcoming')}
          textStyle={{ color: selectedFilter === 'upcoming' ? theme.colors.white : theme.colors.primary }}
        >
          Upcoming
        </Button>
        <Button 
          variant="outline" 
          style={selectedFilter === 'live' ? styles.activeFilter : styles.filterButton}
          onPress={() => setSelectedFilter('live')}
          textStyle={{ color: selectedFilter === 'live' ? theme.colors.white : theme.colors.primary }}
        >
          Live
        </Button>
        <Button 
          variant="outline" 
          style={selectedFilter === 'completed' ? styles.activeFilter : styles.filterButton}
          onPress={() => setSelectedFilter('completed')}
          textStyle={{ color: selectedFilter === 'completed' ? theme.colors.white : theme.colors.primary }}
        >
          Completed
        </Button>
      </View>
      <FlatList
        data={filteredGames()}
        renderItem={renderGameItem}
        keyExtractor={(item: Game) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};


export default GamesScreen;
