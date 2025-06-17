import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Games: undefined;
  GameDetail: { gameId: string };
  Profile: undefined;
}
