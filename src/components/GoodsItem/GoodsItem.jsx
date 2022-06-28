import './GoodsItem.css'
export function GoodsItem(props){
    const { mainId,
            displayName,
            displayDescription,
            displayAssets,
            price,
            addOrder,
        } = props
    return(
        <div className="card">
            <div className="card-image">
            <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className="card-content">
            <button className="btn" onClick={()=>addOrder({mainId,price,displayName})}>Buy</button>
            <p>{displayDescription?displayDescription:`Goods has no description`}</p>
            </div>
          </div>
    )
}