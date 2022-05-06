import { useState } from 'react';
import './index.css'




const App = ()=> {

  interface studentsTypes {
    id: number,
    name: string,
    age: number|string    
  }
  
  const initialStudent: studentsTypes[] = [ 
    { id: 1, name: 'Joao', age: 21 },
    { id: 2, name: 'Maria', age: 22 },
    { id: 3, name: 'Gabriel', age: 35 },
    { id: 4, name: 'Luana', age: 36 }
  ]


  const [students, setStudents] = useState([
    { id: 1, name: 'Joao', age: 21 },
    { id: 2, name: 'Maria', age: 22 },
    { id: 3, name: 'Gabriel', age: 35 },
    { id: 4, name: 'Luana', age: 36 }
  ])

  const [countId, setCountId] = useState(initialStudent.length + 1);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number|string>('')


  function handleRegisterStudent(){
    setCountId(previousCount=> previousCount + 1);
    setStudents([...students, { id: countId, name: `${name}`, age: age}])
    setName('');
    setAge('')
  }

  function handleRemoveStudent(id:number){
      let studentsCopy = [...students]

      for(let i = 0; i < studentsCopy.length; i++){
        if(studentsCopy[i].id === id){
          studentsCopy.splice(i, 1)
        }
      }
      setStudents([...studentsCopy])
  }

  return (
     <div>
      <div className='flex justify-center items-center'>
        <form className='flex justify-center items-center h-auto mx-6 w-[40rem] flex-col'>
            <h1 className='bg-green-600 p-2 mt-10 text-white rounded font-bold flex w-auto items-center justify-center min-w-full'>Cadastro de Alunos</h1>
            <span>Nome:</span>
            <input className='p-1 bg-zinc-100 text-lg rounded border-1-violet-500' value={name} onChange={ (event)=> setName(event.target.value) } type="text"  />
            <span>Idade:</span>
            <input className='p-1 bg-zinc-100 text-lg rounded border-1-violet-500' value={age}  onChange={ (event) => setAge(parseInt(event.target.value))} type="number" />
            <button className='mt-5 mb-10 w-50 bg-violet-700 rounded text-white p-2 hover:opacity-75 transition-colors '  type='button' onClick={(handleRegisterStudent)}> Cadastrar estudante!</button>
        </form>
      </div>
       

        <hr />
        <div className="flex justify-center items-center">
        <table className='table-auto min-w-[40rem]'>
          <thead>
            <button className='bg-green-600 text-white p-3 font-sm font-semibold rounded m-4'>+ Novo</button>
            <tr className='my-2 mx-5 p-2 text-zinc-800'>
              <th>Nome</th>
              <th>Curso</th>
              <th>Idade</th>
            </tr>
          </thead>

        <tbody>
        {students.map(aluno => (
          <> 
          <tr  className='p-2 mx-3 m-2 even:bg-white odd:bg-gray-100 font-medium rounded text-zinc-700'>
            <td key={aluno.id}>
              {aluno.name}
            </td>
            <td>
              {aluno.id}
            </td>
            <td>
              {aluno.age}
            </td>
            <button className='bg-violet-700 hover:opacity-90 transition-colors  rounded mx-6  text-sm text-white p-2 mb-4' onClick={()=>(handleRemoveStudent(aluno.id))}>Remover</button>
          </tr>
          </>
          )
         )
        }
       </tbody>
       </table>
       </div>
      </div>
  );
}

export default App;