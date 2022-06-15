
import { Context } from "../contexts/Context";
import { useContext, useState} from "react";

export const FormRegisterStudent = () => {

    const { state, dispatch } = useContext(Context);
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [grade, setGrade] = useState(null);
    const [currentSemester, setCurrentSemester] = useState(null)




    function handleAddStudent(id: number){
       
        
    }
    
    return(
    <form className='flex justify-center items-center h-auto mx-6 w-[40rem] flex-col'>
        <h1 className='bg-green-600 p-2 mt-10 text-white rounded font-bold flex items-center justify-center w-[100%] min-w-32'>Cadastro de Alunos</h1>
        <span className='mt-4 font-bold'>Nome:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:ring-2' 
         value={student[1].name} onChange={(e)=> dispatch(setName(e.target.value))} type="text"  />

        <span className='mt-4 font-bold'>Curso:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:ring-2' 
         value={student[0].name} onChange={(e)=> dispatch(setDegree(e.target.value))} type="text"  />
      
        <span className='m-4 font-bold'>Idade:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:border-violet-700' type="number" 
        value={student[0].age} onChange={(e)=>dispatch( setAge(parseInt(e.target.value)))} />

        <button className='mt-6 mb-10 w-50 bg-violet-700 rounded text-white p-2 hover:opacity-75 transition-colors disabled:opacity-75'
        type='button' onClick={()=> handleAddStudent(id)}> Cadastrar</button>
    </form>
    )
}