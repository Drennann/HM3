import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, TextStyle, useColorScheme, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
import { colors, typography } from "../theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Dashboard: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Dashboard" component={DashboardScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const DashboardScreen: FC<StackScreenProps<AppStackScreenProps, "Dashboard">> = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const theme = useColorScheme()

  return (
    <Screen style={$root} preset="scroll">
    <View style={{ ...$PlaceHolder, backgroundColor: colors[theme].background }}>
      <Text text="Dashboard" style={{ ...$PlaceHolderText, color: colors[theme].text }} />
    </View>
  </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const { height } = Dimensions.get("screen")
const $PlaceHolder: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height,
}

const $PlaceHolderText: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 30,
  lineHeight:35
}