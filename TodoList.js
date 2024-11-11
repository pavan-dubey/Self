import React, { useState } from 'react'

const TodoList = () => {
    const [item, setItem] = useState('')
    const [storeItem, setStoreItem] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setItem(value)

        console.log(item)
    }


    const addItem = () => {
        if (item == '') {
            alert('ass itne')
        }
        else {
            setStoreItem((prevItems) => [...prevItems, item])
            setItem('')


            console.log(storeItem);

        }
    }

    const handleDel=(id)=>{
        setStoreItem((pre)=>pre.filter((_,i) => i != id))

    }
    return (
        <><div>TodoList</div>

            <div>

                <input type='text' value={item} name='item' onChange={handleChange} />
                <button onClick={addItem}>Add Task</button>

            </div>

            <div style={{
                backgroundColor: 'gray',
                width: '200px'
            }}>


                {
                    storeItem?.map((ele, id) => (

                        <>
                            <ul style={{
                                display:'flex',
                                justifyContent:'space-around',
                                alignItems:'center'
                            }}>

                                <li id='key' style={{
                                    listStyleType: 'number'
                                }}>{ele}</li>
                                <button onClick={()=>handleDel(id)} style={{
                                    border:'none',
                                    outline:'none',
                                    borderRadius:'5px',
                                    padding:'2px',
                                    cursor:'pointer'
                                }}>Remove</button>
                            </ul>
                        </>
                    ))

                }

            </div>

        </>
    )
}

export default TodoList