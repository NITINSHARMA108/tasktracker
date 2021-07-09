import React from 'react'

export const Moneyleft = (props) => {
    const overflow={
        overflowX:'hidden'
    }
    return (
        <div className="row">
            <div className="col-6 text-center" style={overflow}>
                <h3 className="income">Earning:</h3>
                <h3>{props.income}</h3>

            </div>
            <div className="col-6 text-center" style={overflow}>
                <h3 className="expense">Expenses:</h3>
                <h3>{props.expense}</h3>

            </div>
            
        </div>
    )
}
