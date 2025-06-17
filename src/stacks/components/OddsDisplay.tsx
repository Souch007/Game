import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components/Text';
import { theme } from '../../theme/theme';

interface OddsDisplayProps {
  odds: {
    spread: string;
    favorite: string;
  };
}

export const OddsDisplay: React.FC<OddsDisplayProps> = ({ odds }) => {
  const isHomeFavorite = odds.favorite === 'home';
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="heading2" style={styles.title}>Game Odds</Text>
        <Text variant="small" style={styles.favoriteText}>
          {isHomeFavorite ? 'Home Team Favorite' : 'Away Team Favorite'}
        </Text>
      </View>

      <View style={styles.oddsRow}>
        <Text variant="small" style={styles.label}>Spread</Text>
        <Text variant="small" style={[styles.value, styles.spread]}>
          {odds.spread}
        </Text>
      </View>

      <View style={styles.oddsRow}>
        <Text variant="small" style={styles.label}>Favorite</Text>
        <Text variant="small" style={[styles.value, styles.favorite]}>
          {isHomeFavorite ? 'Home Team' : 'Away Team'}
        </Text>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  title: {
    color: theme.colors.text,
  },
  favoriteText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  oddsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  label: {
    color: theme.colors.textSecondary,
    flex: 1,
  },
  value: {
    color: theme.colors.text,
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  spread: {
    color: theme.colors.warning,
  },
  favorite: {
    color: theme.colors.primary,
  },
});
