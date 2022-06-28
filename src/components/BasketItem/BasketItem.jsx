import './BasketItem.css'
export function BasketItem(props){
    const{
        mainId,
        displayName,
        price,
        quantity,
        removeOrder,
        decrementQuantity,
        incrementQuantity,
    } = props
    return <li className="collection-item" key={mainId}>
        {displayName} <i className="material-icons change-quantity" onClick={()=>decrementQuantity(mainId)}>remove</i> x{quantity} <i className="material-icons change-quantity" onClick={()=>incrementQuantity(mainId)}>add</i> = {price.finalPrice*quantity} V-Bucks
        <span className="secondary-content"><i className="material-icons" onClick={()=>removeOrder(mainId)}>close</i></span>
           </li>
}