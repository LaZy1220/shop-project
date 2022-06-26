import { useEffect, useState } from 'react'
import { GoodsList } from '../GoodsList/GoodsList'
import { Preloader } from '../Preloader/Preloader'
import './Content.css'

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v2/shop?lang=en'

export function Content(){
    const [goods,setGoods] = useState([])
    const [isLoading,setIsLoading]=useState('true')
    useEffect(()=>{
        fetch(API_URL,{headers:{
            'Authorization': API_KEY,
        }})
        .then(response=>response.json())
        .then(data =>{
            setGoods(data.shop)
            setIsLoading(false)})
    },[])
    return(
        <main className='conteiner content'>
            {isLoading
            ?<Preloader/>
            :<GoodsList goods={goods}/>}
        </main>
    )
}