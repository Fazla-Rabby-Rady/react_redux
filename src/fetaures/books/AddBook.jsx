import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooks } from './BooksSlice'
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title,setTitle] = useState()
  const [author,setAuthor] = useState()
  const navigate = useNavigate();
  const numberofBooks = useSelector((state) => state.booksReducer.books.length)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book  = {id:numberofBooks+1, title, author}
    dispatch(addBooks(book))
    navigate('/show-books',{replace:true})
  }
  return (
    <div className=" w-full h-[85vh] flex flex-col justify-center items-center">
        <h2 className=' text-3xl tracking-wider  font-bold text-lime-500'>Add Book</h2>

        <div className="lg:w-[50%] sm:w-[80%] min-h-[15rem] p-10">
          <form action="" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="title" className=' text-xl font-semibold'>Title: </label>
              <input className=' border border-black w-[75%] h-[3rem] p-4 text-lg capitalize font-medium rounded-lg mb-5' type="text" name='title' value={title}  onChange={(e) => setTitle(e.target.value)} required/>
            </div> 
            <div className=" pt-4">
              <label htmlFor="title" className=' text-xl font-semibold'>Author: </label>
              <input className=' border border-black w-[75%] h-[3rem] p-4 text-lg capitalize font-medium rounded-lg mb-5' type="text" name='author' value={author}  onChange={(e) => setAuthor(e.target.value)} required/>
            </div>
             <button type="submit" className=' p-3 bg-green-500 text-white w-[10rem] rounded-md text-xl uppercase hover:bg-violet-900 ml-[40%] mt-5'>Add Book</button>
          </form>
        </div>
    </div>
  )
}

export default AddBook