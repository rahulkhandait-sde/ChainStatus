// Importing components provided by Thirdweb for interacting with contracts
import { useContract, useContractEvents } from "@thirdweb-dev/react"
// Getting the address of the contract on-chain
import { STATUS_CONTRACT_ADDRESS } from "../constants/addresses";
// Importing the EventCard component defined in the previous section
import EventCard from "./eventCard";
import React from "react";

export default function StatusEvents() {
    const {
        contract
    } = useContract(STATUS_CONTRACT_ADDRESS);

    const {
        data: statusEvents,
        isLoading: isStatusEventsLoading,
    } = useContractEvents(
        contract,
        "StatusUpdated",
        {
            subscribe: true,
        }
    );
    // ...
}