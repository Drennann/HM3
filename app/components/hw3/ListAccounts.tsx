import React from "react"
import { FlatList, View, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Text } from "../Text"
import { AccountCard } from "./AccountCard"

const {width} = Dimensions.get("screen")

export function ListAccounts({ accounts }: any) {
  const renderItem = ({ item: account }) => <AccountCard accountData={account} />

  return (
    <View>
      <FlatList showsHorizontalScrollIndicator={false} snapToInterval={width*0.8+15} decelerationRate="fast" horizontal={true} data={accounts} renderItem={renderItem} keyExtractor={(account) => account.id} />
    </View>
  )
}
