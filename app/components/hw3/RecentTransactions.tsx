import React from "react"
import {
  View,
  ViewStyle,
  FlatList,
  Image,
  TextStyle,
  Pressable,
  useColorScheme,
  ListRenderItem,
} from "react-native"
import { Text } from "../"
import { TransactionCard } from "./TransactionCard"
import img6 from "../images/RecentTransactions/FilterIcon.png"
import { colors, spacing, typography } from "../../theme"
import { Transaction } from "../../interfaces/interfaces"

interface RecentTransactionsProps {
  Transactions: Transaction[]
}

export function RecentTransactions({ Transactions }: RecentTransactionsProps) {
  const theme = useColorScheme()

  const renderItem: ListRenderItem<Transaction> = ({ item: Transaction }) => (
    <TransactionCard
      TransactionData={Transaction}
      lastId={Transactions[Transactions.length - 1].id === Transaction.id}
    />
  )
  return (
    <View
      style={{ ...$RecentTransactionsContainer, backgroundColor: colors[theme].cardBackground }}
    >
      <View style={$RecentTransactionsTitleSection}>
        <Text style={{ ...$RecentTransactionsTitleSectionText, color: colors[theme].text }}>
          Recent Transactions
        </Text>
        <Pressable style={$RecentTransactionsLogoContainer}>
          <Image source={img6}></Image>
        </Pressable>
      </View>
      <FlatList
        data={Transactions}
        renderItem={renderItem}
        keyExtractor={(Transaction) => Transaction.id}
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
