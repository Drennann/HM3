import React, { useState } from "react"
import { FlatList, View, Dimensions, Image, ViewStyle } from "react-native"
import { AccountCard } from "./AccountCard"
import active from "../images/Main/active.png"
import inactive from "../images/Main/inactive.png"
import { spacing } from "../../theme"

const { width } = Dimensions.get("screen")

export function ListAccounts({ accounts }: any) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const onMomentumScrollEnd = (e) => {
    const index = Math.ceil(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index)
  };

  const renderItem = ({ item: account }) => <AccountCard accountData={account} />

  return (
    <View>
      <View style={$DotsContainer}>
        <View
          style={$DotsContainerDots}
        >
          {accounts.map((acc, index) => {
            return (<Image source={index === currentIndex ? active : inactive} key={index}></Image>)
          })}
        </View>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        horizontal={true}
        data={accounts}
        renderItem={renderItem}
        onMomentumScrollEnd={onMomentumScrollEnd}
        keyExtractor={(account) => account.id}
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
