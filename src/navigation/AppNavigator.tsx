import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { TouchableOpacity } from 'react-native';
import { Text } from '../components/Text';
import GamesScreen from '../stacks/GameDashboard';
import GameDetailScreen from '../stacks/GameDetail';
import ProfileScreen from '../stacks/Profile/ProfileScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const getHeaderOptions = (title: string) => ({
  headerTitle: title,
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.white,
});

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Games"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={({ navigation }) => ({
            ...getHeaderOptions('Sports Betting'),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => navigation.navigate('Profile')}
              >
                <Text variant="small" style={{ color: theme.colors.white }}>
                  Profile
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="GameDetail"
          component={GameDetailScreen}
          options={getHeaderOptions('Details')}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={getHeaderOptions('Profile')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
