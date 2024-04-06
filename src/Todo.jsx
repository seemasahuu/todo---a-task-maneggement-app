import React, { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Todo = () => {
  const [data, setdata] = useState("");
  const [arry, setarry] = useState([]);
  const [index, setindex] = useState();
  const [Mode,setmode]=useState("Add New")

  const handelchange = (e) => {
    setdata(e.target.value);
  };
 


//   const click1 = () => {
  
//     if (!data) {

//     } else {
//       setarry([...arry, data]);
//       localStorage.setItem("todoArry", JSON.stringify(arry));
//       setdata("");
     
//     }
//   };

  const click1 = () => {
  
    if (!data) {

    } else if(Mode==="Add New") {
    const updatedArry = [...arry, data];
    setarry(updatedArry);
    localStorage.setItem("todoArry", JSON.stringify(updatedArry));
  
    }else{
        const updatedArry = [...arry];
        updatedArry[index]=data;
        setarry(updatedArry);
        localStorage.setItem("todoArry", JSON.stringify(updatedArry));
        setmode("Add New");
    }
    setdata("");
  };




  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("todoArry")) || [];
    setarry(storedArray);
  }, []);

 

  const removeall = () => {
    setarry([]);
  };

  const handeldelete = (i) => {
    let abc = [...arry];
    abc.splice(i, 1);
    setarry(abc);
  };

  const handeledit = (e, i) => {
    setdata(e);
    setindex(i);
    setmode("update");
  };

  return (
    <>
      <div className="bg-orange-100 min-h-screen ">
        <div className="h-40">
          <h1 className="text-xl absolute left-4 top-3 font-bold text-rose-300">
            Write Notes:-
          </h1>
          <input
            type="text"
            className="bg-black mx-2 my-14 mb-0 rounded-md h-10 w-64 px-5 outline-none text-white "
            placeholder="Write your notes"
            name="title"
            value={data}
            onChange={handelchange}
          />
          {/* <input type="text" className='bg-slate-500 my-10 rounded-md h-8 w-72'  name='description' value={data} onChange={handelchange} /> */}
          <button
            className="bg-red-300 mx-2 my-5 rounded-md h-8  w-20"
            onClick={click1}
          >
            {Mode}
          </button>
        </div>
        <hr />

        <button
          onClick={removeall}
          className="bg-red-600 my-5 rounded-md h-8 w-28 text-white "
        >
          Remove All
        </button>
        <div className="flex  gap-2  h-fit w-fit flex-wrap">
          {arry?.map((e, i) => (
            <div
              key={i + 1}
              className="bg-red-300 mx-6 mr-0  mb-3 h-28 w-80 rounded-lg relative break-all"
            >
              <button
                className="btn btn-danger btn-sm mx-48 my-3 mr-0"
                onClick={() => handeldelete(i)}
              >
                <MdDeleteOutline />
              </button>
              <button
                className="btn btn-danger btn-sm "
                onClick={() => handeledit(e, i)}
              >
                <MdEdit />
              </button>
              <h3 className=" absolute left-2 top-6 pr-3 ">{e}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
