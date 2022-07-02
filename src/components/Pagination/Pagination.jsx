import './Pagination.css'
export function Pagination(props){
    const {maxPages,
        prevPage,
        nextPage,
        firstPage,
        lastPage
    }=props

    const pageNumbers = []
    for(let i=1;i<=maxPages;i++){
        pageNumbers.push(i)
    }
    return(
        <ul className="pagination">
           <button className='btn pagination-btn' onClick={()=>firstPage()}><i className='material-icons'>skip_previous</i></button>
           <button className='btn pagination-btn' onClick={()=>prevPage()}><i className='material-icons'>chevron_left</i>Prev</button>
           <button className='btn pagination-btn' onClick={()=>nextPage()}>Next<i className='material-icons'>chevron_right</i></button>
           <button className='btn pagination-btn' onClick={()=>lastPage()}><i className='material-icons'>skip_next</i></button>
        </ul>
    )
}