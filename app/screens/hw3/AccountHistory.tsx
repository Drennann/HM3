import React, { useEffect, useState } from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { AccountCard } from "../../components/hw3/AccountCard"
import { Menu } from "../../components/hw3/Menu"
import { RecentTransactions } from "../../components/hw3/RecentTransactions"
import { spacing, colors } from "../../theme"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

mock.onGet("/accounts").reply(200, {
  accounts: [
    {
      id: "1234-4567-3456-3456",
      currentBalance: 76451.0,
    },
    {
      id: "1234-4567-3456-3457",
      currentBalance: 499.0,
    },
    {
      id: "1234-4567-3456-3458",
      currentBalance: 4503.0,
    },
    {
      id: "1234-4567-3456-3459",
      currentBalance: 99999.5,
    },
  ],
})

export function AccountHistory() {

    const [accounts, setAccounts] = useState([]);

    useEffect(()=>{
        try{
            (async ()=> {
                const response = await axios.get("/accounts");
                setAccounts(response.data.accounts)
            })()
        }catch(error){
            console.log(error)
        }
    },[])

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      // safeAreaEdges={["top", "bottom"]}
    >
      <Text>Account History</Text>
      {accounts.map(account => <AccountCard key={account.id}/>)}
      <RecentTransactions />
      <Menu />
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}
