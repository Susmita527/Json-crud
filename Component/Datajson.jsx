import React ,{useState,useEffect} from 'react'
import record from '../record.json'

function Datajson() {
        const [name,setName]=useState("");
        const [price,setPrice]=useState("");
        const [description,setDescription]=useState("");
        const [data,setData]=useState(record);
        const [editdata,setEditdata]=useState(null);
        const [button,setButton]=useState(false);

        
    function handleSubmit(e){
            e.preventDefault();
            const newdata={
                "id":data.length+1,
                   "name":name,
                    "price":price,
                    "description":description,
                }
            setData((prevData) => [...prevData,newdata]);
            setName("");
             setPrice("");
             setDescription("");

        }
//using index
        // function handleEdit(index){
        //     const edit=data[index];
        //     if(edit!==null){
        //    setButton(true);
        //    setEditdata(index);
        //    setName(edit.name);
        //    setPrice(edit.price);
        //    setDescription(edit.description);
        //    console.log("handleedit is working")
           
        //     }
           
        // }

        // function handleUpdate(e){
        //     e.preventDefault();
        //     const updatedData= data.map((item,index)=>{
           
                
        //          if(index===editdata){
        //             return {
        //                 ...item,
        //                 name:name,
        //                 price:price,
        //                 description:description
        //             }
        //         }

        //         return item;
                
                
        //     });
        //     setData(updatedData);
        // }

        // function handleDelete(index) {
        //     const deletedata= data.filter((item,i)=> i!==index);
        //     setData(deletedata);
        //     console.log("delete function is working");
        // }



        //using id
        function handleEdit(id){
                const edit=data[id-1];
                if(edit!==null){
               setButton(true);
               setEditdata(id);
               setName(edit.name);
               setPrice(edit.price);
               setDescription(edit.description);
               console.log("handleedit is working")
               
                }
               
            }
    
            function handleUpdate(e){
                e.preventDefault();
                const updatedData= data.map(item =>{
               
                    
                     if(item.id === editdata){
                        return {
                            ...item,
                            name:name,
                            price:price,
                            description:description
                        }
                    }
    
                    return item;
                    
                    
                });
                setData(updatedData);
            }

        function handleDelete(id) {
                const deletedata= data.filter(item=> item.id !==id);
                setData(deletedata);
                console.log("delete function is working");
            }


        
     return (
    <div>
        <h2>Json Data</h2>
        <table border="1">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {data.map((rec)=>{
                  return  <tr key={rec.id}>
                        <td>{rec.id}</td>
                        <td>{rec.name}</td>
                        <td>{rec.price}</td>
                        <td>{rec.description}</td>
                        <td>
                     
                     <button onClick={()=>handleEdit(rec.id)}>Edit</button> 
                     <button onClick={()=>handleDelete(rec.id)}>Delete</button>
              </td>
                    </tr>
                    }
                    
                )}
            </tbody>

            </table>
            <br/><br/>
            
            <form >
                <label>Enter Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br/><br/>

                <label>Enter Price:</label>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/> <br/><br/>

                <label>Enter Description:</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/><br/><br/>


                {
                button===false ? <button onClick={()=>handleSubmit()}>Submit</button> :  <button onClick={handleUpdate}>Update</button>
                }
               
                
                </form>
       
  
    </div>
  )
}
  
export default Datajson
