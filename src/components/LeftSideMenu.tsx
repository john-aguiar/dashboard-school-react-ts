import LogoBrand from '../assets/images/logo-brand.png'

import { BiDetail } from 'react-icons/bi'
import {FiList, FiSettings} from 'react-icons/fi'
import { BsFillPeopleFill } from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

export const LeftSideMenu =  () => {

    return (

     <div>
        <div className="bg-purple-800 h-full min-h-[100vh] w-44 min-w-44 text-white font-semibold float-left">
            <div className="flex items-center justify-center bg-slate-400 h-16 ">
            <img  src={LogoBrand} className=' w-14 min-w-44 my-2'  alt="" /> 
            </div> 
                <ul className='list-none my-6 mx-2'>
                  <li className='mb-4 p-2 hover:bg-purple-600 hover:rounded flex items-center'><CgProfile className='mr-2'/> Meu Perfil</li>
                  <li className='mb-4 p-2 hover:bg-purple-600 hover:rounded flex items-center'> <BiDetail className='mr-2'/> Cursos</li>
                  <li className='mb-4  p-2 hover:bg-purple-600 hover:rounded flex items-center'><BsFillPeopleFill className='mr-2'/> Professores</li>
                  <li className='mb-4  p-2 hover:bg-purple-600 hover:rounded flex items-center'><FiList className='mr-2'/> Grade Curricular</li>
                  <li className='mb-4  p-2 hover:bg-purple-600 hover:rounded flex items-center'><FiSettings className='mr-2'/>  Configurações</li>
                </ul>
            </div>
     </div>
    )
}