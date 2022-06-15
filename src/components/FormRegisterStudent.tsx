
import { Context } from "../contexts/Context";
import { useContext, useState} from "react";
import { current } from "@reduxjs/toolkit";

export const FormRegisterStudent = () => {

    const { state, dispatch } = useContext(Context);
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | "" >("");
    const [grade, setGrade] = useState<string | "" >("");
    const [currentSemester, setCurrentSemester] = useState<number | "" >("")
    const [id, setId] = useState<number | "" >("")


    function handleAddStudent(){
        console.log("deu bommmm")
       if(name === "" || age === "" || grade === "" || currentSemester === ""){
           alert("Preencha todos os campos");
       } else {
       dispatch({
        type: "ADD_STUDENT",
        payload: {
            name,
            age,
            grade,
            currentSemester,
            id
        }
       })
       
    // Reset the fields
        setName('')
        setAge('')
        setGrade('')
        setCurrentSemester('')
        
    }
} 

    return(
    <form className='flex justify-center items-center h-auto mx-6 w-[40rem] flex-col'>
        <h1 className='bg-green-600 p-2 mt-10 text-white rounded font-bold flex items-center justify-center w-[100%] min-w-32'>Cadastro de Alunos</h1>
        <span className='mt-4 font-bold'>Nome:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:ring-2' 
         value={name} onChange={(e)=> setName(e.target.value)} type="text"  />

        <span className='mt-4 font-bold'>Curso:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:ring-2' 
         value={grade} onChange={(e)=> setGrade(e.target.value)} type="text"  />
      
        <span className='m-4 font-bold'>Idade:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:border-violet-700' type="number" 
        value={age} onChange={(e)=>setAge(parseInt(e.target.value))} />

        <span className='m-4 font-bold'>Semestre atual:</span>
        <input className='p-2 bg-zinc-100 text-lg rounded border-2 focus:border-violet-700' type="number" 
        value={currentSemester} onChange={(e)=>setCurrentSemester(parseInt(e.target.value))} />

        <button className='mt-6 mb-10 w-50 bg-violet-700 rounded text-white p-2 hover:opacity-75 transition-colors disabled:opacity-75'
        type='button' onClick={handleAddStudent}> Cadastrar</button>
    </form>
    )
}