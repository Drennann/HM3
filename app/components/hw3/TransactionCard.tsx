import React from "react"
import { Image, TextStyle, View, ViewStyle, useColorScheme } from "react-native"
import { Text } from "../Text"
import { colors, spacing, typography } from "../../theme"
import { Transaction } from "../../interfaces/interfaces"

interface TransactionCardProps {
  TransactionData: Transaction
  lastId: boolean
}

const colorCode = (n: number) => {
  let color = ""
  n > 0 ? (color = "#523CF8") : (color = "#F76654")
  return color
}

export function TransactionCard({ TransactionData, lastId }: TransactionCardProps) {
  const theme = useColorScheme()

  return (
    <View style={$TransactionCardContainer}>
      <View style={$TransactionCardIcon}>
        <Image source={TransactionData.img}></Image>
      </View>
      <View
        style={
          lastId
            ? $TransactionCardLeftTextContainerLastId
            : { ...$TransactionCardLeftTextContainer, borderColor: colors[theme].border }
        }
      >
        <Text style={{ ...$TransactionCardTitle, color: colors[theme].text }}>
          {TransactionData.title}
        </Text>
        <Text style={{ ...$TransactionCardDescriptionLeft, color: colors[theme].description }}>
          {TransactionData.date}
        </Text>
      </View>
      <View
        style={
          lastId
            ? $TransactionCardRightTextContainerLastId
            : { ...$TransactionCardRightTextContainer, borderColor: colors[theme].border }
        }
      >
        <Text style={{ ...$TransactionCardAmount, color: colorCode(TransactionData.amount) }}>
          {TransactionData.amount > 0
            ? `+${TransactionData.amount.toFixed(2)}`
            : `${TransactionData.amount.toFixed(2)}`}
        </Text>
        <Text style={{ ...$TransactionCardDescriptionRight, color: colors[theme].description }}>
          {TransactionData.coin}
        </Text>
      </View>
    </View>
  )
}

const $TransactionCardContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginBottom: spacing.tiny,
}

const $TransactionCardAmount: TextStyle = {
  textAlign: "right",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
}

const $TransactionCardIcon: ViewStyle = {
  marginRight: spacing.medium,
  backgroundColor: colors.orangeBackground,
  width: 30,
  height: 30,
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const $TransactionCardRightTextContainer: ViewStyle = {
  flex:1,
  borderBottomWidth: 1,
  borderColor: "#DCDCDC",
  paddingBottom: 13,
}

const $TransactionCardRightTextContainerLastId: ViewStyle = {
  flex:1
}

const $TransactionCardLeftTextContainer: ViewStyle = {
  borderBottomWidth: 1,
  borderColor: "#DCDCDC",
  paddingBottom: 13,
}

const $TransactionCardLeftTextContainerLastId: ViewStyle = {
}

const $TransactionCardTitle: TextStyle = {
  textAlign: "left",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
}

const $TransactionCardDescriptionLeft: TextStyle = {
  textAlign: "left",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
  color: colors.description,
}

const $TransactionCardDescriptionRight: TextStyle = {
  textAlign: "right",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
  color: colors.description,
}
