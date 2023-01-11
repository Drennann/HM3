import React, { useState } from "react"
import {
  FlatList,
  View,
  Dimensions,
  Image,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ListRenderItem,
} from "react-native"
import { AccountCard } from "./AccountCard"
import active from "../images/Main/active.png"
import inactive from "../images/Main/inactive.png"
import { spacing } from "../../theme"
import { Account } from "../../interfaces/interfaces"

interface ListAccountsProps {
  Accounts: Account[]
}

const { width } = Dimensions.get("screen")

export function ListAccounts({ Accounts }: ListAccountsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.ceil(event.nativeEvent.contentOffset.x / (width - 30))
    setCurrentIndex(index)
  }

  const renderItem: ListRenderItem<Account> = ({ item: Account }) => (
    <AccountCard AccountData={Account} />
  )

  return (
    <View>
      <View style={$DotsContainer}>
        <View style={$DotsContainerDots}>
          {Accounts.map((acc, index) => {
            return <Image source={index === currentIndex ? active : inactive} key={index}></Image>
          })}
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 30}
        decelerationRate="fast"
        horizontal={true}
        data={Accounts}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        keyExtractor={(Account) => Account.id}
      />
    </View>
  )
}

const $DotsContainer: ViewStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
}

const $DotsContainerDots: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "12%",
  paddingBottom: spacing.extraSmall,
}
