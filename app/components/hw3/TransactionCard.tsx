import React from "react"
import { Image, View, ViewStyle } from "react-native"
import { Text } from "../Text"
import { useFonts, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"

export function TransactionCard({ transactionData }: any) {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  const colorCode = (n) => {
    let color = ""
    n > 0 ? color = "#523CF8" : color = "#F76654"
    return color
  }
  
  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={$TransactionCardContainer}>
      <View style={$TransactionCard_Icon}>
        <Image source={transactionData.img}></Image>
      </View>
      <View style={$TransactionCard_LeftTextContainer}>
        <Text style={{textAlign: "left", lineHeight:15, fontSize:12, fontFamily:"Montserrat_600SemiBold", color:"#16110D"}}>{transactionData.title}</Text>
        <Text style={{textAlign: "left", lineHeight:15, fontSize:12, fontFamily:"Montserrat_600SemiBold", color:"#C4C4C4"}}>{transactionData.date}</Text>
      </View>
      <View style={$TransactionCard_RightTextContainer}>
        <Text style={{textAlign: "right", lineHeight:15, fontSize:12, fontFamily:"Montserrat_600SemiBold", color:colorCode(transactionData.amount)}}>{transactionData.amount > 0 ? `+${transactionData.amount}` : `${transactionData.amount}`}</Text>
        <Text style={{textAlign: "right", lineHeight:15, fontSize:12, fontFamily:"Montserrat_600SemiBold", color:"#C4C4C4"}}>{transactionData.coin}</Text>
      </View>
    </View>
  )
}

const $TransactionCardContainer: ViewStyle = {
    display:"flex",
    flexDirection:"row",
    marginBottom:15
  }
  
  const $TransactionCard_Icon: ViewStyle = {
    marginRight:15,
    backgroundColor: "#F76654",
    width: 30,
    height: 30,
    borderRadius: 8,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }

  const $TransactionCard_RightTextContainer: ViewStyle = {
    width:"20%",
    borderBottomWidth: 1,
    borderColor: "#DCDCDC",
    paddingBottom: 15
  }

  const $TransactionCard_LeftTextContainer: ViewStyle = {
    width:"62%",
    borderBottomWidth: 1,
    borderColor: "#DCDCDC",
    paddingBottom: 15
  }