import React from "react"
import { View, ViewStyle, Dimensions, Image, TextStyle } from "react-native"
import { Text } from "../"
import { colors, spacing, typography } from "../../theme"
import img1 from "../images/Main/More.png"

const { width } = Dimensions.get("screen")

export function AccountCard({ accountData }: any) {
  return (
    <View style={$cardContainer}>
      <View style={$cardContainerFirstSectionContainer}>
        <View>
          <Text style={$cardContainerFirstSectionContainerTitle}>Current Account</Text>
          <Text style={$cardContainerFirstSectionContainerTitleId}>{accountData.id}</Text>
        </View>
        <View style={$cardContainerFirstSectionMoreLogo}>
          <Image source={img1}></Image>
        </View>
      </View>
      <View style={$cardContainerCurrencyTypeContainer}>
        <View style={$cardContainerCurrencyTypeContainerCurrencyActivated}>
          <Text style={$cardContainerCurrencyTypeContainerCurrencyActivatedText}>EUR</Text>
        </View>
        <Text style={$cardContainerCurrencyTypeContainerCurrencyDisabledText}>USD</Text>
        <Text style={$cardContainerCurrencyTypeContainerCurrencyDisabledText}>GBP</Text>
      </View>
      <Text style={$cardContainerCurrentBalanceText}>{accountData.currentBalance}</Text>
      <Text style={$cardContainerDescriptionText}>Current balance</Text>
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

const $cardContainerFirstSectionContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}

const $cardContainerFirstSectionContainerTitle: TextStyle = {
  fontFamily: typography.primary.bold,
  fontSize: 22,
  marginBottom: spacing.tiny,
}

const $cardContainerFirstSectionContainerTitleId: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  marginBottom: 16,
}

const $cardContainerFirstSectionMoreLogo: ViewStyle = {
  backgroundColor: colors.orangeBackground,
  width: 40,
  height: 40,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const $cardContainerCurrencyTypeContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}

const $cardContainerCurrencyTypeContainerCurrencyActivated: ViewStyle = {
  backgroundColor: colors.violetBackground,
  borderRadius: 8,
  width: 45,
  height: 25,
  marginRight: spacing.large,
}

const $cardContainerCurrencyTypeContainerCurrencyActivatedText: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  textAlign: "center",
  color: colors.accountCardActivatedText,
}

const $cardContainerCurrencyTypeContainerCurrencyDisabledText: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  marginRight: spacing.large,
}

const $cardContainerCurrentBalanceText: TextStyle = {
  fontFamily: typography.primary.bold,
  lineHeight: 41,
  fontSize: 34,
}

const $cardContainerDescriptionText: TextStyle = { fontSize: 15 }
