import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from './bottom-tab-stack';
import TrailerDetail from '../screens/trailer-detail';
import EditTrailer from '../screens/edit-trailer';

export const Stack = createNativeStackNavigator();

function RootStack() {

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={BottomTabStack}
          name="HomeStack"
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Detay',
          }}
          component={TrailerDetail}
          name="TrailerDetail"
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Güncelle',
          }}
          component={EditTrailer}
          name="EditTrailer"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
