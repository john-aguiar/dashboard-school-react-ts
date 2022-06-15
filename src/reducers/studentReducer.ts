import { reducerActionType } from "../types/reducerActionType";

export type studentType = {
    name: string | null, 
    age: number | null,
    grade: number | null,
    id: number, 
    currentSemester: number | null,
}

export const studentInitialState: studentType[] = 
  [   
    {
    name: null,
    age: null,
    grade: null,
    id: Math.random()*100,
    currentSemester: null,
    }
]

export const studentReducer = (state: studentType[], action: reducerActionType)=> {
    switch(action.type){
        case "ADD_STUDENT":
         const { name, age, grade, id, currentSemester } = action.payload;
            
        return [
            ...state, 
            {
                name,
                age,
                grade, 
                currentSemester,
                id: Math.random()*100,
            }
        ];

        case "DELETE_STUDENT":
        return state.filter(student=> student.id !== action.payload.id) // filter out the student with the id that matches the payload id

        case "UPDATE_STUDENT":
         return state.map((student) => {
            if(student.id === id){
                return {
                   // ...student,
                   name,
                   age,
                   grade,
                   id, 
                   currentSemester
                }
            } else 
                return student;
        })
        default:
            return state
    }
}