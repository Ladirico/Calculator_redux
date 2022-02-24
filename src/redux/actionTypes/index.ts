import React from "react"

enum ActionType {
    PLUS_OPERATOR : 'PLUS_OPERATOR',
    MINUS_OPERATOR : 'MINUS_OPERATOR'
}

interface PlusOperator {
    type: ActionType.PLUS_OPERATOR
    payload: any
}

interface MinusOperator {
    type:ActionType.MINUS_OPERATOR,
    payload: any
}

type Action = PlusOperator | MinusOperator 
