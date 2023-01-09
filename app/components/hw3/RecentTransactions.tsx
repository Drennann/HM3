import React from "react"
import { View, ViewStyle, FlatList, Image, TextStyle } from "react-native"
import { Text } from "../"
import { TransactionCard } from "./TransactionCard"
import img6 from "../images/RecentTransactions/FilterIcon.png"
import { colors, spacing, typography } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useColorScheme } from "react-native"
import { transaction } from "../../interfaces/interfaces"

interface IProp {
  transactions: transaction[]
}
interface IRender{
  item: transaction
}

export function RecentTransactions({ transactions }: IProp) {

  const theme = useColorScheme()

  const renderItem = ({ item: transaction }: IRender) => (
    <TransactionCard
      transactionData={transaction}
      lastId={transactions[transactions.length - 1].id === transaction.id}
    />
  )
  return (
    <View style={{...$RecentTransactionsContainer, backgroundColor: colors[theme].cardBackground}}>
      <View
        style={$RecentTransactionsTitleSection}
      >
        <Text
          style={{...$RecentTransactionsTitleSectionText, color:colors[theme].text}}
        >
          Recent transactions
        </Text>
        <TouchableOpacity
          style={$RecentTransactionsLogoContainer}
        >
          <Image source={img6}></Image>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(transaction) => transaction.id}
      />
    </View>
  )
}

const $RecentTransactionsContainer: ViewStyle = {
  backgroundColor: colors.whiteBackground,
  width: "93%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 30,
  paddingHorizontal: spacing.large,
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
}

const $RecentTransactionsTitleSection: ViewStyle = {
  paddingBottom: spacing.extraSmall,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const $RecentTransactionsTitleSectionText: TextStyle = {
  lineHeight: 21,
  fontSize: 17,
  fontFamily: typography.primary.semiBold,
}

const $RecentTransactionsLogoContainer: ViewStyle = {
  backgroundColor: colors.violetBackground,
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
}
