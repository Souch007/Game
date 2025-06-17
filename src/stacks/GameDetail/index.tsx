import React from 'react';
import { View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { sampleGames } from '../../data/sample-data';
import { Button } from '../../components/Button';
import GameCard from '../components/GameCard';
import GameDetail from '../components/GameDetail';
import { styles } from './styles';

interface GameDetailScreenParams {
  gameId: string;
}

const GameDetailScreen = () => {
  const route = useRoute<{
    params: GameDetailScreenParams;
    key: string;
    name: string;
  }>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const gameId = route.params.gameId;
  const game = sampleGames.find(g => g.id === gameId);

  if (!game) {
    return null;
  }

  return (
    <View style={styles.container}>
      <GameCard 
        game={game}
        showDetailsButton={false}
      >
        <GameDetail game={game} />
      </GameCard>
    </View>
  );
};

export default GameDetailScreen;
