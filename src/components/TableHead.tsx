
export const TableHead = () => {
    return(
        
      <thead className=''>
      <button className='bg-green-600 text-white p-3 font-sm font-semibold rounded m-4 hover:bg-green-500'>+ Novo</button>
      <tr className='my-2 mx-5 p-2 bg-slate-200 w-[100%] font-medium rounded text-zinc-700' >
        <th className='px-6 py-3 text-center font-medium text-gray-600'>Nome</th>
        <th className='px-6 py-3 text-center font-medium text-gray-600'>Curso</th>
        <th className='px-6 py-3 text-center font-medium text-gray-600'>ID Matricula</th>
        <th className='px-6 py-3 text-center font-medium text-gray-600'>Idade</th>
        <th></th>
      </tr>
    </thead>
    )
}