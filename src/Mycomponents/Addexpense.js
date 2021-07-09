import React from 'react'
import {useState} from 'react'
import PropTypes from 'prop-types'



export const Addexpense = (props) => {
    const [title,settitle]=useState('')
    const [amount,setamount]=useState(0);
   const [category,setcategory]=useState('income')

  
   

    const submit=(e)=>{
        e.preventDefault();
        if(!title)
        {
            alert('enter title')
        }
        else if(!amount)
        {
            alert('enter the amount')
        }
        else
        {
            
            props.func(title,amount,category)
            settitle('');
            setamount(0);
            setcategory('income');
        }

    }
    return (
        <div>
            <form onSubmit={submit} id="form">
                <div className="form-group" >
                    <label htmlFor="title">Expense Ttile</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} placeholder="expense title"
                    onChange={(e)=>settitle(e.target.value)}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" className="form-control"  value={amount} id="amount" placeholder="Amount"
                    onChange={(e)=>setamount(e.target.value)}/>
                </div>
                <div className='form-group'>
                    
                <label htmlFor="category">Select Category:</label>
                    <select className="form-control" id="category" value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option value='income'>income</option>
                    <option value="expense">Expense</option>
                    </select>
            </div>
               
                <button type="submit" className="btn btn-success">Add Expense</button>
            </form>
        </div>
    )
}
