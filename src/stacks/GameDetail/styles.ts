import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    marginVertical: 8,
    borderRadius: 8,
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  gameInfo: {
    marginBottom: 8,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  gameDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 20,
    fontWeight: '600',
  },
  gameDetails: {
    marginBottom: 16,
  },
  status: {
    fontSize: 16,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  score: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  period: {
    fontSize: 14,
  },
  oddsText: {
    fontSize: 14,
    marginBottom: 4,
  },
  predictionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  teamButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  teamButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  predictionText: {
    fontSize: 16,
    marginTop: 16,
  },
  oddsContainer: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginVertical: 16,
  },
  oddsValue: {
    fontSize: 20,
    fontWeight: '600',
  },
  oddsFavorite: {
    color: '#007AFF',
  },
  oddsUnderdog: {
    color: '#666666',
  },
  oddsSpread: {
    color: '#666666',
  },
  oddsFavoriteText: {
    color: '#007AFF',
  },
  oddsUnderdogText: {
    color: '#666666',
  },
  oddsSpreadText: {
    color: '#666666',
  },
  backButton: {
    marginVertical: 16,
  },
  amountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  amountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  amountButtonText: {
    marginRight: 8,
    fontSize: 16,
  },
  amountIcon: {
    fontSize: 24,
  },
});
