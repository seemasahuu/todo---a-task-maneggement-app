import React, { useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Todo = () => {
    const [data,setdata]=useState("")
    const[arry,setarry]=useState([])
    const [index,setindex]=useState()
    // const [Mode,setmode]=useState("Add New")

const handelchange =(e)=>{
    setdata(e.target.value)
}

const click1 =()=>{
    if(!data){

    }else{
        setarry([...arry, data]);
        setdata("")
    }
    
    }

    const removeall=() =>{
        setarry([]);
    }
 

    const handeldelete =(i)=>{
        let abc =[...arry]
        abc.splice(i,1)
        setarry(abc)
         
    }
 

    const handeledit =(e,i)=>{
        setdata(e)
        setindex(i)
        
    }
    
  return (
    <>
     <div className='bg-orange-800 '>
    <div className='h-40'>
        <h1 className='text-xl absolute left-4 top-3 font-bold text-rose-300'>Write Notes:-</h1>
        <input type="text" className='bg-black mx-2 my-14 mb-0 rounded-md h-10 w-64 px-5 outline-none text-white ' placeholder='Write your notes' name='title' value={data} onChange={handelchange} />
        {/* <input type="text" className='bg-slate-500 my-10 rounded-md h-8 w-72'  name='description' value={data} onChange={handelchange} /> */}
        <button className='bg-red-300 mx-2 my-5 rounded-md h-8  w-20' onClick={click1}>Add New</button>
         
    </div>
   <hr/>


   <button onClick={removeall}className='bg-red-300 my-5 rounded-md h-8 w-20' >Removeall</button>
   <div className='flex  gap-2  h-fit w-fit flex-wrap'>

   {arry?.map((e, i) => (
    <div key={i+1} className='bg-red-300 mx-6 mr-0  mb-3 h-28 w-60 rounded-lg relative   break-all'> 
        <button className="btn btn-danger btn-sm mx-48 my-3 mr-0" onClick={() => handeldelete(i)}><MdDeleteOutline /></button>
        <button className="btn btn-danger btn-sm " onClick={() => handeledit(e, i)}><MdEdit /></button> 
        <h3 className=' absolute left-2 top-6'>{e}</h3>
    </div>
))}


{/* 
   {arry?.map((data,i,e) => (
         
          <div key={data.i} className=' bg-slate-100 h-32 w-44'>
          <span>{data.text}</span>

          <button className="btn btn-danger btn-sm" onClick={(i)=>handeldelete(i)}><MdDeleteOutline /></button>
            <button className="btn btn-danger btn-sm" onClick={(e)=>handeledit(e,i)}><MdEdit /> </button> 
          </div>
    
        
        ))} */}
   </div>
   </div>
    </>
  )
}

export default Todo