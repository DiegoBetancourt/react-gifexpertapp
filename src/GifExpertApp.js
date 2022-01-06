import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Homero'])

    //para añadir una nueva
    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <div align="center">
            <div align="center">
            <img   className='logo' src="LogoDBIV.png" alt="LogoDiego"></img>
            </div>
            
            <h2>Buscador de GIFs</h2>
            <AddCategory setCategories = {setCategories}/> 
            <hr />

            

            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}
