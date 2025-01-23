import react, { createContext } from "react"

export const UserContext = createContext()

const Datas = ({children})=>{
    const [user,setUser]=useState("Vinayak")
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export {Datas}