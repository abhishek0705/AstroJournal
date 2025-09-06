import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, JournalScreen } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Journal: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Journal" component={JournalScreen} options={{ title: 'Journal' }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;


