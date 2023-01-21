import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, useColorScheme, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen } from "../components"
import { RecentTransactions } from "../components/hw3/RecentTransactions"
import { Transaction } from "../interfaces/interfaces"
import axios from "axios"
import { colors } from "../theme"
import { ScrollView } from "react-native-gesture-handler"
import { api } from "../services/api"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `AllTransactions: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="AllTransactions" component={AllTransactionsScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AllTransactionsScreen: FC<StackScreenProps<AppStackScreenProps, "AllTransactions">> =
  observer(function AllTransactionsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const [Transactions, setTransactions] = useState<Transaction[]>([])

    const theme = useColorScheme()

    useEffect(() => {
      try {
        ;(async () => {
          const responseTransactions = await api.getTransactions()
          setTransactions(responseTransactions.data.Transactions)
        })()
      } catch (error) {
        console.log(error)
      }
    }, [])

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root}>
        <ScrollView>
          <View style={{ ...$PlaceHolder, backgroundColor: colors[theme].background }}>
            <RecentTransactions Transactions={Transactions} />
          </View>
        </ScrollView>
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
  minHeight: height,
}
