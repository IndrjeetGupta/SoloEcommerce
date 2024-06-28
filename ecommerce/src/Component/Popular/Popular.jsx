import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import '../Popular/Popular.css'

function Popular() {
    const [data , setData] = useState([])
    var url = 'http://localhost:3000/posts'

    const fetchData = async() =>{
        try{
            const res = await fetch(url)
            const data = await res.json()
            setData(data)

        }
        catch(err){
            console.log(err)
        }

    }
    useEffect(() =>{
        fetchData()
    },[])

    console.log(data)

  return (
    <div className='popular'>
        <h1>Populat Item</h1>
        <hr />

        <div className='popularItem'>
        {
            data.map((e) =>(
                <Item key={e.id} {...e}/>
            ))
        }

        </div>
 
      
    </div>
  )
}

export default Popular
