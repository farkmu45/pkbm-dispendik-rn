import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import InstitutionListScreen from './institutions/InstitutionListScreen'
import { MaterialIcons } from '@expo/vector-icons'
import { useIsFocused } from '@react-navigation/native'
import * as NavigationBar from 'expo-navigation-bar'

import colors from '../constants/colors'
import NotificationListScreen from './notifications/NotificationListScreen'
import ActivityListScreen from './activities/ActivityListScreen'
import {
  Account,
  ActivityList,
  Home,
  InstitutitionList,
  NotificationList,
} from '../constants/screens'
import AccountScreen from './account/AccountScreen'

const Tab = createBottomTabNavigator()

const MainScreen = () => {
  const isFocused = useIsFocused()
  isFocused ? NavigationBar.setBackgroundColorAsync(colors.primary[700]) : null

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary[700],
          height: 60
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: colors.primary[900],
      }}
    >
      <Tab.Screen
        name={Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={InstitutitionList}
        component={InstitutionListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='list' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={NotificationList}
        component={NotificationListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='notifications' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ActivityList}
        component={ActivityListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='insert-drive-file' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Account}
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='person' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainScreen