import React from "react"
import { View, ViewStyle, Dimensions, Image } from "react-native"
import { Text } from "../"
import { useFonts, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat"
import img1 from "../images/Main/More.png"

const { width } = Dimensions.get("screen")

export function AccountCard({ accountData }: any) {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={$cardContainer}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            style={{
              fontFamily: "Montserrat_700Bold",
              lineHeight: 27,
              fontSize: 22,
              marginBottom: 5,
            }}
          >
            Current Account
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_600SemiBold",
              lineHeight: 15,
              fontSize: 12,
              marginBottom: 16,
            }}
          >
            {accountData.id}
          </Text>
        </View>
        <View style={{backgroundColor:"#F76654", width:40, height:40, borderRadius:20, display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Image source={img1}></Image>
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row", alignItems:"center"}}>
        <View style={{backgroundColor: "#523CF8", borderRadius:8, width:45, height:25, marginRight:23}}>
            <Text style={{ fontFamily: "Montserrat_600SemiBold",fontSize: 12, textAlign: "center", color: "#FEFEFE"}}>
            EUR
            </Text>
        </View>
        <Text style={{ fontFamily: "Montserrat_600SemiBold",fontSize: 12, marginRight:23}}>
          USD
        </Text>
        <Text style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12 }}>
          GBP
        </Text>
      </View>
      <Text style={{ fontFamily: "Montserrat_700Bold", lineHeight: 41, fontSize: 34 }}>
        {accountData.currentBalance}
      </Text>
      <Text style={{fontSize: 15 }}>Current balance</Text>
    </View>
  )
}

const $cardContainer: ViewStyle = {
  backgroundColor: "#FFFFFF",
  paddingHorizontal: 15,
  paddingTop: 10,
  paddingBottom: 13,
  marginLeft: 15,
  width: width * 0.8,
  borderRadius: 25,
}
