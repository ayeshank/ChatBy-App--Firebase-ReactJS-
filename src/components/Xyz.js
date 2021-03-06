// function CreateRoom() {
//     const [newroom,setNewRoom]=useState('');
//   function generateID ()
//   {
//     var str="chatby-";
//     const myRnId = parseInt(Date.now() * Math.random(1,10));
//     setNewRoom(str + myRnId);
//   }
//   return(
//     <>
//     <h5>Your Room ID: </h5>
//     <input value={newroom} placeholder="Enter Room ID" />
//     <button>Go Back</button> 
//     <button>Go to Chat Room</button> 
//     </>
//   );
//   }
//   function ExistingRoom() {
//     const [roomid,setRoomid]=useState('');
//     return(
//       <>
//       <h5>Enter Existing Room ID</h5>
//       <input value={roomid} onChange={(e)=>setRoomid(e.target.value)} placeholder="Enter Room ID" required/>
//       <button>Go Back</button> 
//       <button>Go to Chat Room</button> 
//       </>
//     );
//   }
//   function NewRoom()
//   {
//     const [a,setA]=useState(0);
//     const [b,setB]=useState('');
//     return(
//       <>
//       <button onClick={()=>setA(1)} >New Room</button>
//       <button onClick= {()=>setB(1)}>Existing Room</button>
//       </>
//     );
//   }
  





//   const checker =(rid) =>{
//     const cityRef = firestore.collection('messages').doc(rid);
//     console.log(rid);
//     console.log(cityRef);
//     const doc = cityRef.get();
//     // {doc !== "" ? <ChatRoom rname={userRoom}/> : alert("Not found")}
//     if (doc != "") 
//     {
//       alert("Room exist");
//       console.log('Document data:', doc.data());
//       setDecide(false);
//       return(<ChatRoom rname={userRoom}/>);

//     } 
//     else if(doc == "")
//     {
//       alert("Room donot exist");
//       setDecide(false);
//     }
//   }
//     if (userRoom == "" || roomid == "" || newroom == "")
//   {
//     return(
//       <div>
//       {  newroom != "" ?  
//         <div>
//         <h3 style={{color:'black'}}> {newroom}</h3>
//         <input value={newroom} onChange={(e)=>setRoomid(e.target.value)} placeholder="Enter Room ID" />
//         <button onClick={()=>setNewRoom(0)} >Go Back</button>
//         <button onClick= {()=>setUserRoom(newroom)}>Go to Chat Room</button>
//         </div>
//         :
//         <div>
//         <button onClick={generateID} >Create a new room</button>
//         <h4><strong>or</strong></h4>
//         <input value={roomid} onChange={(e)=>setRoomid(e.target.value)} placeholder="Enter Room ID" required/>
//         <button onClick= {()=>{setUserRoom(roomid);checker(roomid)}} disabled={!roomid}>Go to Chat Room</button>
//         </div>
//       }
//       </div>
//     )
//   }
// }
  // const  checkroom= async(check)=> {
  //   var id= "room"+check;
  //   // alert(id);
  //   const cityRef = firestore.collection('messages').doc(check);
  // const doc = await cityRef.get();
  // if (!doc.exists) {
  //   alert("Room donot exist");
  //   // return(<ChatRoom rname={check}/>)
  //   return false;
  // } 
  // else if(doc.exists)
  // {
  //   alert("Room exist");
  //     console.log('Document data:', doc.data());
  //     // return(<ChatRoom rname={check}/>)
  //     return true;
  // }
  // }
  // useEffect(()=>{
  //   if(checkroom)
  //   {
  //     return(<ChatRoom rname={userRoom}/>);
  //   }
  // })