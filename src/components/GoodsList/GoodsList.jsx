import {GoodsItem} from './../GoodsItem/GoodsItem'
import './GoodsList.css'
export function GoodsList(props){
    const {goods=[],addOrder}=props
    if(!goods.length){
        return <h3>Not found</h3>
    }
    return(
        <div className='goods'>
            {goods.map(item=><GoodsItem key={item.mainId} {...item} addOrder={addOrder}/>)}
        </div>
    )
}