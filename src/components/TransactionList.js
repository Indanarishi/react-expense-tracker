import { useContext } from "react"

// context
import { GlobalContext } from "../context/GlobalState"

// components
import { Transaction } from "./Transaction"

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}
