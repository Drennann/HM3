import React from "react"
import { View, ViewStyle, Dimensions, Image } from "react-native"
import img1 from "../images/WalletIcon.png"
import img2 from "../images/CardIcon.png"
import img3 from "../images/AnalyticsIcon.png"
import img4 from "../images/Payments.png"

export function Menu() {
  return (
    <View style={$menuContainer}>
      <Image source={img1}></Image>
      <Image source={img2}></Image>
      <Image source={img3}></Image>
      <Image source={img4}></Image>
    </View>
  )
}

const { width } = Dimensions.get("window")

const $menuContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent:"space-evenly",
  alignItems:"center",
  backgroundColor: "#FFFFFF",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  width,
  height: 96,
}
