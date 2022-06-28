import './Basket.css'
export function Basket(props){   
    const{quantity=0,handleHide}=props 
    return(
        <div className='basket' onClick={handleHide}>
             <i className="material-icons" >shopping_cart</i>
             <span>{(quantity===0)?'':quantity}</span>
        </div>
    )
}