import React from 'react'

export const Balance = (props) => {
    const styling={
        color:'floralwhite',
        overflowX:'hidden'
    }
    return (
            
        <div class="row">
            <div className="col-12 text-center" style={styling}>
            {props.income-props.expense>=0?<h2>Savings&nbsp;: {props.income-props.expense}</h2>:<h2>Loss:{props.expense-props.income}</h2>}
            </div>
            
        </div>
    )
}
