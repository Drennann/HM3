import React, { useEffect, useState } from "react"
import {
  ViewStyle,
  Dimensions,
  View,
  SafeAreaView,
  Image,
  TextStyle,
  Pressable,
  useColorScheme,
  RefreshControl,
  ScrollView,
} from "react-native"
import { Screen, Text } from "../../components"
import { RecentTransactions } from "../../components/hw3/RecentTransactions"
import { colors, spacing, typography } from "../../theme"
import { ListAccounts } from "../../components/hw3/ListAccounts"
import { Account, Transaction } from "../../interfaces/interfaces"
import { navigate } from "../../navigators"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { BAR_HEIGHT } from "../../components/hw3/Menu"
import { api } from "../../services/api"

export function AccountHistory() {
  const [Accounts, setAccounts] = useState<Account[]>([])
  const [Transactions, setTransactions] = useState<Transaction[]>([])
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
  const [currentAccount, setCurrectAccount] = useState<number>(0)

  const theme = useColorScheme()
  const { bottom } = useSafeAreaInsets()

  const refreshData = async () => {
    try {
      ;(async () => {
        setIsRefreshing(true)
        const responseTransactions = await api.getTransactions(currentAccount)
        setTransactions(responseTransactions.data)
        setIsRefreshing(false)
      })()
    } catch (error) {
      console.log(error)
    }
  }
  /*   useEffect(() => {
    Animated.parallel([
      Animated.timing(translation, {
        toValue: 0,
        useNativeDriver: true,
        delay: 300,
        duration: 700,
      }),
      Animated.timing(opacity, { toValue: 1, useNativeDriver: true, delay: 300, duration: 700 }),
    ]).start()
  }, []) */

  useEffect(() => {
    try {
      ;(async () => {
        const [AccountsResponse] = await Promise.all([
          api.getAccounts(),
        ])
        setAccounts(AccountsResponse.data)
      })()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(()=>{
    (async ()=>{
      const TransactionsResponse = await api.getTransactions(currentAccount);
      setTransactions(TransactionsResponse.data)
    })()
  },[currentAccount])

  return (
    <Screen
      style={{ ...$screenContainer, backgroundColor: colors[theme].background }}
      preset="scroll"
      ScrollViewProps={{
        overScrollMode: "always",
        refreshControl: (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshData}
            tintColor="blue"
            colors={["red"]}
          />
        ),
      }}
      // safeAreaEdges={["top", "bottom"]}
    >
      <SafeAreaView
        style={{
          ...$contentContainer,
          backgroundColor: colors[theme].background,
          paddingBottom: BAR_HEIGHT + bottom + spacing.medium,
        }}
      >
        <ScrollView>
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
          <ListAccounts Accounts={Accounts} onChangeCurrentAccount={setCurrectAccount} />
          <RecentTransactions Transactions={Transactions} CurrentAccount={currentAccount}/>
        </ScrollView>
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

/* const $animatedBox: ViewStyle = {
  width: 100,
  height: 100,
  backgroundColor: "orange",
} */

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
