import { ImSearch } from 'react-icons/im'


import ProfilePicture from '../assets/images/profile-logged.png'

export const Header = () => {

    return(
        <header className='flex items-center justify-between bg-slate-400 h-16'>

        <div className='flex'>
          <input className='bg-white rounded h-10' type="text" />
          <button className='w-20 rounded flex items-center justify-center bg-green-500 text-white'> <ImSearch className='w-10 p-2 h-10 '/> </button>
        </div>
        
        <img src={ProfilePicture}  width='50' height='50' className='mr-5' alt="profile-logged" />
      </header>
    )
}