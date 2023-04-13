import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBooks } from './BooksSlice';
import { Link } from 'react-router-dom';

const BooksView = () => {
  const books = useSelector((store) => store.booksReducer.books)
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  }
  return (
   <>
      <div className="w-full h-[85vh] flex flex-col items-center pt-[10rem]">
        <h1 className=' text-4xl tracking-wider font-extrabold font-serif pb-12 text-teal-500'>List of Books</h1>
        <div className=" border border-black w-[80%] min-h-[14rem]">
          <table className=' border border-black w-full h-full text-xl '>
            <thead className=' border border-black bg-amber-800 h-14 text-white'>
              <tr className=' border border-black'>
                <th className=' border border-black'>ID</th>
                <th className=' border border-black'>Title</th>
                <th className=' border border-black'>Author</th>
                <th className=''>Action</th>
              </tr>
            </thead>
            <tbody className=' h-[15rem]' >
              { books && books.map((book) => {
                const {id,title,author} = book;
                return(
                  <tr key={id} className=' border border-black text-center'>
                    <td className=' border border-black'>{id}</td>
                    <td className=' border border-black'>{title}</td>
                    <td className=' border border-black'>{author}</td>

                    <td className=' space-x-5'>
                      <Link to='/edit-book' state={{id,title,author}}>
                          <button className='bg-green-500 hover:bg-violet-800 p-3 uppercase w-28 rounded-lg text-white'>Edit</button>
                      </Link> 
                      <button className=' bg-red-500 hover:bg-blue-950 p-3 uppercase w-28 rounded-lg text-white' onClick={() => {handleDelete(id)}}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
   </>
  )
}

export default BooksView