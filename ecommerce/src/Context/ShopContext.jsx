import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null)

export const ShopContextProvider = ({children}) =>{
    const [data, setData] = useState([])

    const fetchContextData = async() =>{
        try{
            const res = await fetch('http://localhost:3000/posts')
            const data = await res.json()
            setData(data)

        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() =>{
        fetchContextData()

    },[])
    return <ShopContext.Provider value={{data}}>{children}</ShopContext.Provider>

  

}