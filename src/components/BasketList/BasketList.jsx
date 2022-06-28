import { BasketItem } from "../BasketItem/BasketItem"
import './BasketList.css'
export function BasketList(props){
    const {order,
        handleHide,
        removeOrder,
        incrementQuantity,
        decrementQuantity,
    }=props
    const totalPrice=order.reduce((sum,item)=>{
        return sum+item.quantity*item.price.finalPrice
    },0)
    return(
        <ul className="collection basket-list">
        <li  className="collection-item active">Basket
            <i className="material-icons close-icon" onClick={handleHide}>close</i>
        </li>
        {order.length
        ?order.map(item=>(
        <BasketItem 
            key={item.mainId} 
            {...item}
            removeOrder={removeOrder}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
        />))
        :<li className="collection-item">Basket is empty</li>}
        <li  className="collection-item active">Full price: {totalPrice} V-Bucks <button className="btn pay">pay</button></li>
      </ul>
    )
}