import React from "react"
import { View, ViewStyle, FlatList, Image, TextStyle } from "react-native"
import { Text } from "../"
import { TransactionCard } from "./TransactionCard"
import img6 from "../images/RecentTransactions/FilterIcon.png"
import { colors, spacing, typography } from "../../theme"

export function RecentTransactions({ transactions }: any) {

  const renderItem = ({ item: transaction }) => (
    <TransactionCard
      transactionData={transaction}
      lastId={transactions[transactions.length - 1].id === transaction.id}
    />
  )
  return (
    <View style={$RecentTransactionsContainer}>
      <View
        style={$RecentTransactionsTitleSection}
      >
        <Text
          style={$RecentTransactionsTitleSectionText}
        >
          Recent transactions
        </Text>
        <View
          style={$RecentTransactionsLogoContainer}
        >
          <Image source={img6}></Image>
        </View>
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
  paddingBottom: spacing.large,
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
