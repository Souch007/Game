import React from 'react';
import { View, Image } from 'react-native';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Card } from '@rneui/themed';
import { styles } from './styles';

interface GameCardProps {
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
    status: string;
    startTime?: string;
    score?: {
      home: number;
      away: number;
    };
    period?: string;
  };
  onGamePress?: () => void;
  showDetailsButton?: boolean;
  children?: React.ReactNode;
}

const GameCard: React.FC<GameCardProps> = ({ 
  game, 
  onGamePress, 
  children 
}) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.gameHeader}>
        {game.status === 'scheduled' && (
          <View style={[
            styles.statusBadge,
            styles.statusBadgeScheduled
          ]}>
            <Text variant="small" style={[styles.statusBadgeText, styles.statusBadgeScheduled]}>
              Scheduled
            </Text>
          </View>
        )}
        {game.status === 'inProgress' && (
          <View style={[
            styles.statusBadge,
            styles.statusBadgeInProgress
          ]}>
            <Text variant="small" style={[styles.statusBadgeText, styles.statusBadgeInProgress]}>
              In Progress
            </Text>
          </View>
        )}
        {game.status === 'finished' && (
          <View style={[
            styles.statusBadge,
            styles.statusBadgeFinished
          ]}>
            <Text variant="small" style={[styles.statusBadgeText, styles.statusBadgeFinished]}>
              Finished
            </Text>
          </View>
        )}
        <View style={styles.teamContainer}>
          <Text variant="heading2" style={styles.teamName}>{game.homeTeam.name}</Text>
          <Text variant="heading2" style={styles.vsText}>VS</Text>
          <Text variant="heading2" style={styles.teamName}>{game.awayTeam.name}</Text>
        </View>
      </View>

      {game.status === 'scheduled' && game.startTime && (
        <View style={styles.scheduleContainer}>
          <View style={{ flex: 1 }}>
            <Text variant="small" style={styles.scheduleText}>Scheduled for</Text>
            <Text variant="small" style={styles.scheduleTime}>
              {new Date(game.startTime).toLocaleString()}
            </Text>
          </View>
        </View>
      )}
      
      {game.score && (
        <View style={styles.scoreContainer}>
          <Text variant="heading2" style={styles.score}>{game.score.home}</Text>
          <Text variant="small" style={styles.period}>{game.period}</Text>
          <Text variant="heading2" style={styles.score}>{game.score.away}</Text>
        </View>
      )}
      {onGamePress && (
        <View style={styles.gameArenaButtonContainer}>
          <Button
            variant="primary"
            onPress={onGamePress}
            style={styles.gameArenaButton}
          >
            <Text variant="body" style={styles.gameArenaButtonText}>
              Game Arena
            </Text>
          </Button>
        </View>
      )}
      {children}
    </Card>
  );
};

export default GameCard;
