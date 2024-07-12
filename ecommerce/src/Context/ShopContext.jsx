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

    const getDefaultCart = () =>{
        let cart = {}

        for(let i= 0; i <20+1; i++){
            cart[i] = 0
    
        }
        return cart

    }
    const [cartItem , setCartItem] = useState(getDefaultCart())

    // console.log(data)
    // console.log(cartItem)
    // console.log(data.length)

    const addToCart = (itemId) =>{
        setCartItem((prev) =>({...prev,[itemId]: prev[itemId]+1}))
        console.log(cartItem)

    }

    const removeToCart = (itemId) =>{
        setCartItem((prev) =>({...prev,[itemId]: prev[itemId]-1}))

    }

    return <ShopContext.Provider value={{data,cartItem,addToCart,removeToCart}}>{children}</ShopContext.Provider>

  

}