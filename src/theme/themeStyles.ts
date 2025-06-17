import { Theme } from './types';

export const getThemeStyles = (theme: Theme) => ({
  gameInfo: {
    marginBottom: theme.spacing.sm,
  },
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  card: {
    marginVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.card,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gameTitle: {
    color: theme.colors.text,
    ...theme.typography.h2,
  },
  gameDescription: {
    color: theme.colors.textSecondary,
    ...theme.typography.body,
  },
  teamName: {
    color: theme.colors.text,
    ...theme.typography.h3,
  },
  status: {
    color: theme.colors.textSecondary,
    ...theme.typography.body,
  },
  time: {
    color: theme.colors.textSecondary,
    ...theme.typography.small,
  },
  score: {
    color: theme.colors.text,
    ...theme.typography.h2,
  },
  period: {
    color: theme.colors.textSecondary,
    ...theme.typography.small,
  },
  oddsText: {
    color: theme.colors.textSecondary,
    ...theme.typography.small,
  },
  sectionTitle: {
    color: theme.colors.text,
    ...theme.typography.h3,
  },
  predictionText: {
    color: theme.colors.text,
    ...theme.typography.body,
  },
  oddsContainer: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  oddsValue: {
    color: theme.colors.primary,
    ...theme.typography.body,
  },
  oddsFavorite: {
    color: theme.colors.primary,
    ...theme.typography.body,
  },
  oddsUnderdog: {
    color: theme.colors.textSecondary,
    ...theme.typography.body,
  },
  oddsSpread: {
    color: theme.colors.textSecondary,
    ...theme.typography.body,
  },
  oddsFavoriteText: {
    color: theme.colors.primary,
  },
  oddsUnderdogText: {
    color: theme.colors.textSecondary,
  },
  oddsSpreadText: {
    color: theme.colors.textSecondary,
  },
  selectedButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  backButton: {
    marginVertical: theme.spacing.sm,
  },
  input: {
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
  },
});
