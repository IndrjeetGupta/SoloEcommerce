import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import '../NewCollection/NewCollection.css'

function NewCollection() {
    const [data , setData] = useState([])

    const fetchData = async() =>{
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
        fetchData()

    },[])
  return (
    <div className='new_collection'>
        <h1>New Collection</h1>
        <hr />
        <div className="collection">
        {
            data.map((e) =>(
                <Item key={e.id} {...e}/>
            ))
        }

        </div>
      
    </div>
  )
}

export default NewCollection
