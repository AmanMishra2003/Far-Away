import { useState } from "react"
import Item from "./Item"

function List({data,remove,packed,ClearList}) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItem ;
    
    if(sortBy==='input') sortedItem = data;
    if(sortBy==='description') sortedItem = data.slice().sort((a,b)=> a.item.localeCompare(b.item));
    if(sortBy==='packed') sortedItem = data.slice().sort((a,b)=> Number(a.num)-Number(b.num));
    console.log(sortedItem)

    return (
        <div className="list">
            <ul>
            {
                sortedItem.map((ele)=>{
                    return(
                            <Item data={ele} remove={remove} key={ele.id} packed={packed} />
                    )
                })
            }
            </ul>
            <div className="actionFunc">
            <select name="filterList" id="" value={sortBy} onChange={(e)=>{setSortBy(e.target.value)}} >
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description order</option>
                <option value="packed">Sort by packed status</option>
            </select>
            {
                (data.length!==0)
                &&
                <div className="actions">
                    <button onClick={ClearList} >clear list</button>
                </div>
            }
            </div>
        </div>
    )
}

export default List
