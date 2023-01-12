import React from "react"
import { Image, useColorScheme, ImageStyle } from "react-native"
import img1 from "../images/WalletIcon.png"
import img2 from "../images/CardIcon.png"
import img3 from "../images/AnalyticsIcon.png"
import img4 from "../images/Payments.png"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { DashboardScreen } from "../../screens/DashboardScreen"
import { CardsScreen } from "../../screens/CardsScreen"
import { PaymentsScreen } from "../../screens/PaymentsScreen"
import { AccountHistory } from "../../screens/hw3/AccountHistory"
import { colors } from "../../theme"

export type MenuParamList = {
  Dashboard: undefined
  Cards: undefined
  AccountHistory: undefined
  Payments: undefined
}
const Switch = createBottomTabNavigator<MenuParamList>()

export function MenuNavigator() {

  const { bottom } = useSafeAreaInsets()
  const theme = useColorScheme()

  return (
    <Switch.Navigator

    screenOptions={{
      headerShown: false,
      tabBarStyle: [{ height: bottom + 96 , backgroundColor: colors[theme].cardBackground, position:"absolute", borderTopLeftRadius:30, borderTopRightRadius:30}],
      tabBarShowLabel:false,
    }}

  >
    <Switch.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        tabBarIcon: ({ focused }) => <Image source={img1} style={focused? $menuIconActivated : ({tintColor: colors[theme].iconDesactivated})}></Image>,
      }}
    />

    <Switch.Screen
      name="Cards"
      component={CardsScreen}
      options={{
        tabBarIcon: ({ focused }) => <Image source={img2} style={focused? $menuIconActivated : ({tintColor: colors[theme].iconDesactivated})}></Image>,
      }}
    />

    <Switch.Screen
      name="AccountHistory"
      component={AccountHistory}
      options={{
        tabBarIcon: ({ focused }) => <Image source={img3} style={focused? $menuIconActivated : ({tintColor: colors[theme].iconDesactivated})}></Image>,
      }}
    />

    <Switch.Screen
      name="Payments"
      component={PaymentsScreen}
      options={{
        tabBarIcon: ({ focused }) => <Image source={img4} style={focused? $menuIconActivated : ({tintColor: colors[theme].iconDesactivated})}></Image>,
      }}
    />
  </Switch.Navigator>
  )
}

const $menuIconActivated: ImageStyle = { tintColor: colors.light.iconActivated }

/*     <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
      <Image source={img1} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image source={img2} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image source={img3}></Image>
      <Image source={img4} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    </Pressable> */