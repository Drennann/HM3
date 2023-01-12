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
} from "react-native"
import { Screen, Text } from "../../components"
import { RecentTransactions } from "../../components/hw3/RecentTransactions"
import axios from "axios"
import { colors, spacing, typography } from "../../theme"
import { ListAccounts } from "../../components/hw3/ListAccounts"
import { Account, Transaction } from "../../interfaces/interfaces"
import { navigate } from "../../navigators"


export function AccountHistory() {
  const [Accounts, setAccounts] = useState<Account[]>([])
  const [Transactions, setTransactions] = useState<Transaction[]>([])

  const theme = useColorScheme()

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
      style={{...$screenContainer, backgroundColor: colors[theme].background}}
      // safeAreaEdges={["top", "bottom"]}
    >
      <SafeAreaView style={{ ...$contentContainer, backgroundColor: colors[theme].background }}>
        <View style={$TitleSection}>
          <View style={$TitleSectionLeftView}></View>
          <Text style={$TitleSectionText}>Account History</Text>
          <View style={$TitleSectionRightView}>
            <Pressable onPress={()=>navigate("Settings")}>
              <Image source={require("../../components/images/Main/Settings.png")}></Image>
            </Pressable>
          </View>
        </View>

        <ListAccounts Accounts={Accounts} />
        <RecentTransactions Transactions={Transactions} />
      </SafeAreaView>
    </Screen>
  )
}

const { width, height } = Dimensions.get("window")

const $screenContainer: ViewStyle = {
  backgroundColor: colors.violetBackground,
}

const $contentContainer: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  width,
  height: height-96,
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
