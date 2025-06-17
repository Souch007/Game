import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { theme } from '../../theme/theme';
import { styles } from './styles';
import { OddsDisplay } from './OddsDisplay';
import Prediction from './Prediction';

const getButtonStyle = (selected: boolean) => ({
  backgroundColor: selected ? theme.colors.warning : theme.colors.card,
  borderColor: selected ? theme.colors.warning : theme.colors.card,
});

const getButtonTextStyle = (selected: boolean) => ({
  color: selected ? theme.colors.white : theme.colors.primary,
});

interface GameDetailProps {
  game: {
    id: string;
    homeTeam: {
      name: string;
      abbreviation: string;
    };
    awayTeam: {
      name: string;
      abbreviation: string;
    };
    odds?: {
      spread: string;
      favorite: string;
    };
  };
}

const GameDetail: React.FC<GameDetailProps> = ({ game }) => {
  const handlePredictionSubmit = (team: string) => {
    console.log('Predicting team:', team);
  };

  return (
    <View style={styles.container}>
      <Prediction
        game={game}
        onPredictionSubmit={handlePredictionSubmit}
      />
      
      {game.odds && (
        <OddsDisplay odds={game.odds} />
      )}
    </View>
  );
};

export default GameDetail;
