import { useDispatch } from "react-redux"
import { setNewList } from '../redux/reducers/studentsReducer'
import { useAppSelector } from "../redux/hooks/useAppSelector"

export const TableBody = () => {
  const dispatch = useDispatch()
  const student = useAppSelector(state=> state.students)

    function handleRemoveStudent(id:number){
        let studentsCopy = [...student]
        for(let i = 0; i < studentsCopy.length; i++){
          if(studentsCopy[i].id === id){
              studentsCopy.splice(i, 1)
          }
        }
        dispatch( setNewList({...studentsCopy} ) )
        console.log('click')
    }

    return (
        <tbody>
        {student.map(aluno => (
          <> 
          <tr key={aluno.id} className='p-2 mx-3 m-2  even:bg-white odd:bg-slate-100 font-medium rounded text-zinc-700 ' >
            <td className='text-center p-5'>
              {aluno.name}
            </td>
            <td className='text-center p-3'>
              {aluno.degree}
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