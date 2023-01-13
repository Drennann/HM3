import React from "react"
import {
  View,
  ViewStyle,
  Dimensions,
  Image,
  TextStyle,
  Pressable,
  useColorScheme,
} from "react-native"
import { Text } from "../"
import { Account } from "../../interfaces/interfaces"
import { colors, spacing, typography } from "../../theme"
import img1 from "../images/Main/More.png"

interface AccountCardProps {
  AccountData: Account
}

const { width } = Dimensions.get("screen")

export function AccountCard({ AccountData }: AccountCardProps) {
  const theme = useColorScheme()

  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  }

  // backgroundColor: theme === "light" ? colors.whiteBackground : colors.backgroundCardDark
  return (
    <View style={{ ...$cardContainer, backgroundColor: colors[theme].cardBackground }}>
      <View style={$cardContainerFirstSectionContainer}>
        <View>
          <Text style={{ ...$cardContainerFirstSectionContainerTitle, color: colors[theme].text }}>
            Current Account
          </Text>
          <Text
            style={{
              ...$cardContainerFirstSectionContainerTitleId,
              color: colors[theme].description,
            }}
          >
            {AccountData.id}
          </Text>
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
        <Text
          style={{
            ...$cardContainerCurrencyTypeContainerCurrencyDisabledText,
            color: colors[theme].description,
          }}
        >
          USD
        </Text>
        <Text
          style={{
            ...$cardContainerCurrencyTypeContainerCurrencyDisabledText,
            color: colors[theme].description,
          }}
        >
          GBP
        </Text>
      </View>
      <View>
        <Text style={{ ...$cardContainerCurrentBalanceText, color: colors[theme].text }}>
          {currencyFormat(AccountData.currentBalance)}
        </Text>
        <Text style={{ ...$cardContainerDescriptionText, color: colors[theme].text }}>
          Current balance
        </Text>
      </View>
    </View>
  )
}

export const ACCOUNT_CARD_HORIZONTAL_MARGIN = 15
export const ACCOUNT_CARD_HORIZONTAL_PADDING = 15
export const NECCESARY_MAGIC_NUMBER = 60 // It's show's 30px of the next card, and contains ACCOUNT_CARD_HORIZONTAL_MARGIN * 2

const $cardContainer: ViewStyle = {
  backgroundColor: "#FFFFFF",
  paddingHorizontal: ACCOUNT_CARD_HORIZONTAL_PADDING,
  paddingVertical:spacing.medium,
  marginHorizontal: ACCOUNT_CARD_HORIZONTAL_MARGIN,
  width: width - NECCESARY_MAGIC_NUMBER,
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
  color: colors.AccountCardActivatedText,
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
