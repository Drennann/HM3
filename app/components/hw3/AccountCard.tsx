import React from "react";
import { Text } from "../Text";

export function AccountCard({accountData} : any){
    return(
        <Text>{accountData.currentBalance}</Text>
    )
}