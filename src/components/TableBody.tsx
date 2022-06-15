
import { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import { studentType } from "../reducers/studentReducer"

export const TableBody = () => {
  const { state, dispatch } = useContext(Context)

    function handleRemoveStudent(id: number){
     /*   let studentsCopy = [...state.student]
        for(let i = 0; i < studentsCopy.length; i++){
          if(studentsCopy[i].id === id){
              studentsCopy.splice(i, 1)
          }
        }  
    */
    dispatch({type: "DELETE_STUDENT", payload: { id }})
    }

    return (
        <tbody>
        {state.student.map(aluno => (
          <> 
          <tr key={aluno.id} className='p-2 mx-3 m-2  even:bg-white odd:bg-slate-100 font-medium rounded text-zinc-700 ' >
            <td className='text-center p-5'>
              {aluno.name}
            </td>
            <td className='text-center p-3'>
              {aluno.grade}
            </td>
            <td className='text-center p-3'>
               {aluno.id}
            </td>
            <td className='text-center'>
              {aluno.age}
            </td>
            <td className='mb-3'>
              <button className='bg-violet-700 hover:opacity-90 transition-colors  rounded mx-6  text-sm text-white p-2' onClick={()=>(handleRemoveStudent(aluno.id))}>Remover</button>
            </td>
          </tr>
          </>
          )
        )
        }
   </tbody>
    )
}