import React,{useState,useEffect} from 'react'

function Apidata() {
    const url="https://fakestoreapi.com/products";
    const [data,setData]=useState([]);
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    const fetchinfo=()=>{
        return fetch(url)
        .then((response)=>response.json())
        .then((data)=>setData(data))
    };
    

    // const addProduct=()=>{
     
    //     const newProduct={
    //             id: data.length + 1,
    //             title: title,
    //             price: price,
    //             description: description ,
    //             category: 'electronic'
    //     };
        

    // fetch('https://fakestoreapi.com/products',{
    //     method:"POST",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(newProduct),
    // })
  
    //     .then(response=>response.json())
    //     .then((newdata)=>{
    //         setData((prevData) => [...prevData,newdata]);
    //         setTitle("");
    //         setPrice("");
    //         setDescription("");
    //     })
    // };
    const updateProduct=()=>{
        fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    
    useEffect(()=> {
        fetchinfo();
        updateProduct();
        console.log("hello");
       
    },[]);


  return (
    <div>
    <h1>product details</h1>
    
    
    
    <table border="1">
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {data.map((product) =>(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                </tr>
            ))}
            </tbody>

            </table>
            <br/><br/>

            {/* <form onSubmit={addProduct}>
                <label>Enter Product Title:</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/><br/>

                <label>Enter Product Price:</label>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/> <br/><br/>

                <label>Enter Product Description:</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/><br/><br/>

                <button>Submit</button>
                
                </form>
    */}
    </div>
  )
}

export default Apidata
