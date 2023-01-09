import React from "react"
import { ViewStyle, Dimensions, Image } from "react-native"
import img1 from "../images/WalletIcon.png"
import img2 from "../images/CardIcon.png"
import img3 from "../images/AnalyticsIcon.png"
import img4 from "../images/Payments.png"
import { colors } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"

export function Menu() {
  return (
    <TouchableOpacity style={$menuContainer}>
      <Image source={img1}></Image>
      <Image source={img2}></Image>
      <Image source={img3}></Image>
      <Image source={img4}></Image>
    </TouchableOpacity>
  )
}

const { width } = Dimensions.get("window")

const $menuContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent:"space-evenly",
  alignItems:"center",
  backgroundColor: colors.whiteBackground,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  width,
  height: 96
}
