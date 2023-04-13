import React from 'react'
import {NavLink} from 'react-router-dom'
const items = [
    {
        id:1,
        title:'Home',
        link:'/',
    },
    {
        id:2,
        title:'Show Books',
        link:'/show-books',
    },
    {
        id:3,
        title:'Add Book',
        link:'/add-book'
    }

]
const Navbar = () => {
  return (
    <>
        <div className=" flex items-center bg-violet-600 h-20 text-xl font-bold  ">
            <NavLink to='/' className=' w-[40%] text-center text-amber-300 text-3xl font-extrabold '>
                <span>Online Book</span>
            </NavLink>
            
            <ul className=' flex space-x-10 w-[60%]'>
                {items.map((nav) => (
                    <li key={nav.id} className=''>
                        <NavLink 
                            className=' w-10 p-2 rounded' 
                            style={({ isActive,isPending }) => {
                            return {
                               backgroundColor:isActive? "#DB2" : " ",
                               color:isActive ? "" : "white",
                            };
                        }}
                        //     className={({isActive}) => 
                        //     isActive ? "bg-emerald-700" : "text-red-700"
                        // }
                            
                            to={nav.link}
                        >
                            {nav.title}
                        </NavLink>

                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Navbar