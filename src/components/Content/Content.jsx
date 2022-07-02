import { useEffect, useState } from 'react'
import { BasketList } from '../BasketList/BasketList';
import { Basket } from '../Basket/Basket';
import { GoodsList } from '../GoodsList/GoodsList'
import { Preloader } from '../Preloader/Preloader'
import './Content.css'
import { Pagination } from '../Pagination/Pagination';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://fortniteapi.io/v2/shop?_limit=10?lang=en?'

export function Content(){
    const [goods,setGoods] = useState([])
    const [isLoading,setIsLoading]=useState('true')
    const [order,setOrder] = useState([])
    const [isHide,setIsHide] =useState(false)
    const [currentPage,setCurrentPage] = useState(1)
    
    const goodsPerPage = 9
    const lastGoodsIndex = currentPage * goodsPerPage
    const firstGoodsIndex = lastGoodsIndex - goodsPerPage
    const currentGoods = goods.slice(firstGoodsIndex,lastGoodsIndex)
    const maxPages = Math.ceil(goods.length/goodsPerPage)

    const nextPage = ()=>setCurrentPage(prev =>{
        if(prev<maxPages){
            return prev+1
        }
        else{
            return maxPages
        }
    })
    const prevPage = ()=>setCurrentPage(prev => {
        if(prev>1){
            return prev-1
        }
        else return 1
    })
    const firstPage = ()=>setCurrentPage(1)
    const lastPage = ()=>setCurrentPage(maxPages)
    const incrementQuantity = (itemId)=>{
        const newOrder = order.map(element=>{
            if(itemId===element.mainId){
                 const newQuantity=element.quantity+1
                 return{
                    ...element,
                    quantity:newQuantity,
                 }
            }
            else{
                return element
            }
        })
        setOrder(newOrder)
    }
    const decrementQuantity = (itemId)=>{
        const newOrder = order.map(element=>{
            if(itemId===element.mainId){
                 const newQuantity=element.quantity-1
                 return{
                    ...element,
                    quantity:newQuantity>=0?newQuantity:0
                 }
            }
            else{
                return element
            }
        })
        setOrder(newOrder)
    }
    const removeOrder = (itemId)=>{
        setOrder(order.filter((order)=> order.mainId!==itemId))
    }
    const handleHide = ()=>{
        setIsHide(!isHide)
    }
    const addOrder = (item) => {
        const itemIndex = order.findIndex((orderItem)=>{return orderItem.mainId===item.mainId})
        if(itemIndex<0){
            const newItem = {
                quantity:1,
                ...item
            };
            setOrder([...order, newItem]); 
        }
        else{
            const newOrder = order.map((orderItem,index)=>{
                if(index===itemIndex){
                    return{
                        ...orderItem,
                        quantity:orderItem.quantity+1
                    }
                }
                else{
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
    };

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
            <Basket 
            quantity={order.length} 
            handleHide={handleHide}
            />
            {isLoading
            ?<Preloader/>
            :<GoodsList 
            goods={currentGoods} 
            addOrder={addOrder}
            />}
            {isHide && <BasketList 
            order={order} 
            handleHide={handleHide}
            removeOrder={removeOrder}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            />}
            {!!goods.length&&
            <Pagination 
            maxPages={maxPages}
            prevPage={prevPage}
            nextPage={nextPage}
            firstPage={firstPage}
            lastPage={lastPage}/>}
        </main>
    )
}