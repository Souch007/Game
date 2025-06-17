import { StyleSheet } from "react-native";
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 10,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    filterButton: {
      padding: 10,
      borderRadius: 20,
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
    activeFilter: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    filterButtonText: {
      fontSize: 16,
      fontWeight: '600',
    },
    listContainer: {
      flexGrow: 1,
    },
    card: {
      marginVertical: 5,
      borderRadius: 10,
    },
    gameHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    teamName: {
      fontSize: 18,
      fontWeight: '600',
    },
    gameDetails: {
      marginBottom: 15,
    },
    status: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5,
    },
    time: {
      fontSize: 14,
      color: '#444',
    },
    scoreContainer: {
      alignItems: 'center',
    },
    score: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    period: {
      fontSize: 14,
      color: '#666',
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  