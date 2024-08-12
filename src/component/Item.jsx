function Item({data,remove,packed}) {
    return (
        <li>
            <input type="checkbox" name="packed" id="packed" onChange={()=>{packed(data.id)}} checked={data.packed}  />
            <p style={{textDecoration : data.packed?'line-through':null}}>{data.num} {data.item}</p> 
            <button onClick={()=>{remove(data.id)}}>❌</button>
        </li>
    )
}

export default Item
