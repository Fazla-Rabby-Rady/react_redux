import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { updateBook } from './BooksSlice'

const EditBook = () => {
  const location = useLocation()
  const [id,setId]= useState(location.state.id);
  const [title,setTitle] = useState(location.state.title);
  const [author,setAuthor] = useState(location.state.author);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({id,title,author}))
    navigate('/show-books',{replace:true})
  }
  return (
    <>
      <div className=" w-full h-[85vh] flex flex-col justify-center items-center">
          <h1 className='text-3xl font-bold tracking-wider text-cyan-300'>Edit Book</h1>

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
             <button type="submit" className=' p-3 bg-green-500 text-white w-[10rem] rounded-md text-xl uppercase hover:bg-violet-900 ml-[40%] mt-5'>Update Book</button>
          </form>
        </div>

        </div>


        
    </>
  )
}

export default EditBook