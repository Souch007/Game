import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { theme } from '../../theme/theme';

interface PredictionProps {
  game: {
    homeTeam: {
      name: string;
      abbreviation: string;
    };
    awayTeam: {
      name: string;
      abbreviation: string;
    };
  };
  onPredictionSubmit: (team: string) => void;
}

const Prediction: React.FC<PredictionProps> = ({ game, onPredictionSubmit }) => {
  const [selectedTeam, setSelectedTeam] = React.useState<string | null>(null);

  const getButtonStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? theme.colors.warning : theme.colors.card,
    borderColor: isSelected ? theme.colors.warning : theme.colors.card,
  });

  const getButtonTextStyle = (isSelected: boolean) => ({
    color: isSelected ? theme.colors.white : theme.colors.primary,
  });

  return (
    <View style={styles.container}>
      <Text variant="heading2" style={styles.title}>Make Your Prediction</Text>
      
      <View style={styles.teamButtons}>
        <Button
          variant="primary"
          style={{
            flex: 1,
            marginHorizontal: theme.spacing.sm,
            ...getButtonStyle(selectedTeam === game.homeTeam.abbreviation),
          }}
          textStyle={getButtonTextStyle(selectedTeam === game.homeTeam.abbreviation)}
          onPress={() => setSelectedTeam(game.homeTeam.abbreviation)}
        >
          {game.homeTeam.abbreviation}
        </Button>
        
        <Button
          variant="primary"
          style={{
            flex: 1,
            marginHorizontal: theme.spacing.sm,
            ...getButtonStyle(selectedTeam === game.awayTeam.abbreviation),
          }}
          textStyle={getButtonTextStyle(selectedTeam === game.awayTeam.abbreviation)}
          onPress={() => setSelectedTeam(game.awayTeam.abbreviation)}
        >
          {game.awayTeam.abbreviation}
        </Button>
      </View>

      <View style={styles.selectionInfo}>
        <Text variant="body" style={styles.selectionText}>
          You Chose: {selectedTeam || 'None'}
        </Text>
      </View>

      <Button
        variant="primary"
        style={styles.submitButton}
        disabled={!selectedTeam}
        onPress={() => {
          onPredictionSubmit(selectedTeam!);
        }}
      >
        Predict
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginVertical: theme.spacing.sm,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  teamButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  selectionInfo: {
    marginBottom: theme.spacing.sm,
    alignItems: 'center',
  },
  selectionText: {
    color: theme.colors.textSecondary,
  },
  submitButton: {
    marginTop: theme.spacing.sm,
  },
});

export default Prediction;
