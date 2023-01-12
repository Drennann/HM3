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
import { navigate } from "../../navigators"
import { useRoute } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"

interface RecentTransactionsProps {
  Transactions: Transaction[]
}

export function RecentTransactions({ Transactions }: RecentTransactionsProps) {
  const theme = useColorScheme()
  const route = useRoute()

  const renderItem: ListRenderItem<Transaction> = ({ item: Transaction }) => (
    <TransactionCard
      TransactionData={Transaction}
      lastId={Transactions[Transactions.length - 1].id === Transaction.id}
    />
  )
  return (
    <ScrollView>
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
        {route.name === "AccountHistory" && (
          <Pressable style={$ViewAllButton} onPress={() => navigate("AllTransactions")}>
            <Text style={{ ...$ViewAllButtonText, color: colors[theme].text }}>View All</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  )
}

const $RecentTransactionsContainer: ViewStyle = {
  backgroundColor: colors.whiteBackground,
  width: 365,
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 30,
  paddingHorizontal: spacing.large,
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
  marginVertical:20
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

const $ViewAllButton: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F76654",
  width: 100,
  alignSelf: "center",
  borderRadius: 10,
  marginTop: 15,
}

const $ViewAllButtonText: TextStyle = {
  fontSize: 14,
  fontFamily: typography.primary.semiBold,
}
