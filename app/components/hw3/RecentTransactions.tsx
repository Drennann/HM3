import React from "react"
import { View, ViewStyle, FlatList, Image } from "react-native"
import { Text, AutoImage } from "../"
import { TransactionCard } from "./TransactionCard"
import { useFonts, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import img6 from "../images/RecentTransactions/FilterIcon.png"

export function RecentTransactions({ transactions }: any) {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  const renderItem = ({ item: transaction }) => <TransactionCard transactionData={transaction} />
  return (
    <View style={$RecentTransactionsContainer}>
      <View style={{ paddingBottom: 26, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{ lineHeight: 21, fontSize: 17, color: "#16110D", fontFamily:"Montserrat_600SemiBold"}}>Recent transactions</Text>
          <View style={{backgroundColor:"#523CF8", width:30, height:30, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:15}}>
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
  backgroundColor: "#FFFFFF",
  width: "93%",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 30,
  paddingHorizontal: 22,
  paddingTop: 20,
  paddingBottom: 30,
}
