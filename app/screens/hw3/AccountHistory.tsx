import React, { useEffect, useRef, useState } from "react"
import {
  ViewStyle,
  Dimensions,
  View,
  SafeAreaView,
  Image,
  TextStyle,
  Pressable,
  useColorScheme,
  Animated,
} from "react-native"
import { Screen, Text } from "../../components"
import { RecentTransactions } from "../../components/hw3/RecentTransactions"
import axios from "axios"
import { colors, spacing, typography } from "../../theme"
import { ListAccounts } from "../../components/hw3/ListAccounts"
import { Account, Transaction } from "../../interfaces/interfaces"
import { navigate } from "../../navigators"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { BAR_HEIGHT } from "../../components/hw3/Menu"

export function AccountHistory() {
  const [Accounts, setAccounts] = useState<Account[]>([])
  const [Transactions, setTransactions] = useState<Transaction[]>([])

  const translation = useRef(new Animated.Value(100)).current
  const opacity = useRef(new Animated.Value(0)).current

  const theme = useColorScheme()
  const { bottom } = useSafeAreaInsets()

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translation, {
        toValue: 0,
        useNativeDriver: true,
        delay: 300,
        duration: 700,
      }),
      Animated.timing(opacity, { toValue: 1, useNativeDriver: true, delay: 300, duration: 700 }),
    ]).start()
  }, [])

  useEffect(() => {
    try {
      ;(async () => {
        const [responseAccounts, responseTransactions] = await Promise.all([
          axios.get("/Accounts"),
          axios.get("/Transactions"),
        ])
        setAccounts(responseAccounts.data.Accounts)
        setTransactions(responseTransactions.data.Transactions)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Screen
      style={{ ...$screenContainer, backgroundColor: colors[theme].background }}
      // safeAreaEdges={["top", "bottom"]}
    >
      <SafeAreaView
        style={{
          ...$contentContainer,
          backgroundColor: colors[theme].background,
          paddingBottom: BAR_HEIGHT + bottom + spacing.medium,
        }}
      >
        <Animated.ScrollView style={{ transform: [{ translateY: translation }], opacity }}>
          {/* <Animated.View style={{...$animatedBox}}></Animated.View> */}
          <View style={$TitleSection}>
            <View style={$TitleSectionLeftView}></View>
            <Text style={$TitleSectionText}>Account History</Text>
            <View style={$TitleSectionRightView}>
              <Pressable onPress={() => navigate("Settings")}>
                <Image source={require("../../components/images/Main/Settings.png")}></Image>
              </Pressable>
            </View>
          </View>

          <ListAccounts Accounts={Accounts} />
          <RecentTransactions Transactions={Transactions} />
        </Animated.ScrollView>
      </SafeAreaView>
    </Screen>
  )
}

const { width, height } = Dimensions.get("window")

const $screenContainer: ViewStyle = {
  backgroundColor: colors.violetBackground,
  paddingVertical: spacing.medium,
}

const $contentContainer: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width,
  minHeight: height,
}

const $animatedBox: ViewStyle = {
  width: 100,
  height: 100,
  backgroundColor: "orange",
}

const $TitleSection: ViewStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: spacing.large,
  flexDirection: "row",
}

const $TitleSectionLeftView: ViewStyle = {
  marginLeft: spacing.extraLarge,
}

const $TitleSectionRightView: ViewStyle = {
  marginRight: spacing.small,
}

const $TitleSectionText: TextStyle = {
  fontSize: 17,
  textAlign: "center",
  color: "white",
  fontFamily: typography.primary.semiBold,
}
