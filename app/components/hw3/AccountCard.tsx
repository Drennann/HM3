import { intlFormat } from "date-fns"
import React from "react"
import { Pressable, useColorScheme } from "react-native"
import { View, ViewStyle, Dimensions, Image, TextStyle } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "../"
import { account } from "../../interfaces/interfaces"
import { colors, spacing, typography } from "../../theme"
import img1 from "../images/Main/More.png"

interface IProp {
  accountData : account
}

const { width } = Dimensions.get("screen")

export function AccountCard({ accountData }: IProp) {

  const theme = useColorScheme();

  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

 // backgroundColor: theme === "light" ? colors.whiteBackground : colors.backgroundCardDark
  return (
    <View style={{...$cardContainer, backgroundColor: colors[theme].cardBackground}}>
      <View style={$cardContainerFirstSectionContainer}>
        <View>
          <Text style={{...$cardContainerFirstSectionContainerTitle, color: colors[theme].text}}>Current Account</Text>
          <Text style={{...$cardContainerFirstSectionContainerTitleId, color: colors[theme].description}}>{accountData.id}</Text>
        </View>
        <View style={$cardContainerFirstSectionMoreLogo}>
          <Pressable style={$LogoContainer}>
            <Image source={img1}></Image>
          </Pressable>
        </View>
      </View>
      <View style={$cardContainerCurrencyTypeContainer}>
        <View style={$cardContainerCurrencyTypeContainerCurrencyActivated}>
          <Text style={$cardContainerCurrencyTypeContainerCurrencyActivatedText}>EUR</Text>
        </View>
        <Text style={{...$cardContainerCurrencyTypeContainerCurrencyDisabledText, color: colors[theme].description}}>USD</Text>
        <Text style={{...$cardContainerCurrencyTypeContainerCurrencyDisabledText, color: colors[theme].description}}>GBP</Text>
      </View>
      <View>
        <Text style={{...$cardContainerCurrentBalanceText, color: colors[theme].text}}>{currencyFormat(accountData.currentBalance)}</Text>
        <Text style={{...$cardContainerDescriptionText, color: colors[theme].text}}>Current balance</Text>
      </View>
    </View>
  )
}

const $cardContainer: ViewStyle = {
  backgroundColor: "#FFFFFF",
  paddingHorizontal: 15,
  paddingTop: 10,
  paddingBottom: spacing.tiny,
  marginLeft: 15,
  marginRight:15,
  width: width - 60,
  borderRadius: 25,
}

const $LogoContainer: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  marginBottom: spacing.tiny,
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
