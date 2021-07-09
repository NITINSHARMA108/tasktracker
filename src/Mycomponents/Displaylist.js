import React from 'react'

export const Displaylist = (props) => {
    const mediaMatch = window.matchMedia('(max-width: 500)');
   // const t=mediaMatch?'0.6em':'1.5em';
    const a={
        overflowY:'auto',
        height:'43vh',
        //fontSize:t
    }
    const lia={
        overflow:'hidden'
    }

    return (
        
        <>
        <div className='out'> 
            <h2 style={{backgroundColor:'black'}} className="text-light text-center head">Debit</h2>
            <div style={a} className="ldebit" >
               {props.list1.map((t)=>
               { 
                return (
               <div style={lia} className="deb item" key={t.sno}> {t.text} <span className="amount">{Number(t.amount)}
               <i onClick={()=>props.del1(t)} class="fas fa-times"></i></span></div>)})}
                
            
            </div>
        </div>
        <div className="in">
            <h2 style={{backgroundColor:'black'}} className="text-light text-center head">Credit</h2>
            <div style={a} className="lcredit">
                {props.list2.map(t=><div style={lia} className="cred item" key={t.sno}> {t.text} <span className="amount">{Number(t.amount)}
                <i onClick={()=>props.del2(t)} class="fas fa-times"></i></span></div    >)}
            </div>

        </div>
        </>
        
    )
}
