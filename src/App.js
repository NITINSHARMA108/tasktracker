import logo from './logo.svg';
import './App.css';
import Title from './Mycomponents/title'
import {Addexpense} from './Mycomponents/Addexpense'
import {useEffect,useState} from 'react';
import {Displaylist} from './Mycomponents/Displaylist'
import {Moneyleft} from './Mycomponents/Moneyleft';
import {Balance} from './Mycomponents/Balance';
import {Footer} from './Mycomponents/Footer'

function App() {

let t1=(JSON.parse(localStorage.getItem('ldebit')));
let t2=JSON.parse(localStorage.getItem('lcredit'));
let t3=JSON.parse(localStorage.getItem('data'));


  /*if(localStorage.getItem('ldebit')===null)
  {
    t1=[];

  }
  else {
    t1=JSON.parse(localStorage.getItem('ldebit'));
  }

  if(localStorage.getItem('lcredit')===null)
  {
    t2=[];
  }
  else{
    t2=JSON.parse(localStorage.getItem('lcredit'))
  }*/
  const [data,setdata]=useState(t3)
  const [ldebit,setdebit]=useState(t1)
  const [lcredit,setcredit]=useState(t2)
  const [income,setincome]=useState(t3.i);
  const [expense,setexpense]=useState(t3.e);
  

  

  useEffect(()=>{
    localStorage.setItem('ldebit',JSON.stringify(ldebit))
    localStorage.setItem('lcredit',JSON.stringify(lcredit))
    
    localStorage.setItem('data',JSON.stringify(data))
  });
  
  
  const addtolist=(title,amount,category)=>{
        if(category==='expense')
        {
          const l=ldebit.length+1;
          const a={
            sno:l,
            text:title,
            amount:amount
          }
          amount=Number(amount)
          setdebit([...ldebit,a])
          setexpense(expense+amount);
          
          setdata({
            i:income,
            e:expense+amount
          })

         
          
          
          
        }
        else if(category==='income')
        {
          const l=lcredit.length+1;
          const a={
            sno:l,
            text:title,
            amount:amount
          }
          amount=Number(amount)
          setcredit([...lcredit,a]);
          setincome(income+amount);
          setdata({
            i:income+amount,
            e:expense
          })
          
        }
        
  }

  //deleting dbit
  const del1=(t)=>{
    console.log(t);
 
      setdebit(ldebit.filter(a=>a.sno!==t.sno))
      
   setexpense(expense-t.amount)
   setdata({
     i:income,
     e:expense-t.amount
   })


   

  }
//deleting credit
  const del2=(t)=>{

    setcredit(lcredit.filter(a=>a.sno!==t.sno))
    setincome(income-t.amount)
    setdata({
      i:income-t.amount,
      e:expense
    })
   
    
  }
 

  return (
    <>
    <div className="container my-3 py-3">
      <Title />
      <Balance income={income} expense={expense}/>
      <Moneyleft income={income} expense={expense}/>
      <Addexpense func={addtolist}/>
      
      
    </div>
    <div className="container my-3 py-3">
    <Displaylist list1={ldebit} list2={lcredit} del1={del1} del2={del2}/>
    </div>
    <Footer />
    

    </>
  );
}

export default App;

