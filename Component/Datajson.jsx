import React ,{useState} from 'react'
import record from '../record.json'

function Datajson() {
        const [name,setName]=useState("");
        const [price,setPrice]=useState("");
        const [description,setDescription]=useState("");
        const [data,setData]=useState(record);
        const [editdata,setEditdata]=useState(null);
        const [button,setButton]=useState(false);
        const [search,setSearch]=useState('');
        const [currentpage,setCurrentpage]=useState(1);
        const pageitem=5;

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
        function handleEdit(id){
                const edit=data[id-1];
                if(edit!==null){
               setButton(true);
               setEditdata(id);
               setName(edit.name);
               setPrice(edit.price);
               setDescription(edit.description);
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
            const filteredData = data.filter(
                (rec) =>
                    rec.name.toLowerCase().includes(search.toLowerCase()) 
              );
              //pagination // commit


             const index_of_lastitem=currentpage*pageitem;
             const index_of_firstitem=index_of_lastitem-pageitem;
             const currentitem=filteredData.slice(index_of_firstitem,index_of_lastitem);
              const totalpage=Math.ceil(filteredData.length/pageitem);

              function handlepagination(pagenumber){
                setCurrentpage(pagenumber);
              }
// adding to coment to
     return (
    <div>
        <h2>Json Data</h2>
        <input type="text" value={search} placeholder="search" onChange={(e)=>setSearch(e.target.value)}/> 
        <button style={{border:"1px solid black"}}>Search</button> <br/><br/>
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
                {currentitem.map((rec)=>{
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
            </table><br/><br/>

            {
                Array.from({length:totalpage},(item,index)=>{
                    return(
                <button  style={{border:"1px solid black"}} key={index+1} onClick={()=>handlepagination(index+1)}>{index+1}</button>
           ) })}
            <br/><br/>
            <form >
                <label>Enter Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <br/><br/>

                <label>Enter Price:</label>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/> <br/><br/>

                <label>Enter Description:</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/><br/><br/>
                {
                button===false 
                ? <button style={{border:"1px solid black"}} onClick={handleSubmit}>Submit</button> 
                :  <button onClick={handleUpdate}>Update</button>
                }
                </form>
               
    </div>
  )
}
  
export default Datajson
