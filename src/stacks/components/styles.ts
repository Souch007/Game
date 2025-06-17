import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gameArenaButtonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  gameArenaButton: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  gameArenaButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  card: {
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gameHeader: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f8f9fa',
    position: 'relative',
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  teamButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  statusBadgeScheduled: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
  statusBadgeInProgress: {
    backgroundColor: '#fff3e0',
    color: '#d84315',
  },
  statusBadgeFinished: {
    backgroundColor: '#f3e5f5',
    color: '#7b1fa2',
  },
  scheduleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  scheduleText: {
    flex: 1,
    fontSize: 13,
    color: '#4a5568',
  },
  scheduleTime: {
    fontSize: 13,
    color: '#2d3748',
    fontWeight: '500',
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 4,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2d3748',
  },
  vsText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#718096',
    marginBottom: 8,
    marginTop: 8,
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2d3748',
    marginBottom: 4,
  },
  time: {
    fontSize: 13,
    color: '#718096',
    marginBottom: 8,
  },
  scoreContainer: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  score: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 4,
  },
  period: {
    fontSize: 13,
    color: '#718096',
  },
  button: {
    marginTop: 8,
    width: '100%',
  },
  detailsContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsText: {
    color: '#718096',
  },
  detailsTime: {
    color: '#4a5568',
    marginLeft: 8,
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
  oddsText: {
    fontSize: 14,
    marginBottom: 4,
  },
});
