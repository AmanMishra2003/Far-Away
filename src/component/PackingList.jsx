import {useState} from 'react';
import List from './List';
import Stats from './Stats';
import Form from './Form';

import { v4 as uuid} from 'uuid';

const trialData = [
    {
        id : uuid(),
        num : 1,
        item : 'Brush',
        packed : true
    },
    {
        id : uuid(),
        num : 1,
        item : 'Toothpaste',
        packed : false
    },

]

function PackingList() {
    const [data, setData] = useState(trialData)

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
    

    const deleteItem = (id)=>{
        setData(currItem=>(
            currItem.filter(ele=>ele.id!==id)
        ))
    }


    return (
        <>
        <Form addItem={addItem}/>
        <List data={data} remove={deleteItem} packed={NotifyPacked}/>
        <Stats data={data}/>
        </>
    )
}

export default PackingList
