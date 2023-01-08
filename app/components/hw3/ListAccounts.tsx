import React from "react"
import { FlatList, View } from "react-native"
import { Text } from "../Text"
import { AccountCard } from "./AccountCard"

export function ListAccounts({ accounts }: any) {
  const renderItem = ({ item: account }) => <AccountCard accountData={account} />

  return (
    <View>
      <FlatList data={accounts} renderItem={renderItem} keyExtractor={(account) => account.id} />
    </View>
  )
}
