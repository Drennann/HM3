import React from "react"
import { ViewStyle, Dimensions, Image, Pressable, useColorScheme, ImageStyle } from "react-native"
import img1 from "../images/WalletIcon.png"
import img2 from "../images/CardIcon.png"
import img3 from "../images/AnalyticsIcon.png"
import img4 from "../images/Payments.png"
import { colors } from "../../theme"

export function Menu() {
  const theme = useColorScheme()

  return (
    <Pressable style={{ ...$menuContainer, backgroundColor: colors[theme].cardBackground }}>
      <Image source={img1} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image source={img2} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
      <Image source={img3}></Image>
      <Image source={img4} style={{ ...$menuIcon, tintColor: colors[theme].icon }}></Image>
    </Pressable>
  )
}

const { width } = Dimensions.get("window")

const $menuContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: colors.whiteBackground,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  width,
  height: 96,
}

const $menuIcon: ImageStyle = { tintColor: colors.menuIcons }
