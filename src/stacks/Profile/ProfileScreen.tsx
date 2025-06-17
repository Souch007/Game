import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '../../components/Text';
import { User, Prediction } from '../../types';
import { useStore } from '../../stores/appStore';
import { observer } from 'mobx-react';
import { sampleGames } from '../../data/sample-data';
import { Card } from '@rneui/themed';
import { styles } from './styles';

const ProfileScreen = observer(() => {
  const store = useStore();
  const { gameStore } = store;
  const { user } = gameStore;

  const renderPrediction = (prediction: Prediction) => {
    const game = sampleGames.find(g => g.id === prediction.gameId);
    if (!game) return null;

    return (
      <Card containerStyle={styles.predictionCard}>
        <View style={styles.predictionHeader}>
          <Text style={styles.predictionTeam}>
            {game.homeTeam.name} vs {game.awayTeam.name}
          </Text>
        </View>
        <View style={styles.predictionDetails}>
          <Text style={styles.predictionPick}>Pick: {prediction.pick}</Text>
          <Text style={styles.predictionAmount}>Amount: ${prediction.amount}</Text>
          <Text style={styles.predictionResult}>
            Result: {prediction.result === 'win' ? 'Won' : prediction.result === 'loss' ? 'Lost' : 'Pending'}
          </Text>
          {prediction.result === 'win' && (
            <Text style={styles.predictionPayout}>
              Payout: ${prediction.payout}
            </Text>
          )}
        </View>
      </Card>
    );
  };

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.balance}>Balance: ${user.balance}</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Wins</Text>
          <Text style={styles.statValue}>{user.stats.wins}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Losses</Text>
          <Text style={styles.statValue}>{user.stats.losses}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Pending</Text>
          <Text style={styles.statValue}>{user.stats.pending}</Text>
        </View>
      </View>
      <View style={styles.predictionsContainer}>
        <Text style={styles.predictionsTitle}>Prediction History</Text>
        {user.predictions.map((prediction, index) => (
          <View key={index} style={styles.predictionItem}>
            {renderPrediction(prediction)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
});

export default ProfileScreen;
