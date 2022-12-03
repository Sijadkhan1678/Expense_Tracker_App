import { Types } from "../types/Types";
import { Action } from './Action'
import { Transaction } from '../types/Types'

type State = {
    transactions: Transaction[]
    income: number
    expense: number
    balance: number
    form: boolean,
}
export const AppReducer = (state: State, action: Action) => {
    switch (action.type) {

        case Types.ADD_TRANSACTION:

            return { ...state, transactions: [...state.transactions, action.payload] }

        case Types.DELETE_TRANSACTION:
            return {
                ...state, transactions: state.transactions.filter((transaction: Transaction) => transaction.id !== action.payload)
            }
        case Types.CALCULATE_BALANCE:
            return { ...state, balance: action.payload }

        case Types.CALCULATE_INCOME:

            return { ...state, income: action.payload.reduce((acc: number, amount: number) => amount += acc, 0) }

        case Types.CALCULATE_EXPENSE:

            return { ...state, expense: action.payload.reduce((acc: number, amount: number) => amount += acc, 0) }

        case Types.SHOW_FORM:
            return { ...state, form: true }

        case Types.CLOSE_FORM:
            return { ...state, form: false }

        default:
            return state;
    }

}
export default AppReducer
