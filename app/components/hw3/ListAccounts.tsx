import React from "react"
import { FlatList } from "react-native"
import { AccountCard } from "./AccountCard"

export function ListAccounts({ accounts }: any) {
  const renderItem = ({ item:account }) => <AccountCard accountData={account} />

  return <FlatList data={accounts} renderItem={renderItem} keyExtractor={(account) => account.id} />
}
