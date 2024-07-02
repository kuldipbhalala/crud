import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteITEM, EditITEM, addItem } from '../Action/Actioncrud';
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

function Crudopetion() {
  const [text, setText] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const dispatch = useDispatch()

  const items = useSelector(state => state.items)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === ""){
    return alert("Please Enter value")
    }   
    if (isEditing) {
      dispatch(EditITEM(editIndex, text))
      setIsEditing(false);
    } else {
      dispatch(addItem(text))
    }
    setText("")
  };

  const handleDelete = (index) => {
    dispatch(DeleteITEM(index))
  }

  const handleEdit = (index) => {
    console.log(index , "bdhsdb");
    setIsEditing(true)
    setEditIndex(index)
    setText(items[index])
  }

  return (
    <>
      <div className='text-[30px] bg-black text-[white] text-center py-2'>Crudopetion</div>
      <div className='my-10 mx-10 bg-black w-[30%] py-5 px-5 rounded-lg '>
        <h2 className='text-white my-5 px-3  text-[30px]'>Crudopetion</h2>
        <form onSubmit={handleSubmit} className='py-4'>
          <input  
            type="text"
            value={text} 
            onChange={(e) => setText(e.target.value)}
            className='bg-black text-white px-3 py-3 border-4 rounded-lg border-sky-500 outline-none w-[75%]'
          />
          <button 
          // disabled={ text.length === 0 } 
          type="submit" className='text-white mx-4'>
            {isEditing ? 'Update' : 'Add'}
          </button>
          {items.map((item, index) => ( 
            <div key={index} className='bg-white text-black my-5 p-4 rounded-lg flex justify-between items-center cursor-pointer text-[22px]'>
              <p>{item}</p>
              <div className='flex'>
                <AiFillEdit onClick={() => handleEdit(index)} className='mx-2' />
                <MdDelete onClick={() => handleDelete(index)} className='text-black' />
              </div>
            </div>  
          ))}
        </form>
      </div>
    </>
  )
}

export default Crudopetion