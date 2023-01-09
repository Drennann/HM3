import React from "react"
import { Image, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "../Text"
import { useFonts, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { colors, spacing, typography } from "../../theme"

export function TransactionCard({ transactionData, lastId }: any) {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })
  
  const colorCode = (n) => {
    let color = ""
    n > 0 ? (color = "#523CF8") : (color = "#F76654")
    return color
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={$TransactionCardContainer}>
      <View style={$TransactionCardIcon}>
        <Image source={transactionData.img}></Image>
      </View>
      <View
        style={
          lastId ? $TransactionCardLeftTextContainerLastId : $TransactionCardLeftTextContainer
        }
      >
        <Text
          style={$TransactionCardTitle}
        >
          {transactionData.title}
        </Text>
        <Text
          style={$TransactionCardDescriptionLeft}
        >
          {transactionData.date}
        </Text>
      </View>
      <View
        style={
          lastId ? $TransactionCardRightTextContainerLastId : $TransactionCardRightTextContainer
        }
      >
        <Text
          style={{
            textAlign: "right",
            lineHeight: 15,
            fontSize: 12,
            fontFamily: typography.primary.semiBold,
            color: colorCode(transactionData.amount),
          }}
        >
          {transactionData.amount > 0
            ? `+${transactionData.amount},00`
            : `${transactionData.amount},00`}
        </Text>
        <Text
          style={$TransactionCardDescriptionRight}
        >
          {transactionData.coin}
        </Text>
      </View>
    </View>
  )
}

const $TransactionCardContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginBottom: 15,
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
  width: "20%",
  borderBottomWidth: 1,
  borderColor: "#DCDCDC",
  paddingBottom: 13,
}

const $TransactionCardRightTextContainerLastId: ViewStyle = {
  width: "20%",
}

const $TransactionCardLeftTextContainer: ViewStyle = {
  width: "62%",
  borderBottomWidth: 1,
  borderColor: "#DCDCDC",
  paddingBottom: 13,
}

const $TransactionCardLeftTextContainerLastId: ViewStyle = {
  width: "62%",
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
  color: colors.description
}

const $TransactionCardDescriptionRight: TextStyle = {
  textAlign: "right",
  lineHeight: 15,
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
  color: colors.description,
}