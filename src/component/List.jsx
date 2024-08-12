import Item from "./Item"

function List({data,remove,packed}) {
    return (
        <div className="list">
            <ul>
            {
                data.map((ele)=>{
                    return(
                            <Item data={ele} remove={remove} key={ele.id} packed={packed} />
                    )
                })
            }
            </ul>
            <div className="actionFunc">
            <select name="filterList" id="">
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description order</option>
                <option value="packed">Sort by packed status</option>
            </select>
            <div className="actions">
                <button >clear list</button>
            </div>
            </div>
        </div>
    )
}

export default List
