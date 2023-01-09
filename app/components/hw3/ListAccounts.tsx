import React from "react"
import { FlatList, View, Dimensions, Image } from "react-native"
import { AccountCard } from "./AccountCard"
import active from "../images/Main/active.png"
import inactive from "../images/Main/inactive.png"
import { AutoImage } from "../AutoImage"

const { width } = Dimensions.get("screen")

export function ListAccounts({ accounts }: any) {

  const renderItem = ({ item: account }) => <AccountCard accountData={account} />

  return (
    <View>
      <View style={{display:"flex", justifyContent:"center", flexDirection:"row"}}>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", width:"12%", paddingBottom:21}}>
          <Image source={active}></Image>
          <Image source={inactive}></Image>
          <Image source={inactive}></Image>
          <Image source={inactive}></Image>
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.8 + 15}
        decelerationRate="fast"
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(account) => account.id}
      />
    </View>
  )
}
