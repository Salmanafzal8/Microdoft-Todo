import React, { useState } from "react";
import { MdAddCard } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { PiDotsThreeBold } from "react-icons/pi";
import { BiExpand } from "react-icons/bi";
import InputTodo from "../../Components/InputTodo";
import DisplayTable from "../../Components/displayTable";
import capture from "../../assets/Capture.PNG";

function Tasks() {
  const [inputText, setinputText] = useState("");
  const [Data, setData] = useState([]);
  const [Complete, setComplete] = useState([]);
  const [label, setLabel] = useState(null);


  const handleInputChange = (e) => {
    setinputText(e.target.value);
  };

const add = () => {
  if (inputText) {
    const task = {
      text: inputText,
      dateLabel: label ?? null
    };
    setData([...Data, task]);
    setinputText("");
    setLabel(null);
  }
};

  function Completed (index) {
    setComplete([...Complete, Data[index]]);
    const del = Data.filter((_, user) => user !== index);
    setData(del);
  }

    function Deletion(index) {
    const del = Data.filter((_, user) => user !== index);
    setData(del);
  }

  function completeDeletion(index){
    const del = Complete.filter((_,user)=> user !== index)
    setComplete(del)
  }

    function Incompleted(index) {
    setData([...Data, Complete[index]]);
    const del = Complete.filter((_, user) => user !== index);
    setComplete(del);
  }

  return (
    <div className="h-screen bg-[#1c1c1c] text-[#788cde] p-12 flex flex-col justify-between">
      <div className="flex justify-between w-full mb-4">
        <div className="flex justify-center items-center gap-4">
          <GrHomeRounded className="text-[25px]" />
          <h1 className="text-3xl font-semibold">Tasks</h1>
        </div>
        <div className="text-white flex gap-5">
          <BiExpand className="font-bold" />
          <PiDotsThreeBold className="font-bold" />
        </div>
      </div>
<div className="flex-grow pr-2 overflow-y-auto scrollbar-hide space-y-6">
  {Data.length > 0 || Complete.length > 0 ? (
    <DisplayTable 
      Data={Data} 
      completedData={Complete} 
      Completed={Completed} 
      Deletion={Deletion}
      completeDeletion={completeDeletion}
      Incompleted={Incompleted}

    />
    
  )  : (
    <div className="flex flex-col items-center justify-center pt-12">
      <img src={capture} height="150" width="150" alt="no tasks" />
      <p className="text-xs text-center mt-2">
        Tasks show up here if they are not part <br /> of any list you have created
      </p>
    </div>
  )}
  </div>
      <InputTodo
        className="placeholder-[#788cde] "
        inputText={inputText}
        handleInputChange={handleInputChange}
        add={add}
          label={label}            
  setLabel={setLabel}
      />
    </div>
  );
}

export default Tasks;
