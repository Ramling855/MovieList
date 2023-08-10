import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios"
function App() {
  const [list, setList] = useState([])
useEffect(() => {
   axios.get("http://localhost:5000/list").then(res=>{
    // console.log(res)
 setList(res.data)
  })

  console.log("axios")
}, [])


  return (
    <div className="App">
      <h1 style={{color:"red", fontSize:"30px"}}>Movie list</h1>
      <p style={{color:"blue", fontSize:"30px", display:"flex", flexDirection:"row"}}>1.Title 2.Rated 3.Release Date 4.Posters</p>
{list.map((data)=>{
return <div  >

<div className="card "  style={{height:"200px" }}>
  
  <div class="card-body col-sm-6" style={{display: "flex", flexDirection: "row"}}>
    <h5 class="card-title">{data?.Title}</h5>
    <p class="card-text">{data?.Rated}</p>
    <a href="#" class="btn btn-primary">{data?.Released}</a>
    <img src={data?.Images[0]} style={{height:"200px", width:"300px"}}/>
    <img src={data?.Images[1]} style={{height:"200px", width:"300px"}}/>
    <img src={data?.Images[2]} style={{height:"200px", width:"300px"}}/>
    <img src={data?.Images[3]} style={{height:"200px", width:"300px"}}/>
  
    </div>
</div>
</div>

})}
    </div>
  );
}

export default App;
