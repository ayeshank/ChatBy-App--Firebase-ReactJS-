import './App.css';
import { useEffect, useState } from 'react';
import { Db } from './firebase';

function App() {
  const [article,setArticle]=useState('');
  const [postedBy,setpostedBy]=useState('');
  const [data,setData]=useState([]);

  function load()
  {
    let data=[]
    Db.on('value',(snapshot)=>{
      let val=snapshot.val();
      console.log("Val",val);
      setData(val);
      // for(var prop in val)
      // {
      //   data.push(val[prop])
      // }
      // setData(data);
      console.log(data);
    });
  };

  async function  post()
  {
    if(postedBy && article !== "")
    {
      let data={
        article,
        postedBy,
      };
      // const res=await Db.child("/articlesChild").child("/secondChild").push(data);
      const res=await Db.push(data);
      console.log("Object",res);
    }
   load();
   setpostedBy('');
   setArticle('');
  };

  async function  remove(id)
  {
  Db.child(id).remove();
  }

  async function  update(id)
  {
  Db.child(id).update({
    article:"edited"
  });
  }

  useEffect(()=>{
    load();
  },[]);

  // useEffect(()=>{
  //   let data=[]
  //   Db.on('value',(snapshot)=>{
  //     let val=snapshot.val();
  //     console.log("Val",val);
  //     for(var prop in val)
  //     {
  //       data.push(val[prop])
  //     }
  //     setData(data);
  //     console.log(data);
  //   });
  // },[]);
  
  
  return (
    <div className="App">
     <h1>Firebase</h1>
     <input name="article" value={article} placeholder="Article Name" onChange={(e)=>setArticle(e.target.value)}/>
     <br/>
     <input name="postedBy" value={postedBy} placeholder="Posted By" onChange={(e)=>setpostedBy(e.target.value)}/>
    <br/>
    <button onClick={()=>post()} >Submit</button><br/>
    {data ? Object.keys(data).map((val)=>{
            return(
              <div>
              <p>Posted By    :{data[val].postedBy}
              <br/>
               Article    :{data[val].article}
              </p>
              <button onClick={()=>remove(val)}> 🗑️ </button>
              <button onClick={()=>update(val)}> 🖊️ </button>
              
              <hr/>              
              </div>
            );
      })
      :"Empty Todo List"
    }
    </div>
  );
}

export default App;
