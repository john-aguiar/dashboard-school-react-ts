import { useState, useContext } from 'react';

import './index.css'
import { TableHead } from './components/TableHead';
import { TableBody } from './components/TableBody';
import { LeftSideMenu } from './components/LeftSideMenu';
import { Header } from './components/Header';
import { FormRegisterStudent } from './components/FormRegisterStudent';
import { Context } from './contexts/Context';




const App = ()=> {


  const { state, dispatch } = useContext(Context);



  return ( 

    <div className='flex'>
      
      <LeftSideMenu />

      <div className="right-side w-full">
        <div className="right-side-content flex justify-center flex-col align-center">
          <Header/>
          <div className='flex justify-center items-center'>

        <FormRegisterStudent/>


        </div>
      <hr /><hr /><hr />

      <div className="flex justify-center items-center mb-10">
       
        <table className='w-[80%] min-w-[40rem] divide-y divide-slate-400'>
          <TableHead />
          <TableBody />
      </table>
    </div>    
    </div>
  </div> 
 </div>

  );
}

export default App;

/*

<form className='flex justify-center items-center h-auto mx-6 w-[40rem] flex-col'>
              <h1 className='bg-green-600 p-2 mt-10 text-white rounded font-bold flex items-center justify-center w-[100%] min-w-32'>Cadastro de Alunos</h1>
              <span className='mt-4 font-bold'>Nome:</span>
              <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:ring-2' 
              value={student[id].name} onChange={(e)=> dispatch(setName(e.target.value))} type="text"  />

              <span className='mt-4 font-bold'>Curso:</span>
              <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:ring-2' 
              value={student[id].degree} onChange={(e)=> dispatch(setDegree(e.target.value))} type="text"  />
            
              <span className='m-4 font-bold'>Idade:</span>
              <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:border-violet-700' type="number" 
              value={student[id].age} onChange={(e)=>dispatch( setAge(parseInt(e.target.value)))} />

              <button disabled={!student[id].name || !student[id].age} className='mt-6 mb-10 w-50 bg-violet-700 rounded text-white p-2 hover:opacity-75 transition-colors disabled:opacity-75'
              type='button' onClick={()=> handleAddStudent(student.length+1)}> Cadastrar</button>
          </form>

          */