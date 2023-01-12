/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import img1 from "../components/images/RecentTransactions/ComuteIcon.png"
import img2 from "../components/images/RecentTransactions/RestaurantIcon.png"
import img3 from "../components/images/RecentTransactions/TravelIcon.png"
import img4 from "../components/images/RecentTransactions/PersonalTransactionIcon.png"
import img5 from "../components/images/RecentTransactions/businessTransactionIcon.png"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { MenuNavigator } from "../components/hw3/Menu"
import { SettingsScreen } from "../screens/SettingsScreen"
import { AllTransactionsScreen } from "../screens/AllTransactionsScreen"

const mock = new MockAdapter(axios)

mock.onGet("/Accounts").reply(200, {
  Accounts: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-3457",
      currentBalance: 499.0,
    },
    {
      id: "1234-4567-3456-3458",
      currentBalance: 4503.0,
    },
    {
      id: "1234-4567-3456-3459",
      currentBalance: 99999.5,
    },
  ],
})

mock.onGet("/Transactions").reply(200, {
  Transactions: [
    {
      id: `"Golub" Taxi Transportation`,
      title: `"Golub" Taxi Transportation`,
      date: "20th May, 18:39",
      amount: -345.0,
      coin: "EUR",
      img: img1,
    },
    {
      id: `"Francois" Restaurant Dinner`,
      title: `"Francois" Restaurant Dinner`,
      date: "15th May, 20:56",
      amount: -1158.0,
      coin: "EUR",
      img: img2,
    },
    {
      id: `"AirMax" Travel to Paris`,
      title: `"AirMax" Travel to Paris`,
      date: "14th May, 16:00",
      amount: -813.0,
      coin: "EUR",
      img: img3,
    },
    {
      id: `Construction ltd`,
      title: `Construction ltd`,
      date: "11th May, 09:26",
      amount: 24500.0,
      coin: "USD",
      img: img4,
    },
    {
      id: `Robert Smith`,
      title: `Robert Smith`,
      date: "03rd May, 12:06",
      amount: 11215.0,
      coin: "USD",
      img: img5,
    },
    {
      id: "Ashley Taylor",
      title: "Ashley Taylor",
      date: "17th July, 11:30",
      amount: 98765.0,
      coin: "USD",
      img: img5,
      },
      {
      id: "David Rodriguez",
      title: "David Rodriguez",
      date: "28th November, 20:15",
      amount: 24689.0,
      coin: "USD",
      img: img4,
      },
      {
      id: "Jessica Garcia",
      title: "Jessica Garcia",
      date: "12th October, 09:00",
      amount: 13579.0,
      coin: "USD",
      img: img3,
      },
      {
      id: "Richard Martinez",
      title: "Richard Martinez",
      date: "01st March, 14:45",
      amount: 86420.0,
      coin: "USD",
      img: img2,
      },
      {
      id: "Maria Robinson",
      title: "Maria Robinson",
      date: "19th August, 18:30",
      amount: 75316.0,
      coin: "USD",
      img: img1,
      },
      {
      id: "James Thompson",
      title: "James Thompson",
      date: "06th January, 21:00",
      amount: 96384.0,
      coin: "USD",
      img: img1,
      },
      {
      id: "William Gonzalez",
      title: "William Gonzalez",
      date: "23rd September, 13:15",
      amount: 52468.0,
      coin: "USD",
      img: img2,
      },
      {
      id: "Brian Hall",
      title: "Brian Hall",
      date: "05th May, 08:00",
      amount: 39642.0,
      coin: "USD",
      img: img3,
      },
      {
      id: "Joshua Allen",
      title: "Joshua Allen",
      date: "16th June, 22:45",
      amount: 28541.0,
      coin: "USD",
      img: img4,
      },
      {
      id: "Matthew King",
      title: "Matthew King",
      date: "30th December, 17:30",
      amount: 14725.0,
      coin: "USD",
      img: img5,
      }
  ],
})

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Home: undefined,
  Settings: undefined,
  AllTransactions: undefined
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation:"fade_from_bottom" }}
    >
      <Stack.Screen name="Home" component={MenuNavigator}></Stack.Screen>
      <Stack.Screen name="Settings" component={SettingsScreen}></Stack.Screen>
      <Stack.Screen name="AllTransactions" component={AllTransactionsScreen}></Stack.Screen>
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
