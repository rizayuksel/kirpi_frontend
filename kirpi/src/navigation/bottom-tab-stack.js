import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import AddTrailer from '../screens/add-trailer';
import EditPrice from '../screens/edit-price';
// import TrailerDetail from '../screens/trailer-detail';
import HomeIcon from '../assets/icons/home';
import TrailerIcon from '../assets/icons/trailer';
import LiraIcon from '../assets/icons/lira';


const BottomTabNavigator = createBottomTabNavigator();

const BottomTabItems = [
  {
    name: 'Ana Sayfa',
    key: 'Home',
    component: Home,
    options: {
      headerShown: true,
      headerTitle: 'Kirpi Camping',
    },
  },
  {
    name: 'Karavan Ekle',
    key: 'AddTrailer',
    component: AddTrailer,
    options: {
      headerShown: true,
      headerTitle: 'Karavan Ekle',
    },
  },
  {
    name: 'Birim Fiyat Güncelle',
    key: 'EditPrice',
    component: EditPrice,
    options: {
      headerShown: true,
      headerTitle: 'Birim Fiyat Güncelle',
    },
  },
//   {
//     name: 'Karavan Detay',
//     key: 'TrailerDetail',
//     component: TrailerDetail,
//     options: {
//       headerShown: true,
//       headerTitle: 'Karavan Detay',
//     },
//   },
];

function BottomTabStack() {
  const navigation = useNavigation();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      {BottomTabItems.map(tab => (
        <BottomTabNavigator.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={({route}) => ({
            ...tab.options,
            tabBarIcon: ({focused}) => {
              if (route.name === 'Ana Sayfa') {
                return (
                  <HomeIcon color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />
                );
              } else if (route.name === 'Karavan Ekle') {
                return (
                  <TrailerIcon color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />
                );
              } else if (route.name === 'Birim Fiyat Güncelle') {
                return <LiraIcon color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />;
              }
            },
          })}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
}

export default BottomTabStack;
