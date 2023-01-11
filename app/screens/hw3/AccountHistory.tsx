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
import { Menu } from "../../components/hw3/Menu"
import { RecentTransactions } from "../../components/hw3/RecentTransactions"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { colors, spacing, typography } from "../../theme"
import { ListAccounts } from "../../components/hw3/ListAccounts"
import img1 from "../../components/images/RecentTransactions/ComuteIcon.png"
import img2 from "../../components/images/RecentTransactions/RestaurantIcon.png"
import img3 from "../../components/images/RecentTransactions/TravelIcon.png"
import img4 from "../../components/images/RecentTransactions/PersonalTransactionIcon.png"
import img5 from "../../components/images/RecentTransactions/businessTransactionIcon.png"
import { Account, Transaction } from "../../interfaces/interfaces"

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
  ],
})

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
      style={$screenContainer}
      // safeAreaEdges={["top", "bottom"]}
    >
      <SafeAreaView style={{ ...$contentContainer, backgroundColor: colors[theme].background }}>
        <View style={$TitleSection}>
          <View style={$TitleSectionLeftView}></View>
          <Text style={$TitleSectionText}>Account History</Text>
          <View style={$TitleSectionRightView}>
            <Pressable>
              <Image source={require("../../components/images/Main/Settings.png")}></Image>
            </Pressable>
          </View>
        </View>

        <ListAccounts Accounts={Accounts} />
        <RecentTransactions Transactions={Transactions} />
        <Menu />
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
  justifyContent: "space-between",
  width,
  height,
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
