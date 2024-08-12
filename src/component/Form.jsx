import { useState } from "react"

function Form({addItem}) {
    const [formData, setFormData] = useState({ num : 0, item : '',})

    const onHandleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(currData=>{
            return {
                ...currData,
                [name] : value
            }
        })
    }

    const submitHandling = (e)=>{
        e.preventDefault();
        if(!formData.item) return;
        if(!formData.num) return;
        
        addItem(formData);
        setFormData({ num : 0, item : '',})
    }


    return (
        <form className="add-form" onSubmit={submitHandling} >
            <h3>What do you need for your 😍 trip?</h3>
            <select name="num" id="" value={formData.num} onChange={onHandleChange}>
                {Array.from({length:20},(_,i)=>i+1).map(ele=><option value={ele}>{ele}</option>)}
            </select>
            <input type="text" className="item" name="item" placeholder="item..." onChange={onHandleChange} value={formData.item} />
            <button type="submit">ADD</button>
        </form>
    )
}

export default Form
