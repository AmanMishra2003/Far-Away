import {useEffect, useState} from 'react';
import List from './List';
import Stats from './Stats';
import Form from './Form';

import { v4 as uuid} from 'uuid';


function PackingList() {
    const [data, setData] = useState([])

    const addItem = (item)=>{
        setData(currItem=>(
            [
                ...currItem,
                {
                    ...item, packed:false, id : uuid()
                }
            ]
        ))
    }

    const NotifyPacked = (id)=>{
        setData(currItem=>(
            currItem.map(ele=>{
                if(ele.id===id){
                    return {...ele ,packed:!ele.packed}
                }else{
                    return ele
                }
            })
        ))
    }

    const ClearList = ()=>{
        const confirm = window.confirm('Are you sure you want to delete the items?')
        if(confirm) setData([]);
    }
    

    const deleteItem = (id)=>{
        setData(currItem=>(
            currItem.filter(ele=>ele.id!==id)
        ))
    }



    return (
        <>
        <Form addItem={addItem}/>
        <List data={data} remove={deleteItem} packed={NotifyPacked} ClearList={ClearList}/>
        <Stats data={data}/>
        </>
    )
}

export default PackingList
