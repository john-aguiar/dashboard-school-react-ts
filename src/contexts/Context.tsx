import { createContext, useReducer } from "react";
import { studentType, studentInitialState, studentReducer } from "../reducers/studentReducer";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    student: studentType[],
}

const initialState = {
    student: studentInitialState,
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>;
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

/*-----------------------------------------------*/

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    student: studentReducer(state.student, action)
})

/*-----------------------------------------------*/
type ComponentWithChildrenProps = { children: React.ReactNode;}; // Props do componente que vai receber o contexto

export const ContextProvider = ({ children }: ComponentWithChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);


    return(
        <Context.Provider value={ {state, dispatch }}>
            {children}
        </Context.Provider>
    )
}