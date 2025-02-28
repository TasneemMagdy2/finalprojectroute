import { createContext, useState } from "react";
import CounterContextProvider from "./counterContext";

 export let tokenContext=createContext()//1
 export default function TokenContextProvider(props){
    const[token,setToken]=useState(null)//3
    return<tokenContext.Provider value={{token,setToken}}>
{props.children}
    </tokenContext.Provider>
}//2